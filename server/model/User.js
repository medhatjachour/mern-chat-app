import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String }
});

const UserModel = mongoose.model('User', UserSchema); // Notice the capital 'M' in 'model'

export default UserModel;