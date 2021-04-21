import { Sequelize, DataTypes } from "sequelize";
import { dbConfig } from "../config/config";
import LocationModel from "../models/location.model";
const config = dbConfig[process.env.NODE_ENV];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Location = LocationModel(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log(`Database & tables created!`);
  })
  .catch((err) => console.log(Eerr));

export default sequelize;
