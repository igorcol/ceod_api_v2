import * as exportJson from "./exportJson"
import * as dropJsonDb from './dropJsonDb'

export const jsonProvider = {
    ...exportJson,
    ...dropJsonDb
}