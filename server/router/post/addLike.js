import Post from "../../db/models/post.js";

const addLike = async (req, res) => {
    try {
        let id = req.params.id;
        let loggedInUserId = req.user._id;
        let post = await Post.findByIdAndUpdate(id, {
            $addToSet: { likes: loggedInUserId }
        }, { new: true });
        res.status(200).send({ message: { post } })
    } catch (err) {
        console.log("Error while liking the post", err);
        res.status(err.statusCode || 500).send({ message: err.message });
    }
}

export default addLike;