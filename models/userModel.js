import mongoose from "mongoose";
import validator from "validator";

const UserSchema= new mongoose.Schema({
     firstName:{
      type:String, 
    },
    lastName:{
      type:String, 
    },

    email:{
      type:String, 
      required:true,
      unique:true,
      validate: [validator.isEmail, "Please enter valid email address"],
    },
    password:{
      type:String, 
      required:true,
    },
  },
{timestamps:true}
);

export default mongoose.models.User|| mongoose.model("User", UserSchema); 
