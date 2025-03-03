import mongoose from 'mongoose';

// Arquivo de modelo de usuário, contendo a definição do schema e do modelo de dados
// para os documentos de usuários no banco de dados MongoDB, utilizando o Mongoose.

const UserSchema = new mongoose.Schema({}, { strict: false }); 
const User = mongoose.model('User', UserSchema);

export default User;
