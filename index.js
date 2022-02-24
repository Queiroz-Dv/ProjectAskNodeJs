//Create an basic structure using and importing express's module
const express = require("express");

const app = express();//Instance of express
//Render HTML 
app.set("view engine", "ejs");

app.use(express.static('public'));


app.get("/", (request, response) => {
  response.render("index");
});

app.listen(1700);