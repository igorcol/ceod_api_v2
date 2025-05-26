import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";


const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const updateQuarto = async (id: string, quarto: string | null): Promise<object | Error> => {
    try {
        const updated = await databases.updateDocument(
            DB_ID,
            COLLECTION_ID,
            id,
            { QUARTO: quarto }
        )


        console.log(`✅ QUARTO atualizado -> id: ${id}`);
        return updated;
    }
    catch (err: any) {
        if (err.code === 404) {
            return new Error(`Usuário com ID ${id} não encontrado.`);
        }

        console.error("❌ Erro ao atualizar QUARTO:", err);
        return new Error("Erro interno ao atualizar o quarto.");
    }

}