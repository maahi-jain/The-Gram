import User from "../../db/models/user.js";

const follow = async (req, res) => {
    try {
        let loggedInUserId = req.user._id;
        let followingId = req.params.userId;

        // Add to following of loggedin user
        let user = await User.findByIdAndUpdate(loggedInUserId,
            { $addToSet: { following: followingId } }, { new: true }).populate('followers').populate('following').then((user) => {
                console.log("following added successfully!");
                return user;
            });

        // Add logged in user as follower in following user
        let searchUser = await User.findByIdAndUpdate(followingId,
            { $addToSet: { followers: loggedInUserId } }, { new: true }).populate('followers').populate('following').then((user) => {
                console.log("Followers added successully");
                return user
            });

        res.status(200).send({ status: 'Success!', _user: user, searchUser });

    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while updating following " + err.message });
    }
}

export default follow;