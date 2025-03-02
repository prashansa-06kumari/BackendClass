//when you should use post req
//if you want to change the state of a server you send post req.
//if this req change the state of server[adding data,deleting prvious data,updating any data]
//data are not visible in url in post req
//client will have name,email,password in formd then post("addresusers") will have a body where body={name,email,password},and in server adduser req.body

const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let userData=[]

app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html")

})

app.post("/adduser",(req,res)=>{
    let {name,email,password} = req.body;
    userData.push({name:name,email:email,password:password});
    console.log(name,email,password);
    res.send(userData);

})

app.listen(1874,()=>{
    console.log("server started");
})