const jwt = require("jsonwebtoken");
exports.sendJSON = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};
exports.verifyToken = (req) => {
  const token = req.headers.authorization;
  if (!token) return null;
  try { return jwt.verify(token, "secretkey"); } catch { return null; }
};