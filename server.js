//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

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

app.get("/about", function (req, res) {
  res.render("about");
});
//Start server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
