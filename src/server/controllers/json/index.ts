import * as exportJson from './exportJson'
import * as dropJsonDb from './dropJsonDb'

export const jsonController = {
    ...exportJson,
    ...dropJsonDb
}