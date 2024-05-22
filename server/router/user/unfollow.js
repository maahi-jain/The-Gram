import User from "../../db/models/user.js";

const unfollow = async (req, res) => {
    try {
        let loggedInUserId = req.user._id;
        let followingUserId = req.params.userId;

        // Remove following user from follow list
        await User.updateOne({ _id: loggedInUserId }, { $pull: { following: followingUserId } }).
            then(() => console.log("Following removed successfully!"));

        // Remove loggedIn user from follower list of user
        await User.updateOne({ _id: followingUserId }, { $pull: { followers: loggedInUserId } }).
            then(() => console.log("Follower removed successfully!"));

        res.status(200).send({ status: 'Success!' });

    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while unfollowing. " + err.message });
    }
}

export default unfollow;