resposive=
1. text sixe in accesories
2.vehicle section me yellow buttons
3.brands tagline should be grater than images
and also should have same heading size

same font keep 1 font family to everyone

add whatsapp button to contact page

edit contact page/carsbikepage its not proper rebuild its
--header
--footer
--menu button

in inventory section 
cars and bike brand tag name give more design 

do something with navbar 

---website

1.make the perfect navbar with proper padding
2. make the font proper and use proper font family
3. give the different name to navbar 
4.redirect contact to contact page
5.know more button is not wokring
6. in car section use proper size of navbar
7. make some changes in car website 
8.make the contact page again /fonts


----------DYNAMIC WEBSITE--------------------
--ROBUST
--ERROR HANDLING
--cache ,cookies
--csp -content s



-------------------------vercel.json-----------------------------


version 
builds = src and use(@vercel/node)
framework
routes






-----------tut--------------------
https://nodeschool.io/
https://github.com/getify/You-Dont-Know-JS





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



const crypto =  require ('crypto')
const nonce =  crypto.randomBytes(16).toString("base64")
