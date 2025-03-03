import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";


export const updatePresence = async (req: Request, res: Response) => {
    const ID = Number(req.params.id)
    console.log(`◾ USERS | UpdatePresence -> ${ID}...`)

    if (Number.isNaN(ID)) {
        console.log(`❌ O ID fornecido dever ser um Número Inteiro`)
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: { default: `❌ O ID fornecido dever ser um Número Inteiro` }
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