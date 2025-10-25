
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database');

const User = require('./models/user');
const Category = require('./models/category');
const Course = require('./models/course');
const Inscription = require('./models/inscription');

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/cursos', courseRoutes);

sequelize.sync({ force: true }).then(async () => {
  console.log('DB lista ✅');

  // CATEGORÍAS Y CURSOS DE EJEMPLO
  const categorias = await Promise.all([
    Category.create({ nombre: 'Informática' }),
    Category.create({ nombre: 'Idiomas' }),
    Category.create({ nombre: 'Formación Profesional' }),
    Category.create({ nombre: 'Infantil y Primaria' }),
  ]);

  await Course.bulkCreate([
    { nombre: 'Curso de JavaScript', descripcion: 'Intro a JS', CategoryId: categorias[0].id },
    { nombre: 'Curso de Inglés B1', descripcion: 'Preparación B1', CategoryId: categorias[1].id },
  ]);

  app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000 🚀');
  });
});
