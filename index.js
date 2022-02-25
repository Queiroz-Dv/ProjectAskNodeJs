//Create an basic structure using and importing express's module
const express = require("express");
const app = express();//Instance of express
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Asking = require("./database/Asking");
//Using Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
connection.authenticate().then(() => {
  console.log("Connection succefully")
}).catch((msgErro) => {
  console.log(msgErro);
})
//Render HTML with EJS
app.set("view engine", "ejs");
app.use(express.static('public'));


//Routes
app.get("/", (request, response) => {
  Asking.findAll({
    raw: true, order: [
      ['id', 'DESC']
    ]
  }).then(asks => {
    response.render("index", {
      asks: asks
    });
  });
});

app.get("/ask", (request, response) => {
  response.render("ask");
});

app.post("/saveask", (request, response) => {

  var title = request.body.title;
  var description = request.body.description;

  Asking.create({
    title: title,
    description: description
  }).then(() => {
    response.redirect("/");
  });
});
app.listen(1700);