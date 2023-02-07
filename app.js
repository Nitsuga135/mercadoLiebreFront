const express= require ("express");
const path = require ("path");

const app = express();
app.use( express.static("public"));



app.listen(3000,()=>{
    console.log("Servidor Corriendo en puerto 3000")
})
app.get("/", function(req , res){
    res.sendFile(path.join(__dirname, '/views/index.html'))

})
app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.get("/userCreate", function(req,res){
    res.sendFile(path.join(__dirname, "/views/userCreate.html"))
})
