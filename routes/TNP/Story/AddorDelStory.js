const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/:Name",async function(req,res){
    if(req.isAuthenticated()){
        Stories.findOne({Name: req.params.Name},function(err,result){
            if(err){
                res.send(err);
            }
            else{
                res.render("TNP/Story/UpdateStory",{story:result});
            }
        })
    }
    else{
        res.redirect("/login");
    }
});

Router.patch("/:Name",async function(req,res){
    Stories.updateOne({Name: req.params.Name},{Active: true},function(err,result){
        if(!err){
            console.log("Updated succesfully story is added");
            res.redirect("/TNPPage/addStory");
        }
        else{
            res.send(err)
        }
    });
});


Router.delete("/:Name",async function(req,res){
    Stories.deleteOne({Name: req.params.Name},function(err,result){
        if(!err){
            console.log("Succesfully deleted");
            res.redirect("/TNPPage/addStory");
        }
        else{
            res.send(err);
        }
    });
});


module.exports = Router;