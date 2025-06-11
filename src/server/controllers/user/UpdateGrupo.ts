import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";

interface UpdateQuartoRequest extends Request {
    body: {
        GRUPO: string | null;
    };
}

export const updateGrupo = async (req: UpdateQuartoRequest, res: Response) => {
    const ID = req.params.id;
    const { GRUPO } = req.body;

    console.log(`◾ USERS | Update GRUPO -> ${ID} | ${GRUPO}...`);

    const errors = [];

    if (!ID) {
        errors.push({ default: `❌ O ID deve ser fornecido` });
    }

    if (
        GRUPO !== null &&
        (typeof GRUPO !== "string" || GRUPO.trim() === "")
    ) {
        errors.push({ default: `❌ O campo 'GRUPO' deve ser uma string válida ou null` });
    }

    if (errors.length > 0) {
        console.log(errors.map(e => Object.values(e)).join("\n"));
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors
        });
        return;
    }

    const result = await userProvider.updateGrupo(ID, GRUPO);

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
        return;
    }

    res.status(StatusCodes.CREATED).send();
};
