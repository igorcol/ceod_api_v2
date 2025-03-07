import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";

interface UpdatePresenceRequest extends Request {
    body: {
        presenca: boolean;
    };
}

export const updatePresence = async (req: UpdatePresenceRequest, res: Response) => {
    const ID = req.params.id
    console.log(`◾ USERS | UpdatePresence -> ${ID}...`)

    const errors = [];

    if (!ID) {
        errors.push({ default: `❌ O ID deve ser fornecido`});
    }
    if (typeof req.body.presenca !== 'boolean') {
        errors.push({ default:  `❌ A presença deve ser fornecida como TRUE | FALSE`});
    }
    if (!req.body.presenca && req.body.presenca !== false) {
        errors.push({ body: `❌ O Status de PRESENCA deve ser fornecido`});
    }

    if (errors.length > 0) {
        console.log(errors.join('\n'));
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors
        });
        return;
    }

    const result = await userProvider.updatePresence(ID, req.body.presenca)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.CREATED).send()
}