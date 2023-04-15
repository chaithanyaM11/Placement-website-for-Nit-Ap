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

  Router.put("/:compName",function(req,res){
    if(req.isAuthenticated()){
      Companies.updateOne({Name: req.params.compName},
        { 
          $set: {
            Name : req.body.Name,
            Mail : req.body.Mail_id,
            Description : req.body.Description,
            PrevYearIntake : req.body.PrevYearIntake,
            CurrentYearIntake : req.body.CurrentYearIntake,
            Type : req.body.Type,
            Branches : req.body.Branches,
            Roles : req.body.Roles,
            CTCOffers : req.body.CTC,
            HiringProcess : req.body.Hiring_Process,
            Locations : req.body.Location
          }
      } ,
        {overwrite: true},function(err,result){
          if(!err){
            res.redirect("/TNPPage/editCompany");
          }
          else{
            console.log(err);
          }
        });
    }
    else{
      res.redirect("/login")
    }
  });

Router.delete("/:compName",function(req,res){
  if(req.isAuthenticated()){
        Companies.deleteOne({Name: req.params.compName},function(err){
          if(!err){
            res.redirect("/TNPPage/editCompany");
          }
          else{
            res.send(err);
          }
        });
  }
  else{
    res.redirect("/login");
  }
});
module.exports = Router;