import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    userId: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bio: {
        type: String
    },
    // profilePic: {
    //     type: media
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = model("User", UserSchema);

export default User;