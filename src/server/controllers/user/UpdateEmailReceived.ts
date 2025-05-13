import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";

interface UpdateReceivedRequest extends Request {
    body: {
        ticketReceived: boolean;
    };
}

export const updateEmailReceived = async (req: UpdateReceivedRequest, res: Response) => {
    const ID = req.params.id
    console.log(`◾ USERS | updateEmailReceived -> ${ID}...`)

    const errors = [];
    if (!ID) {
        errors.push({ default: `❌ O ID deve ser fornecido`});
    }
    if (typeof req.body.ticketReceived !== 'boolean') {
        errors.push({ emailReceived:  `❌ TRUE | FALSE`});
    }
    if (!req.body.ticketReceived && req.body.ticketReceived !== false) {
        errors.push({ body: `❌ O Status de "emailReceived" deve ser fornecido`});
    }

    if (errors.length > 0) {
        console.log(errors.join('\n'));
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors
        });
        return;
    }

    const result = await userProvider.updateEmailReceived(ID, req.body)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    } 

    res.status(StatusCodes.CREATED).send()
}