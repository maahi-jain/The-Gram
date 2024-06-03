import User from "../../db/models/user.js";

const getUserDetails = async (req, res) => {
    try {
        const id = req.params.id;

        console.log("Search user--" + id);
        // Exclude loggedin user
        const user = await User.findById(id).populate('followers', '-password').populate('following', '-password');
        res.status(200).send({ user })
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while fetching user details -- " + err.message })
    }
}

export default getUserDetails;