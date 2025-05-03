const db = require("./db");

const Producto = {
  getAll: (callback) => {
    db.query("SELECT * FROM productos", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM productos WHERE id = ?", [id], callback);
  },

  create: (producto, callback) => {
    const { nombre, descripcion, preciodecosto, preciodeventa, cantidad, fotografia } = producto;
    db.query(
      "INSERT INTO productos (nombre, descripcion, preciodecosto, preciodeventa, cantidad, fotografia) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, descripcion, preciodecosto, preciodeventa, cantidad, fotografia],
      callback
    );
  },

  update: (id, producto, callback) => {
    const { nombre, descripcion, preciodecosto, preciodeventa, cantidad, fotografia } = producto;
    db.query(
      "UPDATE productos SET nombre = ?, descripcion = ?, preciodecosto = ?, preciodeventa = ?, cantidad = ?, fotografia = ? WHERE id = ?",
      [nombre, descripcion, preciodecosto, preciodeventa, cantidad, fotografia, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM productos WHERE id = ?", [id], callback);
  },
};

module.exports = Producto;