import fs from 'fs'
import User from '../../../models/userModel';


interface UserJson {
    EMAIL?: string;
    presenca?: boolean;
    emailReceived?: boolean;
    [key: string]: any; // Permite outros campos sem erro
}


export const exportJson = async (json_path: string) => {

    try {
        const rawData = fs.readFileSync(json_path, 'utf8');
        const data = JSON.parse(rawData);

        if (!data.users || !Array.isArray(data.users)) {
            console.log('❌ Formato de arquivo inválido' )
            return new Error('❌ Formato de arquivo inválido' );
        }

        const userToInsert = data.users.map((user: UserJson) => ({
            ...user,
            EMAIL: user.EMAIL ?? null,
            presenca: user.presenca ?? false,
            emailReceived: user.emailReceived ?? false
        }))

        await User.insertMany(userToInsert);
        console.log("🟩 JSON EXPORTED")
        return 
    } 
    catch (err) {
        console.log('❌ Erro ao exportar JSON', err)
        return new Error('❌ Erro ao exportar JSON');
    }
}