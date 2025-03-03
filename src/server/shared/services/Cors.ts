import cors, { CorsOptions } from 'cors'

export const CORS_CONFIG: CorsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type,Authorization"
}

