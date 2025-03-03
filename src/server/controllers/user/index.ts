import * as getAll from './GetAll'
import * as getEmails from './GetEmails'
import * as getById from './GetById'
import * as updatePresence from './UpdatePresence'

export const UserController = {
    ...getAll,
    ...getEmails,
    ...getById,
    ...updatePresence
}