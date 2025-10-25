
const sequelize = require('../database');
const User = require('./user');
const Course = require('./course');

const Inscription = sequelize.define('Inscription', {}, { timestamps: false });

User.belongsToMany(Course, { through: Inscription });
Course.belongsToMany(User, { through: Inscription });

module.exports = Inscription;
