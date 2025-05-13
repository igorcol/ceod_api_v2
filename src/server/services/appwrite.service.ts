import { Client, Databases } from "node-appwrite";
import { config } from "../config";

const ENDPOINT = config.appwrite.endpoint
const PROJECT_ID = config.appwrite.projectId
const API_KEY = config.appwrite.apiKey

console.log(`APPWRITE | ${ENDPOINT}/${PROJECT_ID}`)

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

    client.headers['X-Appwrite-Key'] = API_KEY;

const databases = new Databases(client);

export { client, databases }