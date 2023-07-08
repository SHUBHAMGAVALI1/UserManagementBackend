const express=require('express');
const { signup,signin,getall } = require('../controllers/usercontrollers');
const router=express.Router(); 
router.post('/register',signup);
router.post('/login',signin);
// router.get('/getusers',getall);
module.exports=router;
