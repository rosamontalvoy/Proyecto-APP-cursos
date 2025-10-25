
const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Category = require('../models/category');

router.get('/', async (req, res) => {
  const cursos = await Course.findAll({ include: Category });
  res.json(cursos);
});

module.exports = router;
