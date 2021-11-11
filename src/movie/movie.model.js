const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

// const sequelize = new Sequelize('mysql2');

const Movie = sequelize.define("Movie", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
});

module.exports = Movie;