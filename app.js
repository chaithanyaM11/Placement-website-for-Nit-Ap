const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// TNP Interface
app.use("/tnpSignup",require("./routes/TNP/LognSignup/Signup"));
app.use("/tnpLogin",require("./routes/TNP/LognSignup/Login"));
app.use("/TNPPage",require("./routes/TNP/TNPMain"));


//User Interface
app.use("/",require("./routes/User/Home"));

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
