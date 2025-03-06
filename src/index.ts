import { config } from "./server/config";
import { server } from "./server/Server";

const PORT = config.PORT
const ENV = config.ENV

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}        
    ⚡ Env: ${ENV}     
    ===========================
    `);
})


// TODO ---------> RESET ALL STATUS