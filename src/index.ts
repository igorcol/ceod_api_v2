import { server } from "./server/Server";

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`
    ===========================
    ✅ API ONLINE           
    ⚡ Port: ${PORT}     
    ===========================
    `);
})