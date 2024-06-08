import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    profilePic: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = model("User", UserSchema);

export default User;