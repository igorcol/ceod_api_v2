import { databases } from "../../../services/appwrite.service";
import { config } from "../../../config";
import { Inscrito } from "../../../../../types/inscritos";

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const updatePresence = async (ID: string, presenca: boolean) => {
    try {
        // Busca pelo usuario
        const result = await databases.getDocument<Inscrito>(
            DB_ID,
            COLLECTION_ID,
            ID
        )

        if (!result.total || result.documents.length === 0) {
            console.log(`❌ Nenhum usuário com $ID ${ID}`);
            return new Error(`❌ Nenhum usuário com $ID ${ID}`);
        }

        const doc = result

        // Validar presença
        if (typeof presenca !== "boolean") {
            return new Error("Valor de 'presenca' inválido. Deve ser true ou false.");
        }

        // Atualizar presença
        const updated = await databases.updateDocument(
            DB_ID,
            COLLECTION_ID,
            doc.$id,
            {
                presenca: presenca
            }
        );

        console.log(`✅ Presença atualizada para $ID ${ID}`);
        return updated;
    }
    catch (err) {
        console.log('❌ Erro ao atualizar presença', err)
        return new Error('❌ Erro ao atualizar presença')
    }
}