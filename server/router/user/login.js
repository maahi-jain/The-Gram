import User from "../../db/models/user.js";

const login = async (req, res) => {
    try {
        const body = req.body;
        const userIdOrEmail = body.userIdOrEmail;
        const password = body.password;

        const user = await User.findOne({ $or: [{ userId: userIdOrEmail }, { email: userIdOrEmail }], password: password });

        if (user) {
            console.log("User found!");
            res.status(200).send({ message: "Success!", user: user });
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
