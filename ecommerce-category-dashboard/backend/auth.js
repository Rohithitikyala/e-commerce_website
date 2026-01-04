const db = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendJSON } = require("./utils");

exports.signup = (req, res, body) => {
  const hashed = bcrypt.hashSync(body.password, 10);
  db.query("INSERT INTO users (email,password) VALUES (?,?)",
    [body.email, hashed],
    () => sendJSON(res, 200, { message: "User Registered" })
  );
};

exports.login = (req, res, body) => {
  db.query("SELECT * FROM users WHERE email=?",
    [body.email],
    (err, r) => {
      if (!r.length) return sendJSON(res, 401, { message: "Invalid" });
      if (!bcrypt.compareSync(body.password, r[0].password))
        return sendJSON(res, 401, { message: "Invalid" });
      const token = jwt.sign({ id: r[0].id }, "secretkey");
      sendJSON(res, 200, { token });
    });
};