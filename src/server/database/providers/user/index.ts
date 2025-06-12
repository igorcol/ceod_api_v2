import * as getAll from './GetAll'
import * as getEmails from './GetEmails'
import * as getById from './GetById'
import * as updatePresence from './UpdatePresence'
import * as updateEmailReceived from './UpdateEmailReceived'
import * as updateQuarto from './UpdateQuarto'
import * as updateGrupo from './UpdateGrupo'
import * as updateAny from './UpdateAny'

export const userProvider = {
    ...getAll,
    ...getEmails,
    ...getById,
    ...updatePresence,
    ...updateEmailReceived,
    ...updateQuarto,
    ...updateGrupo,
    ...updateAny
}