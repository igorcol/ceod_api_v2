import { databases } from "../../../services/appwrite.service";
import { Inscrito } from "../../../../../types/inscritos";
import { Query } from "node-appwrite";
import { config } from "../../../config";

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

export const getEmails = async (): Promise<
Array<{
    $id: string;
    CODIGO: string;
    NOME: string;
    EMAIL: string;
    emailReceived: boolean;
}> | Error> => {
    try {
        const result = await databases.listDocuments<Inscrito>(
            DB_ID, COLLECTION_ID,
            [Query.limit(5000)]
        );

        if (!result || result.documents.length === 0) {
            throw new Error("Nenhum email encontrado");
        }

        console.log(`🟢 USER | Get Emails -> ${result.documents.length} emails found.\n`);

        const EMAILS = result.documents.map(doc => ({
            $id: doc.$id,
            CODIGO: doc.CODIGO,
            NOME: doc.NOME,
            EMAIL: doc.EMAIL,
            emailReceived: doc.emailReceived ?? false
        }));

        return EMAILS
    }
    catch (error) {
        console.log("❌ ERROR | USER | GetEmail:", error)
        return new Error('Erro ao buscar emails.')
    }
}

