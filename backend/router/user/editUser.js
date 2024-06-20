import { getPresignedUrl, deleteObject } from "../../utils/s3Operations.js";
import User from "../../db/models/user.js";
import fs from "fs";

const editUser = async (req, res) => {
    try {
        let user = req.body;
        if (req.file?.key) {
            user['profilePic'] = req.file?.key
        }
        let userId = req.params.id;

        // Find and update user
        const updatedUser = await User.findByIdAndUpdate(userId, user, { new: true }).populate("followers").populate("following");
        console.log("User updated succesfully");

        // get presinged Url for profilePic
        updatedUser.profilePic = await getPresignedUrl(updatedUser.profilePic);

        // Delelte previous profile pic
        if (user?.profilePic && req.user?.profilePic) {
            await deleteObject(req.user?.profilePic);
            console.log("previous profile delted succesfully!")
        }
        res.status(200).send({ status: "Success", _user: updatedUser });
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while updating following " + err.message });
    }
}

export default editUser;