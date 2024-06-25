import Post from "../../db/models/post.js";

const editPost = async (req, res) => {
    try {
        let id = req.params.id;
        let caption = req.body.caption;
        const post = await Post.findByIdAndUpdate(id, {
            caption
        }, { new: true }).lean();
        res.status(200).send({ post });
    } catch (err) {
        console.log("Error while editing post", err);
        res.status(err.statusCode || 500).send({ message: err.message });
    }
}

export default editPost;