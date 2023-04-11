require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/placementDB");


// TNP Interface
app.use("/tnpSignup",require("./routes/TNP/LognSignup/Signup"));
app.use("/tnpLogin",require("./routes/TNP/LognSignup/Login"));
app.use("/TNPPage",require("./routes/TNP/TNPMain"));


//User Interface
app.use("/",require("./routes/User/Home"));

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
