import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";


export const updatePresence = async (req: Request, res: Response) => {
    const ID = req.params.id
    console.log(`◾ USERS | UpdatePresence -> ${ID}...`)

    if (!ID) {
        console.log(`❌ O ID deve ser fornecido`)
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: { default: `❌ O ID deve ser fornecido` }
        })
        return
    }

    const result = userProvider.updatePresence(ID)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    } 

    res.status(StatusCodes.CREATED).send()
}