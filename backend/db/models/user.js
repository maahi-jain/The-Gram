import { Schema, model } from "mongoose";
import { getPresignedUrl } from "../../utils/s3Operations.js";

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

// Virtual property for pre-signed URL
UserSchema.virtual('profileUrl').get(function () {
    if (this.profilePic) {
        let url = getPresignedUrl(this.profilePic);
        return url;
    }
    return null;
});

// Ensure virtual fields are serialized
UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

const User = model("User", UserSchema);

export default User;