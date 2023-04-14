require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const User = require("./schemas/UserModel");
const loginRoute = require("./routes/TNP/LognSignup/Login");
const signupRoute =require("./routes/TNP/LognSignup/Signup");
const logoutRoute = require("./routes/TNP/LognSignup/Logout");
const tnpRoute = require("./routes/TNP/TNPMain");
const userRoute = require("./routes/User/Home");



const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("vendor"));


app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB);
mongoose.set("useCreateIndex",true);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// TNP Interface
app.use("/tnpSignup",signupRoute);
app.use("/login",loginRoute);
app.use("/TNPPage",tnpRoute);
app.use("/logout",logoutRoute);


//User Interface
app.use("/",userRoute);

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
