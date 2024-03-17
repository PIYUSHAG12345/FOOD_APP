const mongoose=require('mongoose')
const {schema}=mongoose;
const UserScheme =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        location:{
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
        date:{
            type:Date,
            default:Date.nov
        }
    }
);
module.exports=mongoose.model('user',UserScheme); 