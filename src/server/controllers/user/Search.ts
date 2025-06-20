import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";

export const search = async (req: Request, res: Response): Promise<void> => {
    const searchTerm = req.query.q;

    console.log(`◾ USERS | Search -> q=${searchTerm} ...`);

    if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.trim() === '') {
        console.log(`❌ O parâmetro de busca 'q' é obrigatório`);
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: { default: `O parâmetro de busca 'q' é obrigatório e não pode ser vazio.` }
        });
        return;
    }

    const result = await userProvider.search(searchTerm);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
        return;
    }

    res.status(StatusCodes.OK).json(result);
}