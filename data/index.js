const { Client } = require('pg');

const connectionURI = process.env.DATABASE_URL;

const connectToDatabaseClient = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = new Client({
        connectionURI,
      });
      return resolve(await client.connect());
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  connectToDatabaseClient,
};
