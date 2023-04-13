const express = require("express");
const Router = express.Router();
const contactPath = require("./Contact");
const companyPath = require("./Companies/Companies");
const storyPath = require("./Stories/Stories");

Router.get("/",async function(req,res){
    res.render("index");
});

Router.use("/contact",contactPath);
Router.use("/companies",companyPath);
Router.use("/stories",storyPath);

module.exports = Router;