import User from "../../db/models/user.js";

const EditUser = async (req, res) => {
    try {
        let user = req.body.user;
        let userId = req.params.id;
        console.log("User details --" + user);
        const updatedUser = await User.findByIdAndUpdate(userId, { ...user }, { new: true }).populate("followers").populate("following");
        res.status(200).send({ status: "Success", _user: updatedUser });
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while updating following " + err.message });
    }
}

export default EditUser;