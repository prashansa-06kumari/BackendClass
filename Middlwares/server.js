// const express = require("express");
// const app=express();

// app.get("/profile",(req,res)=>{
//     const {username,age} = req.query;
//     console.log(username);
//     res.send("profile page of"+" "+username+" "+age)
// })

// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username} = req.params;
//     //find in database
//     res.send("profile page of" + " "+id+" "+username)
// })

// app.listen(2780,(req,res)=>{
//     console.log("server started");
// })


// let usersData=[
//     {
//         id:1,
//         name:"Nitesh",
//         address:"Delhi"
//     },
//     {
//         id:2,
//         name:"Ritik",
//         address:"Faridabad"
//     },
//     {
//         id:3,
//         name:"Neha",
//         address:"Punjab"
//     },
// ]
// app.get("/allusers",(req,res)=>{
//     res.send(usersData);
// })

// app.get("/getuserbyId",(req,res)=>{
//     // const id = req.query.id
//     const {id} = req.query;
//     for(let i=0;i<usersData.length;i++){
//         if(usersData[i].id==id){
//             return res.send(usersData[i])
//         }
//     }
//     res.send("User not found")

// })

// app.get("/adduser",(req,res)=>{
//     const {id,name,address} = req.query;
//     console.log(id,name,address);

//     let newUser={
//         id:id,
//         name:name,
//         address:address
//     }
//     usersData.push(newUser);
//     res.send("user added successfully");
// })




























