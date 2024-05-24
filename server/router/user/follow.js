import User from "../../db/models/user.js";

const follow = async (req, res) => {
    try {
        let loggedInUserId = req.user._id;
        let followingId = req.params.userId;

        // Add to following of loggedin user
        let user = await User.findByIdAndUpdate(loggedInUserId,
            { $addToSet: { following: followingId } }, { new: true }).then((user) => {
                console.log("following added successfully!");
                return user;
            });

        // Add logged in user as follower in following user
        await User.findByIdAndUpdate(followingId,
            { $addToSet: { followers: loggedInUserId } }).then(() => console.log("Followers added successully"));

        res.status(200).send({ status: 'Success!', user });

    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while updating following " + err.message });
    }
}

export default follow;