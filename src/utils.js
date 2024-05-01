const fileURLToPath = require("url").fileURLToPath;
const dirname = require("path").dirname;
const bcrypt = require("bcrypt");
const passport = require("passport");

const __dirname = dirname(import.meta.url);

module.exports = __dirname;

exports.generaHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
exports.validaPass = (usuario, password) =>
  bcrypt.compareSync(password, usuario.password);

exports.passportView = (estrategia) =>
  function (req, res, next) {
    passport.authenticate(estrategia, function (err, user, info, status) {
      console.log("PassportView");
      if (err) {
        console.log("");
        return next(err);
      }
      if (!user) {
        console.log("No hay usuario");
        res.setHeader("Content-Type", "application/json");
        return res
          .status(500)
          .json({ error: info.message ? info.message : info.toString() });
      }

      req.user = user;
      console.log("Saliendo de PassportView");

      next();
    })(req, res, next);
  };
