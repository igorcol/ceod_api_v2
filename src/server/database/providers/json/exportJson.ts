import fs from 'fs'
import User from '../../../models/userModel';


interface UserJson {
    EMAIL?: string;
    presenca?: boolean;
    emailReceived?: boolean;
    [key: string]: any; // Permite outros campos 
}


export const exportJson = async (json_path: string) => {

    try {
        const rawData = fs.readFileSync(json_path, 'utf8');
        const data = JSON.parse(rawData);

        if (!data.users || !Array.isArray(data.users)) {
            console.log('❌ Formato de arquivo inválido')
            return new Error('❌ Formato de arquivo inválido');
        }

        const bulkOperations = data.users.map((user: UserJson) => ({
            updateOne: {
                filter: { NOME: user.NOME },
                update: {
                    $set: {
                        ...user,
                        EMAIL: user.EMAIL ?? null
                    },
                    $setOnInsert: { // Adiciona apenas ao ser inserido um novo usuario
                        presenca: false,
                        emailReceived: false
                    }
                },
                upsert: true // Insere um novo caso não tenha esse nome
            }
        }))

        await User.bulkWrite(bulkOperations);
        console.log("🟩 JSON EXPORTED")
        return
    }
    catch (err) {
        console.log('❌ Erro ao exportar JSON', err)
        return new Error('❌ Erro ao exportar JSON');
    }
}