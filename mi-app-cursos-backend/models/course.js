
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Category = require('./category');

const Course = sequelize.define('Course', {
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

Course.belongsTo(Category);
Category.hasMany(Course);

module.exports = Course;
