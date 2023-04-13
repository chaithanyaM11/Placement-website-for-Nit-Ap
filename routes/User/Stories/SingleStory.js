const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/:Name",async function(req,res){
    Stories.findOne({Name: req.params.Name},async function(err,result){
        if(!err){
            res.render("Stories/SingleStory",{student: result});
        }
        else{
            res.send(err)
        }
    });
});


module.exports = Router;