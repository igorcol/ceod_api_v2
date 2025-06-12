import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";


export const updateAny = async (req: Request, res: Response): Promise<void> => {
    const ID = req.params.id;
    const updates = req.body;

    console.log(`◾ USERS | Update any -> ${ID}...`);

    // ERROS
    const errors = [];

    if (!ID) {
        errors.push({ default: `❌ O ID deve ser fornecido` });
    }

    if (!updates || typeof updates !== 'object' || Array.isArray(updates)) {
        errors.push({ body: `❌ O corpo da requisição deve ser um objeto com os campos a serem atualizados` });
    }

    if (Object.keys(updates).length === 0) {
        errors.push({ body: `❌ Nenhum campo fornecido para atualização` });
    }

    if (errors.length > 0) {
        console.log(errors.map(e => Object.values(e)).join("\n"));
        res.status(StatusCodes.BAD_REQUEST).json({ errors });
        return 
    }

    const result = await userProvider.updateAny(ID, updates);

     if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
        return;
    }

    res.status(StatusCodes.OK).json(result);

}