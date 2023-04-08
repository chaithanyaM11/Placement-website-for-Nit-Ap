const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/",async function(req,res){
    Stories.find({},async function(err,result){
        if(!err){
            res.send(result);
        }
        else{
            res.send(err)
        }
    });
});


Router.use(require("./SingleStory"));

module.exports = Router;