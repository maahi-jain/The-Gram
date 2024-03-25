import User from "../../db/models/user.js";


const signUp = (req, res) => {
    try {
        let body = req.body;
        const user = new User({
            name: body.name,
            userId: body.userId,
            password: body.password,
            phoneNumber: body.phoneNumber
        });

        User.create(user).then((result) => {
            res.status(200).send({ message: "User created successfully!--", object: result })
        }).catch((err) => {
            res.status(500).send({ message: err.message });
        })
    } catch (err) {
        res.status(500).send({ message: "Error while creating user" + err.message })
    }
}

export default signUp;