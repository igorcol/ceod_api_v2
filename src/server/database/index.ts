import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config';

// Faz a conexão com o banco de dados MongoDB usando mongoose

const connectDB = async (URL: string | undefined) => {
  if (!URL) return

  try {
    await mongoose.connect(URL) 

    URL.includes('localhost') 
    ? console.log('☑️ Conectado ao Mongo Local com sucesso!')
    : console.log('✅ Conectado ao MongoDB ONLINE com sucesso!')

    console.log(URL)

  } 
  catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
