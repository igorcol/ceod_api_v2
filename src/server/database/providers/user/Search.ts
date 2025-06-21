import { Query } from "node-appwrite";
import { Inscrito } from "../../../../../types/inscritos";
import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";

const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;

const isID = (input: string): boolean => {
    return /^\d+$/.test(input.trim());
};

export const search = async (searchTerm: string): Promise<Inscrito[] | Error> => {
    try {
        let queries: string[];

        if (isID(searchTerm)) {
            console.log(`🔎 Termo de busca identificado como ID. Buscando em [ID_SISDM] por: "${searchTerm}"`);
            queries = [Query.search('ID_SISDM', searchTerm)];
        } else {
            console.log(`🔎 Termo de busca identificado como NOME. Buscando por TODOS os termos: "${searchTerm}"`);
            
            // Quebra o termo de busca em palavras individuais
            const words = searchTerm.trim().split(' ').filter(word => word.length > 0);

            // Array de queries, uma para cada palavra.
            queries = words.map(word => Query.search('NOME', word));
        }

        const results = await databases.listDocuments<Inscrito>(
            DB_ID, COLLECTION_ID,
            queries 
        );

        console.log(`🟩 USERS | Search -> Encontrados ${results.total} resultados para "${searchTerm}"`);
        return results.documents;

    } catch (error) {
        console.error('❌ Erro ao executar a busca de usuários:', error);
        return new Error(`❌ Erro ao executar a busca de usuários: ${error}`);
    }
}