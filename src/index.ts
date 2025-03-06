import { config } from "./server/config";
import { server } from "./server/Server";

const PORT = config.PORT

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}     
    ===========================
    `);
})


// TODO ---------> RESET ALL STATUS