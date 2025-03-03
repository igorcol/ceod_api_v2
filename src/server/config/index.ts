import { envConfig } from "./env";
import { dbConfig } from "./database";
import { serverConfig } from "./server";

export const config = {
  ...envConfig,
  ...dbConfig,
  ...serverConfig,
};
