//Create an basic structure using and importing express's module
const express = require("express");

const app = express();//Instance of express
const bodyParser = require("body-parser");

//Render HTML with EJS
app.set("view engine", "ejs");
app.use(express.static('public'));

//Using Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.get("/", (request, response) => {
  response.render("index");
});

app.get("/ask", (request, response)=>{
response.render("ask");
});

app.post("/saveask", (request, response)=>{
var title = request.body.title;
var desc = request.body.description;
response.send("Form received as:" + title + " " + desc);
});
app.listen(1700);