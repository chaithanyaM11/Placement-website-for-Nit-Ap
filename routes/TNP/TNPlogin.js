const express = require("express");
const router = express.Router();
const TNPMember = require("../schemas/TnpSchema")

let log = false

app.post("/tnpLogin", async (req,res) => {
    const uname = req.body.UserName;
    const pass = req.body.Password;
  
    member = await TNPMember.find({UserName: uname,Password: pass}, async (err,member) => {
      log = true
    });
    if(log){
        res.render("/TNPPage")
    }
  });