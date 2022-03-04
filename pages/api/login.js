import dbConnect from "../../lib/connectDB"
import User from "../../models/userModel";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";

export default async function handler(req,res){

const {method}=req;
await dbConnect()

console.log('req.body', req.body)
const{ email, password }= req.body

if(method === "POST"){
    try{
      if(!email || !password){
        res.status(404).json({error:"The email or password is empty"})  
      }
      const user = await User.findOne({email})
      if(!user){
        res.status(422).json({error:"User does not exist"})
      }
      const doMatch = await bcrypt.compare(password,user.password)
      if(doMatch){
        const token = jwt.sign({userId:user.id,},process.env.JWT_SECRET,{
          expiresIn:"7d",
        })
        const {email, _id} = user 
        res.status(201).json({token, user: {email, _id},message:"Login in successful"})
      } else {   
        res.status(401).json({error:"Incorrect credentials"})
      }
    }catch(err){
      res.status(500).json(err)
      console.log('err', err)
    }
  }
}