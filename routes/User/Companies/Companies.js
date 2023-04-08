const express = require("express");
const Router = express.Router();
const Company = require("../../../schemas/CompanyModel");

Router.get("/",async function(req,res){
    Company.find({},async function(err,result){
        if(!err){
            res.render("Company/companies",{comp: result});
        }
        else{
            res.send(err)
        }
    });
});


Router.use(require("./SingleCompany"));

module.exports = Router;