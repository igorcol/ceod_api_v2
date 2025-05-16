import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";
import { Inscrito } from "../../../../../types/inscritos";

const DB_ID = config.appwrite.databaseId
const COLLECTION_ID = config.appwrite.inscritosCollectionId

export const getById = async (ID: string): Promise<Inscrito | Error> => {
    try {
        const result = await databases.getDocument<Inscrito>(
            DB_ID,
            COLLECTION_ID,
            ID
        )
        
        if (!result) {
            console.log(`❌ Nenhum usuário com $ID = ${ID}`);
            return new Error(`❌ Nenhum usuário com $ID = ${ID}`);
        }
        
        console.log(`🟩 USERS | GetById -> ${ID}`)
        return result
    }
    catch (err) {
        return new Error(`❌ Erro ao buscar $ID ${ID}`)
    }
}