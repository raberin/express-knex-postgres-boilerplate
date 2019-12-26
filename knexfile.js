require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_DEV_HOST,
      port: process.env.POSTGRES_DEV_PORT,
      user: process.env.POSTGRES_DEV_USER,
      password: process.env.POSTGRES_DEV_PASSWORD,
      database: process.env.POSTGRES_DEV_DATABASE
    },
    migrations: {
      directory: "./database/development/migrations"
    },
    seeds: {
      directory: "./database/development/seeds"
    }
  },

  testing: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_TEST_HOST,
      port: process.env.POSTGRES_TEST_PORT,
      user: process.env.POSTGRES_TEST_USER,
      password: process.env.POSTGRES_TEST_PASSWORD,
      database: process.env.POSTGRES_TEST_DATABASE
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/testing/migrations"
    },
    seeds: {
      directory: "./database/development/seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./database/development/migrations"
    },
    seeds: {
      directory: "./database/development/seeds"
    }
  }
};
