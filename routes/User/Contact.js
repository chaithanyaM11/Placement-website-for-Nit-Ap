const express = require("express");
const Router = express.Router();

Router.get("/",async function(req,res){
    res.render("contact");
});



module.exports = Router;