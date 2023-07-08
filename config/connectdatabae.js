const mongoose=require('mongoose');
const dbname=`users`;
const mongo_url=`mongodb+srv://shubhamgavali:918273645@cluster0.zdjeiw7.mongodb.net/${dbname}`;

const connectdb=async()=>{
try {
    await mongoose.connect(mongo_url);
    console.log(`connected to database succesfully ${dbname}`);
    
} catch (error) {
    console.log(`error=>${error}`);
    res.json({success:false,
    meassage:error.meassage})
}
}
module .exports=connectdb;