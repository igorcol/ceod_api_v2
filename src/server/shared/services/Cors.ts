import cors, { CorsOptions } from 'cors'
import { config } from '../../config'

export const CORS_CONFIG: CorsOptions = {
    origin: config.CORS_ORIGIN,
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type,Authorization"
}

