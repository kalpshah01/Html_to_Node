const express=require('express');

const server=express();
const bodyparser=require('body-parser');
const port=3000;

server.set('view engine','ejs');
server.use(express.static("public"));
server.use(bodyparser.urlencoded({ extended: true }));



server.get("/",(req,res)=>{
res.render("index");
});
server.get("/aboutus",(req,res)=>{
res.render("about")
});
server.get("/product",(req,res)=>{
res.render("product")
});
server.get("/review",(req,res)=>{
res.render("review")
});
server.get("/cart",(req,res)=>{
res.render("cart")
});

server.listen(port,(err)=>{
    if(!err){
        console.log(`server start at ${port}`);
    }
    else{
        console.log("error",err);
    }
})