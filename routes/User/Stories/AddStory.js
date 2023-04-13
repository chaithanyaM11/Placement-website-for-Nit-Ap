const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/",async function(req,res){
    res.render("Stories/AddStory");
});


Router.post("/",async function(req,res){
    const story = new Stories({
        Name: req.body.Name,
        Branch: req.body.Branch,
        CompanyPlaced: req.body.Company,
        CTC: req.body.CTC,
        JobType: req.body.Type,
        Role: req.body.Role,
        PlacementType: req.body.PlacementType,
        Story: req.body.Story,
        HowtoPrepare: req.body.Prepare,
        Suggestions: req.body.Suggestions
    });

    story.save(function(err){
        if(!err){
            console.log("Added succesfully");
            res.redirect("/stories");
        }
    })
});


module.exports = Router;