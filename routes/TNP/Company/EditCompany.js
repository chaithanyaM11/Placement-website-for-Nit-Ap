const express = require("express");
const Router = express.Router();
const Companies = require("../../../schemas/CompanyModel");

Router.get("/",async function(req,res){
  if(req.isAuthenticated()){
    Companies.find({},function(err,companies){
        res.render("TNP/Company/TnpCompany",{
          comp: companies
        });
      }); 
  }
  else{
    res.redirect("/login");
  }
});

Router.get("/:compName",function(req,res){
  if(req.isAuthenticated()){
    const cname = req.params.compName;
    Companies.findOne({Name: cname},function(err,Company){
      if(!err){
        console.log("Time to develop this one");
        res.render("TNP/Company/editCompany",{company: Company});
      }
    });
  }
  else{
    res.redirect("/login");
  }
  });

module.exports = Router;