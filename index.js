
// require('dotenv').config();
const app=require('./app');
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`the server is listning on port ${PORT}`)
})