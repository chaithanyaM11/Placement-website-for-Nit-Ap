const express = require("express");
const Router = express.Router();

Router.get("/", async function(req,res){
    res.render("TNP/tnpPage");
});


Router.use("/addCompany",require("./Company/AddCompany"));
Router.use("/editCompany",require("./Company/EditCompany"));

module.exports = Router;