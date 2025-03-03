import dotenv from "dotenv";
import path from "path";

// Carregar as variáveis do .env
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

// Lista de variáveis que são obrigatórias
const requiredEnvVars = ["MONGO_URI_PROD", "PORT"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`❌ A variável de ambiente ${envVar} não está definida.`);
  }
});

export const envConfig = {
  MONGO_URI: process.env.MONGO_URI_PROD!,
  PORT: parseInt(process.env.PORT || "3030", 10),
};
