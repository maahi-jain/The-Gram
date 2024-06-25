import { Schema, model } from "mongoose";
import { getPresignedUrl } from "../../utils/s3Operations.js";

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

const generatePresignedUrl = async (doc) => {
    if (!doc.content) {
        return; // No image URL, nothing to do
    }
    let url = await getPresignedUrl(doc.content);
    doc.content = url;
};


PostSchema.post('find', async (docs) => {
    await Promise.all(docs.map(generatePresignedUrl));
});

PostSchema.post('findOne', async (doc) => {
    if (doc) {
        await generatePresignedUrl(doc);
    }
});

PostSchema.post('findOneAndUpdate', async (doc) => {
    if (doc) {
        await generatePresignedUrl(doc);
    }
});

PostSchema.plugin(generatePresignedUrl); // Apply the plugin

const Post = model("Post", PostSchema);
export default Post;