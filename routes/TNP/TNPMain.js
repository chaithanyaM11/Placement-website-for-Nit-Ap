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

module.exports = Router;