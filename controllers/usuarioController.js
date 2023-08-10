const Usuario = require('../models/Usuario');

const usuarioModel = new Usuario();

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.getAll();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};

exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await usuarioModel.getById(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el usuario.' });
  }
};

exports.createUsuario = async (req, res) => {
  const data = req.body;
  try {
    const result = await usuarioModel.create(data);
    res.status(201).json({ message: 'Usuario creado exitosamente.', id: result[0] });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
};

exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await usuarioModel.update(id, data);
    res.status(200).json({ message: 'Usuario actualizado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
};

exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await usuarioModel.delete(id);
    res.status(200).json({ message: 'Usuario eliminado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el usuario.' });
  }
};
