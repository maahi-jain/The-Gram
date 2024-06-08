import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        text: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Post = model("Post", PostSchema);
export default Post;