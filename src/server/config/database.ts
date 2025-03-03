import { ConnectOptions } from 'mongoose';




export const dbConfig = {
  mongo: {
    uri: process.env.MONGO_URI || '',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  },
};
  