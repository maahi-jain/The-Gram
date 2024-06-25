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
});

const generatePresignedUrl = async (doc) => {
    if (!doc.profilePic) {
        return; // No image URL, nothing to do
    }
    let url = await getPresignedUrl(doc.profilePic);
    doc.profileUrl = url;
};


UserSchema.post('find', async (docs) => {
    await Promise.all(docs.map(generatePresignedUrl));
});

UserSchema.post('findOne', async (doc) => {
    if (doc) {
        await generatePresignedUrl(doc);
    }
});

UserSchema.post('findOneAndUpdate', async (doc) => {
    if (doc) {
        await generatePresignedUrl(doc);
    }
});

UserSchema.plugin(generatePresignedUrl); // Apply the plugin

const User = model("User", UserSchema);

export default User;