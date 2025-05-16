import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";
import { Inscrito } from "../../../../../types/inscritos";

interface UpdateEmailReceivedBod {
    ticketReceived: boolean
}

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const updateEmailReceived = async (ID: string, body: UpdateEmailReceivedBod): Promise<object | Error> => {
    try {
        // Busca o usuario
        const searchResult = await databases.getDocument<Inscrito>(
            DB_ID,
            COLLECTION_ID,
            ID
        )

        if (searchResult.total === 0) {
            console.log(`❌ Nenhum usuário com $ID ${ID}`);
            return new Error(`❌ Nenhum usuário com $ID ${ID}`);
        }

        const doc = searchResult.documents[0]

        // Atualiza o ticketReceived
        const updated = await databases.updateDocument(
            DB_ID, COLLECTION_ID,
            doc.$id,
            {
                ticketReceived: body.ticketReceived
            }
        )

        console.log(`✅ Email recebido atualizado para $ID ${ID}`);
        return updated;
    }
    catch (err) {
        console.log('❌ Erro ao atualizar ticketReceived', err)
        return new Error(`❌ Erro ao atualizar ticketReceived | ${err}`)
    }
}