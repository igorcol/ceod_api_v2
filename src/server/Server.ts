import express from "express";
import cors from 'cors'
import 'dotenv/config'

import connectDB from "./database";
import { router } from "./routes";
import { CORS_CONFIG } from "./shared/services/Cors";
import { config } from "./config";



//* Server Config
const server = express();
server.use(express.json())
server.use(cors(CORS_CONFIG)) // setup cors
connectDB(config.mongo.uri, config.mongo.options) // connect to mongo db

//* Config Routes
server.use(router)




export { server }