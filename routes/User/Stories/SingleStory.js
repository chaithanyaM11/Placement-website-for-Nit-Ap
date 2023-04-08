const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/:Name",async function(req,res){
    Stories.find({Name: req.params.Name},async function(err,result){
        if(!err){
            res.send(result);
        }
        else{
            res.send(err)
        }
    });
});


module.exports = Router;