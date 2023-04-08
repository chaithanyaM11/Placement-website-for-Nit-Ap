const express = require("express");
const Router = express.Router();
const Companies = require("../../../schemas/CompanyModel");

Router.get("/",async function(req,res){
    Companies.find({},function(err,companies){
        res.render("Company/TnpCompany",{
          comp: companies
        });
      }); 
});

Router.get("/:compName",function(req,res){
    const cname = req.params.compName;
    Companies.findOne({Name: cname},function(err,Company){
      if(!err){
        console.log("Time to develop this one");
        res.render("Company/editCompany",{company: Company});
      }
    });
  });

module.exports = Router;