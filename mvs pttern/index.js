const express=require('express'); 
const app=express();
const PORT=process.env.PORT || 8000;
const   adminRouter=require('./Routers/admin/adminRouter')
app.use("/api",adminRouter) 
app.listen(PORT, () => {
    console.log("server is running at  this :" + PORT)
})







