
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Course = require('../models/course');

router.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.post('/:userId/inscribir/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const user = await User.findByPk(userId);
    const course = await Course.findByPk(courseId);

    if (user && course) {
      await user.addCourse(course);
      res.json({ msg: 'Inscripción exitosa ✅' });
    } else {
      res.status(404).json({ msg: 'Usuario o curso no encontrado ❌' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
});

router.get('/:userId/cursos', async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    include: Course
  });

  if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
  res.json(user.Courses);
});

module.exports = router;
