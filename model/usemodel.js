const { model, mongo, default: mongoose } = require("mongoose")

const usermodel={
    name:{type:String,required:[true,"name field requires"],unique:true,trim:true,lowercase:true},
    email:{type:String,required:[true,"email field requires"],unique:[true,"allready registered emil"],trim:true,lowercase:true,},
    // phone:{type:Number,required:[true,"name field requires"],unique:true,trim:true},
    password:{type:String,required:[true,"password field requires"],trim:true,}//select:false
}

module.exports=mongoose.model('userdata',usermodel);