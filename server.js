//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

//instance of express app
const app = express();

//port and process.env.PORT for Heroku
const PORT = process.env.PORT || 8080;

//set handlebars as default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("index");
});

//Start server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
