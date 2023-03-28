let log = false;
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose =  require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/placementDB");

const TNPSchema = mongoose.Schema({
  Name: {type: String},
  Mail_id:{type: String},
  Department: {type: String},
  UserName: {type: String},
  Password: {type: String}
});

const CompanySchema = mongoose.Schema({
  Name: {type: String},
  Mail: {type: String},
  Description: {type: String},
  PrevYearIntake: {type: [Number]},
  CurrentYearIntake: {type: Number},
  Type:{type: String}, 
  // Type sqays if the company is It or NonIT
  Branches: {type: [String]},
  // From what branches they will pick
  Roles: {type: [String]},
  // What roles they will choose for us  
  CTCOffers: {type: [Number]},
  HiringProcess:{type: String},
  Locations: {type: String}
});


const TNPMember = mongoose.model("TNPMember",TNPSchema);
const Companies = mongoose.model("Companies",CompanySchema);


app.get("/", function(req, res){
  res.render("index");
});


app.get("/contact",function(req,res){
  res.render("contact");
});

// Tnp pages 

app.get("/tnpSignup",function(req,res){
  res.render("TNP/tnpSignup");
});

app.post("/tnpSignup",function(req,res){
  const member = new TNPMember({
    Name: req.body.Name,
    Mail_id: req.body.Mail_id,
    Department: req.body.Department,
    UserName: req.body.UserName,
    Password: req.body.Password
  });
  member.save();
  res.redirect("/tnpLogin")
});


app.get("/tnpLogin",function(req,res){
 res.render("TNP/tnpLoginPage");
});

app.post("/tnpLogin",function(req,res){
  uname = req.body.UserName;
  const pass = req.body.Password;

  TNPMember.find({},function(err,member){
    if(!err){
      log = false;
      member.forEach(function(mem){
        if(mem.UserName === uname && mem.Password === pass){
          log = true;
        }
      });
      if (log) {
        res.redirect("/TNPPage");
      } else {
        res.status(401).send("Incorrect username or password. <a href=\"/tnpLogin\">click here</a> to redirect to login page");
      }
    }
    else{
      console.log("Error");
    }
  });
});


app.get("/TNPPage",function(req,res){
  if(log){
    res.render("TNP/tnpPage");
  }
  else{
    res.redirect("/tnpLogin");
    // res.status(401).send("Kindly login and enter to the link");
  }
});


app.get("/TNPPage/addCompany",function(req,res){
  if(log){
    log = true;
    res.render("Company/addCompany");
  }
});

app.post("/TNPPage/addCompany",function(req,res){
  if(log){
    const Company = new Companies({
      Name : req.body.Name,
      Mail : req.body.Mail_id,
      Description : req.body.Description,
      PrevYearIntake : req.body.PrevYearIntake,
      CurrentYearIntake : req.body.CurrentYearIntake,
      Type : req.body.Type,
      Branches : req.body.Branches,
      Roles : req.body.Roles,
      CTCOffers : req.body.CTC,
      HiringProcess : req.body.Hiring_Process,
      Locations : req.body.Location
    });
    Company.save();
    console.log("Submitted successfully!!...");
    log = true;
    res.redirect("/TNPPage");
  }
});


app.get("/TNPPage/editCompany",function(req,res){
  if(log){
    log = true;
    Companies.find({},function(err,companies){
      res.render("Company/TnpCompany",{
        comp: companies
      });
    });  
  }
});

app.get("/TNPPage/editCompany/:compName",function(req,res){
  const cname = req.params.compName;
  Companies.findOne({Name: cname},function(err,Company){
    if(!err){
      console.log("Time to develop this one");
      res.render("Company/editCompany",{company: Company});
    }
  });
});


app.get("/tnpLogout",function(req,res){
  log = false;
  res.redirect("/tnpLogin")
});

//Company Pages
app.get("/Companies",function(req,res){
  Companies.find({},function(err,companies){
    res.render("Company/companies",{
      comp: companies
    });
  }); 
});

app.get("/Companies/:compName",function(req,res){
  const cname = req.params.compName;
  Companies.findOne({Name: cname},function(err,Company){
    if(!err){
      res.render("Company/aboutCompany",{
        company: Company,
      });
    }
    else{
      res.status(401).send("Not Found....");
    }
  });
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
