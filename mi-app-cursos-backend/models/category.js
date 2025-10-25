
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Category = sequelize.define('Category', {
  nombre: DataTypes.STRING,
});

module.exports = Category;
