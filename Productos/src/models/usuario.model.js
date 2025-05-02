const sql = require("./db.js");

//constructor
const Usuario = function(usuario) {
    this.id = usuario.id;
    this.usuario = usuario.usuario;
    this.contrasenia = usuario.contrasenia;
}

Usuario.getAll = (result) => {
    let query = "SELECT * FROM usuario";
    sql.query(query, function (err, results, fields) {
        if (err) {
            result(null, err);
            return;
        }
        result(null, results);
    });
};

Usuario.findById = (id, result) => {
    sql.query(`SELECT * FROM usuario WHERE id = '${id}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        //usuario no encontrado
        result({ kind: "not_found" }, null);
    });
};

Usuario.create = (newUsuario, result) => {
    sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
       newUsuario.id = res.insertId;
       result(null, { ...newUsuario });
});
};

Usuario.updateById = (id, usuario, result) => {
    sql.query(
        "UPDATE usuario SET usuario = ?, contrasenia = ? WHERE id = ?",
        [usuario.usuario, usuario.contrasenia, id],
        (err, res) => {
            if (err) {
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                //usuario no encontrado
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...usuario });
        }
    );
};

Usuario.remove = (id, result) => {
    sql.query("DELETE FROM usuario WHERE id = ?", id, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            //usuario no encontrado
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Usuario;