const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

// const sequelize = new Sequelize('mysql2');

const Actor = sequelize.define("Actor", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  actor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Actor;