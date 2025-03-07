import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config';

// Faz a conexão com o banco de dados MongoDB usando mongoose
const isProduction = config.ENV === 'production' 

const connectDB = async (URL: string | undefined) => {
  if (!URL) return

  try {
    await mongoose.connect(URL) 

    isProduction 
    ? console.log('✅ Conectado ao banco PRODUÇÃO com sucesso!')
    : console.log('☑️ Conectado ao banco de DESENVOLVIMENTO com sucesso!')

    const urlParts = URL.split(':');
    console.log(`${urlParts[0]}:${urlParts[1]}...`);

  } 
  catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
