import User from "../../../models/userModel";


export const getById = async (ID: string) => {
    try {
        const user = await User.findOne({ _id: ID }); 
        
        if (user === null) {
            console.log(`❌ Não existe nenhum usuário com o id ${ID}`)
            return new Error(`❌ Não existe nenhum usuário com o id ${ID}`)
        }
        
        console.log(`🟩 USERS | GetById -> ${ID}`)
        return user
    }
    catch (err) {
        return new Error(`❌ Erro ao buscar id ${ID}`)
    }
}