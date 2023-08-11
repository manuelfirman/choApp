import "dotenv/config";
import { DataSource } from "typeorm";

const DBPort = !process.env.PORT_DB ? 5432 : parseInt(process.env.PORT_DB);

const setSSL = !process.env.SSL_DB 
  ? false 
  : process.env.SSL_SUPPORT === "0"
    ? false
    : process.env.SSL_SUPPORT === "1" && true;


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST_DB,
  port: DBPort,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: false,
  ssl: setSSL,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  subscribers: [],
  migrationsRun: true,
});