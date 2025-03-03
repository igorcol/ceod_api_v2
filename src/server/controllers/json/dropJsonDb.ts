import { StatusCodes } from "http-status-codes";
import { jsonProvider } from "../../database/providers"
import { Request, Response } from "express";


export const dropJsonDb = async (req: Request, res: Response) => {
    console.log("◾ DELETE JSON DB...")

    const result = await jsonProvider.dropJsonDb();

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.OK).send()

}