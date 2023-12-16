require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const volunteerList = require("./model/volunteerList");
app.use(express.static('public'));
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: false }))
mongoose.connect(process.env.DB_URI)
app.get("/",(req,res)=>{
    res.render("index");
})
app.route("/form").get((req,res)=>{
    res.render("form");
}).post(async(req,res)=>{
    // console.log(req.body);
    await volunteerList.create({ 
        voLevel:req.body.volevel,
        name:req.body.name,
        profession:req.body.prof,
        city:req.body.city,
        country:req.body.country,
        remarks:req.body.remarks });
    res.redirect("/list");
})
app.get("/list",async (req,res)=>{
    let list = await volunteerList.find({});
    if (list!=null) res.render("list",{list:list});
    res.render("list");
})
app.listen(3000, function () {
    console.log('Server is running on port 3000')
    });