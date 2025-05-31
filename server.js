const express = require("express");
const app = express();
const http = require("http");

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code
//3: Views code

app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
// app.get("/today", function (req, res) {
//   res.end(`<h1>Today is cold</h1>`);
// });

// app.get("/me", function (req, res) {
//   res.end(`<h1>It's me by Alex</h1>`);
// });

// app.post("/create-item", (req, res) => {
//   console.log(req);
//   res.json({ test: "succes" });
// });

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succes" });
});

// app.post("/create-item", (req, res) => {
//   // TODO: code with db
// });

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
