import Post from "../../db/models/post.js";
import User from "../../db/models/user.js";

const getFollowingPost = async (req, res) => {
    try {
        const loggedInUserId = req.userId;

        // Find loggedIn user followers and following
        const user = await User.findById(loggedInUserId).select('following');
        const followingList = user.following;
        let posts = await Post.find({ user: { $in: followingList } }).populate('user', 'name profilePic').lean();
        res.status(200).send({ posts })
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while fetching post details " + err.message });
    }
}

export default getFollowingPost;