import { Query } from "node-appwrite";
import { Inscrito } from "../../../../../types/inscritos";
import { config } from "../../../config";
import { databases } from "../../../services/appwrite.service";


const DB_ID = config.appwrite.databaseId;
const COLLECTION_ID = config.appwrite.inscritosCollectionId;


// Função auxiliar
const isID = (input: string): boolean => {
    return /^\d+$/.test(input.trim());
};


export const search = async (searchTerm: string): Promise<Inscrito[] | Error> => {
    try {
        let attributeToSearch: string;

        if (isID(searchTerm)) {
            attributeToSearch = 'ID_SISDM';
            console.log(`🔎 Termo de busca identificado como ID. Buscando em [ID_SISDM] por: "${searchTerm}"`);
        } else {
            attributeToSearch = 'NOME';
            console.log(`🔎 Termo de busca identificado como NOME. Buscando em [NOME] por: "${searchTerm}"`);
        }

        const searchQuery = Query.search(attributeToSearch, searchTerm);

        const results = await databases.listDocuments<Inscrito>(
            DB_ID, COLLECTION_ID,
            [searchQuery]
        );

        console.log(`🟩 USERS | Search -> Encontrados ${results.total} resultados para "${searchTerm}" em [${attributeToSearch}]`);
        return results.documents;

    }
    catch (error) {
        console.error('❌ Erro ao executar a busca de usuários:', error);
        return new Error(`❌ Erro ao executar a busca de usuários: ${error}`);
    }
}