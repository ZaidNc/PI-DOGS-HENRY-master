const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_time_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_time_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // No se incluirán createdAt y updatedAt en las filas de la tabla
    }
  );
};
