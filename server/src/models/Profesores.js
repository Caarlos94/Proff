const { DataTypes, STRING } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Profesores', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      alowNull: false,
      defaultValue: DataTypes.UUIDV1
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materia: {
      type: DataTypes.STRING
    },
    foto: {
      type: DataTypes.STRING
    },
    biografia: {
      type: DataTypes.STRING
    },
    celular: {
      type: DataTypes.STRING
    },
    costo: {
      type: DataTypes.INTEGER
    },
    dia: {
      type: DataTypes.STRING
    },
    horaInicio: {
      type: DataTypes.ARRAY(STRING)
    },
    horaFin: {
      type: DataTypes.ARRAY(STRING)
    }
  }, { timestamps: false } );
};
