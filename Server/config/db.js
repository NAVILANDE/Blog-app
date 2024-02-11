import mongoose from "mongoose";
//const mongoose=require("mongoose");
const connectToMongo=async()=>{
    const res=await mongoose.connect("mongodb://localhost:27017");
    if(res)
    {
        console.log("connected successfully");
}
};
export default connectToMongo;
