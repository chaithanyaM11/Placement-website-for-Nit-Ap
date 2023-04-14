const express = require("express");
const Router = express.Router();
const Companies = require("../../../schemas/CompanyModel");

Router.get("/",async function(req,res){
    if(req.isAuthenticated()){
        res.render("TNP/Company/addCompany"); 
    } 
    else{
        res.redirect("/login");
    }
});

Router.post("/",async function(req,res){
    const Company = new Companies({
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
      });
      Company.save();
      console.log("Submitted successfully!!...");
      res.redirect("/TNPPage");
})


module.exports = Router;