require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "digitalskill",
    database: "express-base-project",
    host: "localhost",
    port: 5432,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: "postgres",
    password: "digitalskill",
    database: "express-base-project",
    host: "localhost",
    port: 5432,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: "postgres",
    password: "digitalskill",
    database: "express-base-project",
    host: "localhost",
    port: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
}
