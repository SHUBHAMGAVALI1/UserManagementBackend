

const express=require('express');
const app=express();
const routes=require('./route/userroute')
app.use(express.json());
const connectdb=require('./config/connectdatabae');
connectdb();
app.use('/',routes);

// app.get('/',(req,res)=>{
//     res.json({success:true,
//         message:"succesfull route",
//         shubham:"gavali"
//     })
// })

// app.use('/use',(req,res)=>{
//     res.json({success:true,
//         message:"succesfull route use",
//         shubham:"gavali"
//     })
// })
module.exports=app;