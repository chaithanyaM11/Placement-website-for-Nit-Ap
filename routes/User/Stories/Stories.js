const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Routerr.get("/",async function(req,res){
    Stories.find({},async function(err,result){
        if(!err){
            res.send(result);
        }
        else{
            res.send(err)
        }
    });
});


Routerr.use(require("./SingleStory"));

module.exports = Routerr;