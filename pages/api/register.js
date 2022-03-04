import dbConnect from "../../lib/connectDB"
import User from "../../models/userModel";
import bcrypt from "bcryptjs";

export default async function handler(req,res){

  const {method}=req;
  await dbConnect()


  if(method === "POST"){
    try{
      const{ email,firstName,lastName, password }= req.body
      const user = await User.findOne({email:email})
      
      if(user){
        return (
          res.status(422).json({error:"User email already exists"})
          );
      }
      if(!password || !email){
        return(
          res.status(401).json({error:"Please fill in all required fields"})
        )
      }
      const HashedPassword = await bcrypt.hash(password,12)
      const newUser = await new User({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:HashedPassword,
      }).save()
      res.status(200).json({message:"Sing up Success", email, password, firstName, lastName})
    }catch(err){
      res.status(500).json(err)
    }
    
  }
}