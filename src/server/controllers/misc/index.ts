import * as checkHealth from './checkHealth'
import * as GetCountData from './GetCountData'

export const MiscController = {
    ...checkHealth,
    ...GetCountData
}