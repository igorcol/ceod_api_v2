import fs from 'fs'
import User from '../../../models/userModel';

export const exportJson = async (json_path: string) => {
    try {
        const rawData = fs.readFileSync(json_path, 'utf8');
        const data = JSON.parse(rawData);

        if (!data.users || !Array.isArray(data.users)) {
            return new Error('❌ Formato de arquivo inválido' );
        }

        await User.insertMany(data.users);
        console.log("🟩 JSON EXPORTED")
        return 
    } 
    catch (err) {
        console.log('❌ Erro ao exportar JSON', err)
        return new Error('❌ Erro ao exportar JSON');
    }
}