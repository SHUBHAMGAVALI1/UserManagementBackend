const userdata=require('../model/usemodel');
const emailValidator=require('email-validator');

exports.signup=async (req,res)=>{
    try {
        const{name,email,password}=req.body;//phone

    if(!name || !email ||!password){
        res.status(404).json({meassage:"enter all fields",success:false})
    }

    const isvalidemail=emailValidator.validate(email);
    if(!isvalidemail){
        res.status(404).json({meassage:"enter valid email",success:false});
    }
   const userpresent=await userdata.findOne({email});
   if (userpresent) {
    return res.status(400).json({ message: "User already exists. Please log in." });
  }

//    userdata.create();
   const user=await userdata.create({
    name,
    email,
    password
})

// await userdata.save;


 res.status(200).json({
    name,
    email,
    // phone,
    password,
    meassage:"signup succesfull",
})
    } catch (error) {
        res.status(404).json({
            success:false,
            meassage:error.message,
        })
    }
    
}


exports.signin=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user = await userdata.findOne({ email, name, password });//.select(password)
        console.log(user);
        if(!user){
            return res.json({meassage:"enter valid credentials"});
        }
        // console.log(user.name,user.email);
       
        res.status(200).json({user,message:"succesfully signin"});
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
    
    }

exports.getall=async(req,res)=>{
try {
    const users=await userdata.find();
    res.status(200).send(users);


    
} catch (error) {
    res.status(400).json({message:error.message});
    
}

}    