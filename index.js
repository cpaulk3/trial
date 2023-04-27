const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const login = require("./login");
const address =require("./address");
const { userInfo } = require("os");

const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname, './views'));
app.use( express.static( "views" ) );
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await login.insertMany([data]);
  res.render("home");
});

app.post("/login", async (req, res) => {

    try{
    const Login=await login.findOne({name:req.body.name})
    
    if(Login.password===req.body.password){
        res.render("home")
    }
    else{
        res.send("Wrong Password")
    }}
    catch(error){ 
        res.send("Wrong Details")
    }  
  });
  
app.post("/home", async (req, res) => {
    try{
    const Address=await address.findOne({street1:req.body.street1, street2:req.body.street2, city:req.body.city, state:req.body.state, zip:req.body.zip}); console.log(Address);  
    
    if(Address.street1===req.body.street1){
       res.render("home")}
   
    else{
         res.send("Invalid Address")
        }}
    catch(error){
          res.send("Wrong Details")}})
 
  
app.listen(3000, () => {
  console.log("port connected");
});



