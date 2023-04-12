require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const Member = require("./schemas/TnpSchema");
const loginRoute = require("./routes/TNP/LognSignup/Login");
const signupRoute =require("./routes/TNP/LognSignup/Signup");
mongoose.connect("mongodb://localhost:27017/placementDB");
const db = mongoose.connection;
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

passport.use(Member.createStrategy());
passport.serializeUser(Member.serializeUser());
passport.deserializeUser(Member.deserializeUser());

// TNP Interface
app.use("/tnpSignup",signupRoute);
app.use("/login",loginRoute);
app.use("/TNPPage",require("./routes/TNP/TNPMain"));


//User Interface
app.use("/",require("./routes/User/Home"));

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
