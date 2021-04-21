import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Location = sequelize.define(
    "Location",
    {
      city: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
    }
  );

  return Location;
};
