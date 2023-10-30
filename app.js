const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const hbs = require("hbs");
const PORT = process.env.PORT|| 5000


// __gives the security
const helmet = require("helmet");
app.use(helmet());
// ___________

// const { contentSecurityPolicy } = require('helmet');

const crypto = require("crypto");
const nonce = crypto.randomBytes(16).toString("base64");


console.log(nonce);
// global.nonce = nonce

const scriptSource = "https://unpkg.com/aos@2.3.1/dist/aos.js";
const scriptHash = crypto.createHash("sha256").update(scriptSource).digest("base64");

// console.log(scriptHash);

const swiperScriptSource ="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";

const swiperScriptHash = crypto.createHash("sha256").update(swiperScriptSource).digest("base64");

// console.log(scriptHash);
console.log(swiperScriptHash);

app.use(
helmet.contentSecurityPolicy({

    directives: {
      defaultSrc: ["'self'"],

      scriptSrcElem: [
        "'self'",
       
        `'sha256-${scriptHash}'`,
       
        // "'unsafe-inline'",
        
        scriptSource,
        
          `'sha256-${swiperScriptHash}'`,
        
        swiperScriptSource,
        
           `'nonce-${nonce}'`,
      ],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
      blockAllMixedContent: [],
    
    },

  })
);


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

