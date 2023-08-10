const express = require('express');
const app = express();
const connection = require('./knexfile')['development'];
const db = require('knex')(connection);
const port = 8001;

app.use(express.json());

app.get('/protalento', (req, res) => {
  res.json({
    'saludo': 'Hola talentos'
  });
});

app.post('/ejemplo', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/relaciones', (req, res) => {
  db('relaciones').then((relaciones) => {
    res.json(relaciones);
  });
});

app.get('/relaciones/:id', (req, res) => {
  const { id } = req.params;
  db('relaciones')
    .where({ id })
    .then((relacion) => {
      res.json(relacion);
    });
});

app.post('/relaciones', (req, res) => {
  const toCreate = req.body;
  db('relaciones').insert(toCreate)
    .then((relacion) => {
      res.json(relacion);
    });
});

app.put('/relaciones/:id', (req, res) => {
  const { id } = req.params;
  const toEdit = req.body;
  db('relaciones')
    .where({ id })
    .update(toEdit)
    .then((relacion) => {
      res.json(relacion);
    });
});

app.delete('/relaciones/:id', (req, res) => {
  const { id } = req.params;
  db('relaciones')
    .where({ id })
    .del()
    .then((relacion) => {
      res.json(relacion);
    });
});

const habilidadRoutes = require('./routers/habilidadRoutes');
const empresaRoutes = require('./routers/empresaRoutes');
const usuarioRoutes = require('./routers/usuarioRoutes');
app.use(habilidadRoutes);
app.use(empresaRoutes);
app.use(usuarioRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
