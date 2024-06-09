import User from "../../db/models/user.js";
import fs from "fs";

const editUser = async (req, res) => {
    try {
        let user = req.body;
        if (req.file?.path) {
            user['profilePic'] = req.file?.path
        }
        let userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, user, { new: true }).populate("followers").populate("following");
        if (user?.profilePic) {
            fs.unlink(req.user?.profilePic, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            });
        }
        res.status(200).send({ status: "Success", _user: updatedUser });
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while updating following " + err.message });
    }
}

export default editUser;