const express = require("express");
const Router = express.Router();
const Company = require("../../../schemas/CompanyModel");

Router.get("/:company",async function(req,res){
    Company.find({Name: req.params.company},async function(err,result){
        if(!err){
            res.render("Company/aboutCompany",{
                company: result,
              });
        }
        else{
            res.send(err)
        }
    });
});


module.exports = Router;