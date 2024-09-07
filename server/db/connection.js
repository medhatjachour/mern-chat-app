import mongoose from "mongoose";
const  Connect =async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to db")
    }
    catch(e){console.log(e)}
}
export default Connect