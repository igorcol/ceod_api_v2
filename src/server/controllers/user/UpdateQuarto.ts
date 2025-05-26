import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";

interface UpdateQuartoRequest extends Request {
    body: {
        QUARTO: string | null;
    };
}

export const updateQuarto = async (req: UpdateQuartoRequest, res: Response) => {
    const ID = req.params.id;
    console.log(`◾ USERS | UpdateQuarto -> ${ID}...`);

    const { QUARTO } = req.body;

    const errors = [];

    if (!ID) {
        errors.push({ default: `❌ O ID deve ser fornecido` });
    }

    if (
        QUARTO !== null &&
        (typeof QUARTO !== "string" || QUARTO.trim() === "")
    ) {
        errors.push({ default: `❌ O campo 'QUARTO' deve ser uma string válida ou null` });
    }

    if (errors.length > 0) {
        console.log(errors.map(e => Object.values(e)).join("\n"));
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors
        });
        return;
    }

    const result = await userProvider.updateQuarto(ID, QUARTO);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
        return;
    }

    res.status(StatusCodes.CREATED).send();
};
