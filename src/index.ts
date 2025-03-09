import { config } from "./server/config";
import { server } from "./server/Server";

const PORT = config.PORT
const ENV = config.ENV
const json = process.env.JSON_NAME

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}        
    ⚡ Env: ${ENV}     
    ===========================
    Json: ${json}
    `);
})


// TODO ---------> RESET ALL STATUS