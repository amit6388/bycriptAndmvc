   
const express=require("express");
const Router=express.Router();
const {create,createtest}=require('../controllers/admin/AdminController')

Router.route('/').get(create);
Router.route('/test').get(createtest);


   module.exports=Router;