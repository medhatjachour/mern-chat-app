import UserModel from "../model/User.js";


const users = async (req,res)=>{
try {
    const loginUserID = req.user_id
    // don't reply with the password // don't fitch the password from db 
    // id not equal to loginUserID
    const allUsers = await UserModel.find({_id:{$ne:loginUserID}}).select("-password")

    return res.status(200).json({message:"success",users : allUsers })
} catch (error) {
    console.log(error);
    res.status(500).json({msg:error.message});
}
}
export default users