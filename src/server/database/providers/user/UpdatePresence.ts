import User from "../../../models/userModel";


export const updatePresence = async (ID: string, presenca: boolean) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: ID },
            { presenca: presenca },
            { new: true }
        );
        if (user === null) {
            console.log(`❌ Não existe nenhum usuário com o id ${ID}`)
            return new Error(`❌ Não existe nenhum usuário com o id ${ID}`)
        }
        console.log(`✅ Presença confirmada -> id: ${ID}`)
        return user
    } 
    catch (err) {
        console.log('❌ Erro ao atualizar presença', err)
        return new Error('❌ Erro ao atualizar presença')
    }
}