const express = require("express");
const Router = express.Router();
const contactPath = require("./Contact");
const companyPath = require("./Companies/Companies");
const storyPath = require("./Stories/Stories");
const Stories = require("../../schemas/PlacementStoryModel");



Router.get("/",async function(req,res){
    Stories.find({},function(err,result){
        res.render("index",{stories: result});
    }).limit(4);
});

Router.use("/contact",contactPath);
Router.use("/companies",companyPath);
Router.use("/stories",storyPath);

module.exports = Router;