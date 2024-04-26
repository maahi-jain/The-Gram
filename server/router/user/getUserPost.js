import Post from "../../db/models/post.js";
import User from "../../db/models/user.js";

const getUserPost = async (req, res) => {
    try {
        let userId = req.params.userId;
        let user = await User.findOne({ userId });
        let posts = await Post.find({ user: user._id });
        return res.status(200).send({ posts: posts });
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while fetching post details " + err.message });
    }
}

export default getUserPost;