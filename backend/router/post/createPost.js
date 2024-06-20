import Post from "../../db/models/post.js";

const createPost = async (req, res) => {
    try {
        let body = req.body;
        let user = req.user;
        let post = {
            content: req.file.key,
            caption: body.caption,
            user: user._id
        };
        Post.create(post).then((result) => {
            console.log(result);
            res.status(200).send({ message: "Post created Successfully!" })
        }).catch((err) => { throw err })
    } catch (err) {
        console.log("Error while creating post", err);
        res.status(err.statusCode || 500).send({ message: err.message });
    }
}

export default createPost;