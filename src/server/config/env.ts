import dotenv from "dotenv";
import path from "path";
import 'dotenv/config'

// Carregar as variáveis do .env
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(__dirname, `../../../${envFile}`) });

// Lista de variáveis que são obrigatórias
const requiredEnvVars = ["MONGO_URI", "PORT"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`❌ A variável de ambiente ${envVar} não está definida.`);
  }
});

export const envConfig = {
  MONGO_URI: process.env.MONGO_URI!,
  PORT: parseInt(process.env.PORT || "3030", 10),
  ENV: process.env.NODE_ENV
};
