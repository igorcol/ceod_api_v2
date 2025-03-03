import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";


export const getById = async (req: Request, res: Response) => {
    const ID = req.params.id
    console.log(`◾ USERS | GetById -> ${ID} ...`)

    if (Number.isNaN(ID)) {
        console.log(`❌ O ID fornecido dever ser uma String`)
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: { default: `❌ O ID fornecido dever ser uma String` }
        })
        return
    }

    const result = await userProvider.getById(ID)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.OK).json(result)
    return
}