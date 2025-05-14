import { Query } from "node-appwrite";
import { config } from "../../../config";
import User from "../../../models/userModel";
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
            console.log(`❌ Nenhum usuário com CODIGO = ${ID}`);
            return new Error(`❌ Nenhum usuário com CODIGO = ${ID}`);
        }
        
        console.log(`🟩 USERS | GetById -> ${ID}`)
        return result
    }
    catch (err) {
        return new Error(`❌ Erro ao buscar id ${ID}`)
    }
}