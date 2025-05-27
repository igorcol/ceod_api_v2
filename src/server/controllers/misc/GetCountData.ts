import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userProvider } from "../../database/providers";


export async function GetCountData(req: Request, res: Response) {
    try {
        const allResult = await userProvider.getAll({ full: true })

        if (Array.isArray(allResult)) {
            const allCount = allResult.length;
            const confirmedCount = allResult.filter(user => user.PAGAMENTO === true).length;
            const presenteResult = allResult.filter(user => user.presenca === true).length;
            const ausenteResult = confirmedCount - presenteResult
            res.status(StatusCodes.OK).json(
                {
                    total: allCount,
                    confirmados: confirmedCount,
                    presentes: presenteResult,
                    ausentes: ausenteResult

                });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Unexpected result type" });
        }
    }
    catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erro." });
    }
}