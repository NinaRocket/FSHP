//Dependencies
const express = require("express");
const exhbs = require("express-handlebars");

//instance of express app
const app = express();

//port and process.env.PORT for Heroku
const PORT = process.env.PORT || 8080;

//set handlebars as default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Start server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
