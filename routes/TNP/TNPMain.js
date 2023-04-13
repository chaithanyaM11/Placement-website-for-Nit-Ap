const express = require("express");
const Router = express.Router();

Router.get("/", async function(req,res){
    if(req.isAuthenticated()){
        res.render("TNP/tnpPage");
    }
    else{
        res.redirect("/login");
    }
});


Router.use("/addCompany",require("./Company/AddCompany"));
Router.use("/editCompany",require("./Company/EditCompany"));
Router.use("/addStory",require("./Story/AddStory"));


module.exports = Router;