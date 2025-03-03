import { Request, Response } from "express";
import { jsonProvider } from "../../database/providers";
import { StatusCodes } from "http-status-codes";



export const exportJson = async (req: Request, res: Response) => {
    console.log("◾ EXPORTING JSON TO DB...")

    const json_path = `${process.env.JSON_PATH}/${process.env.JSON_NAME}.json`

    const result = await jsonProvider.exportJson(json_path)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        })
        return
    }

    res.status(StatusCodes.CREATED).send()
}