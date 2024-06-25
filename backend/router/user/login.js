import User from "../../db/models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    try {
        const body = req.body;
        const userIdOrEmail = body.userIdOrEmail;
        const password = body.password;
        let user = await User.findOne({ $or: [{ userId: userIdOrEmail }, { email: userIdOrEmail }] }).select('userId password _id');
        const match = user && await bcrypt.compare(password, user.password);
        delete user?.password;

        if (user && match) {
            console.log("User found!");
            var token = jwt.sign({ userId: user.userId, id: user._id }, process.env.jwt_secret);
            res.status(200).send({ token: token });
        } else {
            console.log("User not found!")
            res.status(404).send({ message: "Email or password is wrong" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: "Error while authenticating user details: " + err.message });
    }
}

export default login;
