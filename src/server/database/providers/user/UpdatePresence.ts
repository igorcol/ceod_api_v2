import { Query } from "node-appwrite";
import User from "../../../models/userModel";
import { databases } from "../../../services/appwrite.service";
import { config } from "../../../config";

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const updatePresence = async (ID: string, presenca: boolean) => {
    try {
        // Busca pelo usuario
        const result = await databases.listDocuments(
            DB_ID, COLLECTION_ID,
            [Query.equal("CODIGO", ID)]
        )

        if (!result.total || result.documents.length === 0) {
            console.log(`❌ Nenhum usuário com CODIGO ${ID}`);
            return new Error(`❌ Nenhum usuário com CODIGO ${ID}`);
        }

        const doc = result.documents[0]

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

        console.log(`✅ Presença atualizada para CODIGO ${ID}`);
        return updated;
    } 
    catch (err) {
        console.log('❌ Erro ao atualizar presença', err)
        return new Error('❌ Erro ao atualizar presença')
    }
}