

export const dbConfig = {
  mongo: {
    uri: process.env.MONGO_URI || ''
  },

  appwrite: {
    endpoint: process.env.APPWRITE_ENDPOINT!,
    projectId: process.env.APPWRITE_PROJECT_ID!,
    apiKey: process.env.APPWRITE_API_KEY!,
    inscritosCollectionId: process.env.APPWRITE_INSCRITOS_COLLECTION_ID!,
    databaseId: process.env.APPWRITE_DATABASE_ID!
  }
};
  