import { json } from "express";
import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";

class AuthController{
    static userRegistration=async(req,res)=>{
        const{username,email,password}=req.body;
        try{
            if(username&&email&&password){
                const isUser=await authModel.findOne({email:email});
                if(!isUser){
                   const genSalt=await bcryptjs.genSalt(10);
                   const hashedPassword= await bcryptjs.hash(paaword,gensalt);

                   //save your user
                   const newUser=authModel({
                    username,
                    email,
                    password,
                   });
                   const savedUser=await newUser.save();
                   if (savedUser){
                    return req.status(200).json({message:"User Registretion successfully"}); 
                   }
                }else{
                    return req.status(400).json({message:"Email already exist"}); 
                }

            }
            else{
                return req.status(400).json({message:"all fields are required"}); 
            }

        }catch(error){
            return req.status(400).json({message:error.message});
        }
      
    };
    static userlogin=async(req,res)=>{
        res.send("user login");
    };
}
export default AuthController;