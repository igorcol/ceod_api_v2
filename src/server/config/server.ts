export const serverConfig = {
    PORT: parseInt(process.env.PORT || "3030", 10),
    CORS_ORIGIN: process.env.CORS_ORIGIN || "*", // Permitir requisições de qualquer origem por padrão
  };
  