require('dotenv').config();

const config = {
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  server: process.env.SERVER_DB,
  database: process.env.DATABASE_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  },
};

module.exports = config;