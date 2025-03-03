import { Request, Response } from "express";
import { userProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";


export const getEmails = async (req: Request, res: Response) => {
    console.log("\n⚫ USERS | Get Emails...");

    const result = await userProvider.getEmails()

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.OK).json(result)

}