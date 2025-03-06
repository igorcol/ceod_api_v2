import * as getAll from './GetAll'
import * as getEmails from './GetEmails'
import * as getById from './GetById'
import * as updatePresence from './UpdatePresence'
import * as updateEmailReceived from './UpdateEmailReceived'

export const userProvider = {
    ...getAll,
    ...getEmails,
    ...getById,
    ...updatePresence,
    ...updateEmailReceived
}