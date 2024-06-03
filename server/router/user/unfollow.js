import User from "../../db/models/user.js";

const unfollow = async (req, res) => {
    try {
        let loggedInUserId = req.user._id;
        let followingUserId = req.params.userId;

        // Remove following user from follow list
        let user = await User.findByIdAndUpdate(loggedInUserId, { $pull: { following: followingUserId } }, { new: true }).populate('followers', '-password').populate('following', '-password').
            then((user) => {
                console.log("Following removed successfully!");
                return user;
            });

        // Remove loggedIn user from follower list of user
        let searchUser = await User.findByIdAndUpdate(followingUserId, { $pull: { followers: loggedInUserId } }, { new: true }).populate('followers', '-password').populate('following', '-password').
            then((user) => {
                console.log("Follower removed successfully!");
                return user;
            });

        res.status(200).send({ status: 'Success!', _user: user, searchUser });

    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while unfollowing. " + err.message });
    }
}

export default unfollow;