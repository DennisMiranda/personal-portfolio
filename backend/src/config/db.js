//CONFIGURACION DE LA BASE DE DATOS DE POSTGRESSQL
//crear pool de conexiones, para trabajar con postgres
import { Pool, Query } from "pg";
import dotenv from "dotenv";
dotenv.config();

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(config);

//Evento de escucha del objeto pool eventlistener, que tiene todos los accesos
pool.on("connect", () => {
  console.log("Conectado a la base de datos PostgreSQL");
});

//pendiente a la escucha de algun error
pool.on("error", (err) => {
  console.error("Error en la conexion a la baase de datos: ", err);
  process.exit(-1);
});

export default {
  Query: (text, params) => pool.query(text, params),
  pool,
};
