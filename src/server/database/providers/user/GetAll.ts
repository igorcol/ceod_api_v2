import { Query } from "node-appwrite";
import { config } from "../../../config";
import User from "../../../models/userModel";
import { databases } from "../../../services/appwrite.service";

interface GetAllOptions {
    page?: number
    limit?: number
    full?: boolean
}

const DB_ID = config.appwrite.databaseId
const COLLECTION_ID = config.appwrite.inscritosCollectionId

export const getAll = async (options: GetAllOptions): Promise<object | object[] | Error> => {
    const { page = 1, limit = 50, full = false } = options;

    try {
        const queries = [Query.orderAsc("NOME")];

        if (full) {
            const countResult = await databases.listDocuments(DB_ID, COLLECTION_ID, [
                Query.limit(1)
            ])
            const total = countResult.total;

            queries.push(Query.limit(total));
        }
        else {
            queries.push(Query.limit(limit));
            queries.push(Query.offset((page - 1) * limit));
        }

        const result = await databases.listDocuments(
            DB_ID, COLLECTION_ID, queries
        )

        const total = result.total;

        if (!full && (page - 1) * limit >= total && total !== 0) {
            return new Error(`Página ${page} inválida. Total de páginas: ${Math.ceil(total / limit)}.`);
        }

        console.log(`🟩 USERS | ${full ? "Full" : "Page " + page} | Retornados ${result.documents.length} usuários`);

        return full
            ? result.documents
            : {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                data: result.documents
            }

    }
    catch (error) {
        console.log("❌ ERROR | USERS | GetAll:", error)
        return new Error('Erro ao buscar usuários.')
    }
}