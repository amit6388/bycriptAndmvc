const express=require("express");
require('./config');
const StudentSchema=require("./signup");
 const bcrypt=require('bcryptjs')
const cors=require("cors")
const app=express();
app.use(
    cors()
)
app.use(express.json())

  
app.post("/create",async(req,resp)=>{
   try{
    let data=new StudentSchema(req.body);
    if (req.body.password===req.body.cpassword){

        let result =await data.save();
        console.log(result)
        resp.send(result);
    }
   }catch(err){
    console.log(err)

   }
   
})

app.post("/login",async(req,resp)=>{
    try{
        let email=req.body.email
    let password=req.body.password
  let result =await StudentSchema.findOne( {email:email});
  const isMatch=bcrypt.compare(password,result.password);
  if(isMatch){
    console.log("result is :"+result)
    console.log("result is :"+result.password)
        resp.send(true);
        console.log("result is :"+result.password)
  }else{
    console.log("password is miss Match")
  }  
    }catch(err){
        console.log(" error occuerd.")
    }   
      
})

app.get("/list",async(req,resp)=>{
    let data=await StudentSchema.find(
        { name: { $regex: /^a/i } }
    );
   
  
    resp.send(data);
})

app.delete("/del/:_id",async(req,resp)=>{
     
   console.log(req.params)
   let data=await StudentSchema.deleteOne(req.params);
    resp.send( data);
})

app.put("/update/:_id",async(req,resp)=>{
     
    console.log(req.params)
    let data=await StudentSchema.updateOne(
        req.params,
       { $set:req.body}
        
        );
     resp.send( data);
 })
 

app.listen(8800)