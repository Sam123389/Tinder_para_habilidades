const Empresa = require('../models/Empresa');

const empresaModel = new Empresa();

exports.getAllEmpresas = async (req, res) => {
  try {
    const empresas = await empresaModel.getAll();
    res.status(200).json(empresas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las empresas.' });
  }
};

exports.getEmpresaById = async (req, res) => {
  const { id } = req.params;
  try {
    const empresa = await empresaModel.getById(id);
    if (!empresa) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }
    res.status(200).json(empresa);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la empresa.' });
  }
};

exports.createEmpresa = async (req, res) => {
  const data = req.body;
  try {
    const result = await empresaModel.create(data);
    res.status(201).json({ message: 'Empresa creada exitosamente.', id: result[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la empresa.' });
  }
};

exports.updateEmpresa = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await empresaModel.update(id, data);
    res.status(200).json({ message: 'Empresa actualizada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la empresa.' });
  }
};

exports.deleteEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    await empresaModel.delete(id);
    res.status(200).json({ message: 'Empresa eliminada exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la empresa.' });
  }
};
