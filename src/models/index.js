const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const User = require("./User");
const user = User(sequelize, Sequelize.DataTypes);

const db = {
  user,
  sequelize,
};
module.exports = db;
