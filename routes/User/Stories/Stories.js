const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/",async function(req,res){
    Stories.find({Active: true},async function(err,result){
        if(!err){
           res.render("Stories/Stories",{stories: result});
        }
        else{
            res.send(err)
        }
    });
});

Router.use("/addStory",require("./AddStory"));
Router.use(require("./SingleStory"));


module.exports = Router;