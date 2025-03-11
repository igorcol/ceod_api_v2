import { Request, Response } from "express";

import User from "../../../models/userModel";

export const getEmails = async () => {
    let EMAILS: Array<object> = []
    try {
        const emails: Array<{ _id: string, EMAIL: string, emailReceived?: boolean }> = await User.find({}, 'EMAIL emailReceived');

        if (!emails || emails.length === 0) {
            throw new Error('Nenhum email encontrado');
        }

        console.log(`🟢 USER | Get Emails -> ${emails.length} emails found. \n`)
        //emails.forEach(email => EMAILS.push(email));
        EMAILS = emails.map(email => ({
            _id: email._id,
            EMAIL: email.EMAIL,
            emailReceived: email.emailReceived || false
        }))
        return EMAILS
    }
    catch (error) {
        console.log("❌ ERROR | USER | GetEmail:", error)
        return new Error('Erro ao buscar emails.')
    }
}

