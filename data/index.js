const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

const connectToDatabaseClient = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = new Client({
        connectionString,
      });
      await client.connect();
      return resolve(client);
    } catch (error) {
      return reject(error);
    }
  });
};

module.exports = {
  connectToDatabaseClient,
};
