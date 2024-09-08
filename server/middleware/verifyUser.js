import  jwt  from 'jsonwebtoken';
import UserModel from '../model/User.js';

const verifyUser = async (req, res, next) => {
    try {
 

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg:"unauthorized"})
    }
    console.log(token);
    const decoded =   jwt.verify(token, process.env.JWT_KEY)
    console.log("decoded",decoded)
    if(!decoded){
        return res.status(401).json({ msg:"invalid token"})
    }
    const user = await UserModel.findOne({id :decoded._id}).select("-password")
    req.user = user
    next()
} catch (error) {
    console.log(error);
    
}
}
export default verifyUser