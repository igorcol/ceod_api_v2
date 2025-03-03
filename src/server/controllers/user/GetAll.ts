import { Request, Response } from "express";
import { userProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";

export const getAll = async (req: Request, res: Response) => {
    console.log("◾ USERS | GetAll...")

    const result = await userProvider.getAll()

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.OK).json(result)
}