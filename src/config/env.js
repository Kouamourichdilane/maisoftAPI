require('dotenv').config();

const env = {
  port: process.env.PORT,
  db_server : process.env.DB_SERVER,
  db_host : process.env.DB_HOST,
  db_user : process.env.DB_USER,
  db_password : process.env.DB_PASSWORD,
  db_name : process.env.DB_NAME,
  data_url : process.env.DATABASE_URL,
};

module.exports = env;
