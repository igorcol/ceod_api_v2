import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../../../models/userModel";

export const getAll = async (): Promise<Record<string, any>[] | Error> => {
    try {
        const users = await User.find();
        console.log(`🟩 USERS | GetAll -> Found ${users.length} users.`)
        return users
    }
    catch (error) {
        console.log("❌ ERROR | USERS | GetAll:", error)
        return new Error('Erro ao buscar usuários.')
    }
}