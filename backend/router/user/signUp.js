import User from "../../db/models/user.js";
import bcrypt from 'bcrypt';

const SignUp = async (req, res) => {
    try {
        let body = req.body;
        let hashedPassword = await bcrypt.hash(body.password, 12)
        const user = new User({
            name: body.name,
            userId: body.userId,
            password: hashedPassword,
            phoneNumber: body.phoneNumber,
            email: body.email,
            profilePic: req?.file?.key,
            bio: body.bio
        });
        let userExists = await User.find({ userId: user.userId });
        if (userExists.length > 0) {
            let error = new Error("UserId not available!");
            error.statusCode = 400;
            throw error;
        }
        User.create(user).then((result) => {
            res.status(200).send({ message: "User created successfully!--" })
        }).catch((err) => {
            res.status(500).send({ message: err.message });
        })
    } catch (err) {
        res.status(err.statusCode || 500).send({ message: "Error while creating user --" + err.message })
    }
}

export default SignUp;