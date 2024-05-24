import Post from "../../db/models/post.js";

const getFollowingPost = async (req, res) => {
    try {
        const followingList = req.user.following;
        let posts = await Post.find({ user: { $in: followingList } }).populate('user', 'name profilePic');
        res.status(200).send({ posts })
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while fetching post details " + err.message });
    }
}

export default getFollowingPost;