const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')
const StudentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
});

StudentSchema.pre("save",async function(next){
if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
    console.log(this.password);
    this.cpassword=undefined;
}
next();

})

module.exports = mongoose.model('signup_tbl', StudentSchema);
 