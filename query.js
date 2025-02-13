const express = require("express");
const app=express();

app.get("/profile",(req,res)=>{
    const {userneame} = req.query;
    console.log(username);
    res.send("profile page of")
})

app.listen(3406,(req,res)=>{
    console.log("server started");
})