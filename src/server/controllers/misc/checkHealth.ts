import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export const checkHealth = async (req: Request, res: Response) => {
    try {
        res.status(StatusCodes.OK).send('Im Healthy')
        //console.log('server on')
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send()
        //console.log('server off')
    }
}