const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const hbs = require("hbs");
const PORT = process.env.PORT|| 5000


// __gives the security
// const helmet = require("helmet");
// app.use(helmet());
// // ___________

// const { contentSecurityPolicy } = require('helmet');

const crypto = require("crypto");
const nonce = crypto.randomBytes(16).toString("base64");






// ___________

// const { partials } = require("handlebars");
app.set("view engine", "hbs");

// __giving partials
const partialsPath = path.join(__dirname, "./partials");
hbs.registerPartials(partialsPath); //to work with partials use this

const pathname = path.join(__dirname, "./public");
app.use(express.static(pathname));
console.log(pathname);

// const srcp = path.join(__dirname, "./app.js");
// console.log(srcp);




  // app.get ("/s",(req, res)=>{

  //   res.send('server is running') 
  // })


// __hbs__ routing
app.get("/", (req, res) => {
  res.render("index"); //require stack err
});

app.get("/index.html", (req, res) => {
  res.render("index"); //require stack err
  // res.send("zsczsc")
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/Shop", (req, res) => {
  res.render("services");
});

app.get("/cars", (req, res) => {
  res.render("cars");
});






// __static website__

// app.get("/", (req, res) => {

//   // res.render(index.html)//require stack err
//   // res.sendFile(__dirname + "../index.html")

//   console.log(__dirname);

//   // res.render(index.html)//require stack err
//   // res.send("zsczsc")
// });

app.listen(PORT, (req, res) => {
  console.log("connected successfully");
});

