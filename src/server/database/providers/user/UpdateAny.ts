import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const updateAny = async (
    id: string,
    fieldsToUpdate: Record<string, any>
): Promise<object | Error> => {

    try {
        const updated = await databases.updateDocument(
            DB_ID, COLLECTION_ID,
            id,
            fieldsToUpdate
        );

        console.log(`✅ Atualização genérica feita -> id: ${id}`);
        return updated;
    }
    catch (err: any) {
        if (err.code === 404) {
            return new Error(`Usuário com ID ${id} não encontrado.`);
        }

        console.error("❌ Erro ao atualizar genericamente:", err);
        return new Error("Erro interno ao atualizar o usuário.");
    }
}