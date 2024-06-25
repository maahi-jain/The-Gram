import Post from "../../db/models/post.js";
import fs from "fs";
import { deleteObject } from "../../utils/s3Operations.js";

const deletePost = async (req, res) => {
    try {
        let id = req.params.id;
        const post = await Post.findByIdAndDelete(id).lean();
        await deleteObject(post?.content);
        res.status(200).send({ status: 'success' })
    } catch (err) {
        console.log("Error while deleting post", err);
        res.status(err.statusCode || 500).send({ message: err.message });
    }
}

export default deletePost;