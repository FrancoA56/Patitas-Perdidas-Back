import { Sequelize } from "sequelize-typescript";
import config from "./utils/config"; 
import path from 'path';

// Crear una instancia de Sequelize para la base de datos
const sequelize = new Sequelize({
  dialect: "postgres", 
  host: "localhost", 
  port: 5432, 
  database: config.dbName, 
  username: config.dbUser, 
  password: config.dbPassword, 
  logging: false, 
  models: [path.join(__dirname, "/models")], // Ruta donde están los modelos Sequelize
});

const {
  User,
  Animal,
  AnimalImage	
} = sequelize.models;

export {
  sequelize,
  User,
  Animal,
  AnimalImage
};
