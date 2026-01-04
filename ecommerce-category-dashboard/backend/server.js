const http = require("http");
const { signup, login } = require("./auth");
const { getCategories, addCategory } = require("./categories");

http.createServer((req, res) => {
  let body = "";
  req.on("data", c => body += c);
  req.on("end", () => {
    body = body ? JSON.parse(body) : {};
    if (req.url === "/signup" && req.method === "POST") return signup(req, res, body);
    if (req.url === "/login" && req.method === "POST") return login(req, res, body);
    if (req.url === "/categories" && req.method === "GET") return getCategories(req, res);
    if (req.url === "/categories" && req.method === "POST") return addCategory(req, res, body);
    res.writeHead(404); res.end("Not Found");
  });
}).listen(5000, () => console.log("Server running"));