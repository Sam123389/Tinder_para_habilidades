const Relacion = require('../models/Relacion');

const relacionModel = new Relacion();

exports.getAllRelaciones = async (req, res) => {
  try {
    const relaciones = await relacionModel.getAll();
    res.json(relaciones);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las relaciones.' });
  }
};

exports.getRelacionById = async (req, res) => {
  const { id } = req.params;
  try {
    const relacion = await relacionModel.getById(id);
    if (!relacion) {
      return res.status(404).json({ error: 'Relacion no encontrada.' });
    }
    res.json(relacion);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la relacion.' });
  }
};

exports.createRelacion = async (req, res) => {
  const data = req.body;
  try {
    const result = await relacionModel.create(data);
    res.json({ message: 'Relacion creada exitosamente.', id: result[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la relacion.' });
  }
};

exports.updateRelacion = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await relacionModel.update(id, data);
    res.json({ message: 'Relacion actualizada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la relacion.' });
  }
};

exports.deleteRelacion = async (req, res) => {
  const { id } = req.params;
  try {
    await relacionModel.delete(id);
    res.json({ message: 'Relacion eliminada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la relacion.' });
  }
};
