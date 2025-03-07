import User from "../../../models/userModel";

interface UpdateEmailReceivedBod {
    emailReceived: boolean
}


export const updateEmailReceived = async (ID: string, body: UpdateEmailReceivedBod) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: ID },
            { emailReceived: body.emailReceived },
            { new: true }
        );
        if (user === null) {
            console.log(`❌ Não existe nenhum usuário com o id ${ID}`)
            return new Error(`❌ Não existe nenhum usuário com o id ${ID}`)
        }
        console.log(`✅ Email recebido -> id: ${ID}`)
        return user
    } 
    catch (err) {
        console.log('❌ Erro ao atualizar emailReceived', err)
        return new Error('❌ Erro ao atualizar emailReceived')
    }
}