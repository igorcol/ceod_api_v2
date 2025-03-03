import mongoose from "mongoose";

export const dropJsonDb = async () => {
    try {
        await mongoose.connection.dropDatabase();
        console.log('✅ Json DB deletado com sucesso.')
        return
    } 
    catch (err) {
        console.log('❌ Erro ao deletar o banco de dados', err)
        return new Error('❌ Erro ao deletar o banco de dados')
    }
}