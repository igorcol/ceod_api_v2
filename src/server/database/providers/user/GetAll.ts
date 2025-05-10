import User from "../../../models/userModel";

interface GetAllOptions {
    page?: number
    limit?: number
    full?: boolean
}

export const getAll = async (options: GetAllOptions): Promise<object | object[] | Error> => {
    const { page = 1, limit = 50, full = false } = options;

    try {
        if (full) { // Se é para pegar todos os usuario de uma vez
            const users = await User.find().lean();
            console.log(`🟩 USERS | Full | ${users.length} users`);
            return users;
        }

        const skip = (page - 1) * limit;

        const [users, total] = await Promise.all([
            User.find().skip(skip).limit(limit).lean(),
            User.countDocuments()
        ]);

        console.log(`🟩 USERS | Paginated | Page ${page} | ${users.length} users`);
        
        const resObj = {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            data: users
        };

        return resObj
    }
    catch (error) {
        console.log("❌ ERROR | USERS | GetAll:", error)
        return new Error('Erro ao buscar usuários.')
    }
}