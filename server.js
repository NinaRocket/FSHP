//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const db = require("monk")("localhost:27017/fshp");
const userData = monk.get("user-data");

//instance of express app
const app = express();

app.use(express.static("public"));

//port and process.env.PORT for Heroku
const PORT = process.env.PORT || 8080;

//set handlebars as default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("index");
});

//get data
app.get("/get-data", function (req, res) {
  const data = userData.find({});
  data.on("success", function (docs) {
    res.render("index", { items: docs });
  });
});

app.post("/insert", function (req, res, next) {
  const item = {
    title: req.body.title,
    content: req.body.content,
  };

  userData.insert(item);
  res.redirect("/");
});

app.post("/update", function (req, res, next) {
  const item = {
    title: req.body.title,
    content: req.body.content,
  };
  const id = req.body.id;
  //userData.update({ _id: db.id(id) }, item);
  userData.updateById(id, item);
});

app.post("/delete", function (req, res, next) {
  const id = req.body.id;
  //userData.delete({"_id": db.id(id)});
  userData.removeById(id);
});

app.get("/about", function (req, res) {
  res.render("about");
});

//Start server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
