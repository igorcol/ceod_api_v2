


export const dbConfig = {
    mongo: {
      uri: process.env.MONGO_URI || null,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  };
  