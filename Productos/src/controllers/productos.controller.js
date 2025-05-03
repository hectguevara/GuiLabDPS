const Producto = require("../models/producto.model");

exports.listar = (req, res) => {
  Producto.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

exports.obtener = (req, res) => {
  const { id } = req.params;
  Producto.getById(id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    if (data.length === 0) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json(data[0]);
  });
};

exports.crear = (req, res) => {
  Producto.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.actualizar = (req, res) => {
  const { id } = req.params;
  Producto.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Producto actualizado" });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  Producto.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: "Producto eliminado" });
  });
};