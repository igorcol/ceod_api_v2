import { Request, Response } from "express";

import User from "../../../models/userModel";

export const getEmails = async () => {
    let EMAILS: Array<object> = []
    try {
        const emails: Array<object> = await User.find({}, 'EMAIL');

        if (!emails || emails.length === 0) {
            throw new Error('Nenhum email encontrado');
        }

        console.log(`🟢 USER | Get Emails -> ${emails.length} emails found. \n`)
        emails.forEach(email => EMAILS.push(email));
        return EMAILS
    }
    catch (error) {
        console.log("❌ ERROR | USER | GetEmail:", error)
        return new Error('Erro ao buscar emails.')
    }
}

