const db = require("./db");
const { sendJSON, verifyToken } = require("./utils");

exports.getCategories = (req, res) => {
  if (!verifyToken(req)) return sendJSON(res, 401, { message: "Unauthorized" });
  db.query("SELECT * FROM categories", (e, d) => sendJSON(res, 200, d));
};

exports.addCategory = (req, res, body) => {
  if (!verifyToken(req)) return sendJSON(res, 401, { message: "Unauthorized" });
  db.query("INSERT INTO categories (name,item_count,image) VALUES (?,?,?)",
    [body.name, body.item_count, body.image],
    () => sendJSON(res, 200, { message: "Added" })
  );
};