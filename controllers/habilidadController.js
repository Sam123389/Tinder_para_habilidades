const Habilidad = require('../models/Habilidad');

const habilidadModel = new Habilidad();

exports.getAllHabilidades = async (req, res) => {
  try {
    const habilidades = await habilidadModel.getAll();
    res.json(habilidades);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las habilidades.' });
  }
};

exports.getHabilidadById = async (req, res) => {
  const { id } = req.params;
  try {
    const habilidad = await habilidadModel.getById(id);
    if (!habilidad) {
      return res.status(404).json({ error: 'Habilidad no encontrada.' });
    }
    res.json(habilidad);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la habilidad.' });
  }
};

exports.createHabilidad = async (req, res) => {
  const data = req.body;
  try {
    const result = await habilidadModel.create(data);
    res.json({ message: 'Habilidad creada exitosamente.', id: result[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la habilidad.' });
  }
};

exports.updateHabilidad = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await habilidadModel.update(id, data);
    res.json({ message: 'Habilidad actualizada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la habilidad.' });
  }
};

exports.deleteHabilidad = async (req, res) => {
  const { id } = req.params;
  try {
    await habilidadModel.delete(id);
    res.json({ message: 'Habilidad eliminada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la habilidad.' });
  }
};
