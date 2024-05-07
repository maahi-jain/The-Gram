import User from "../../db/models/user.js";

const getUsers = async (req, res) => {
    try {
        const q = req.query.q || '';
        const userList = await User.find({
            $or: [
                { name: { $regex: new RegExp(q) } },
                { userId: { $regex: new RegExp(q) } }
            ]
        }).skip(0).limit(10);
        res.status(200).send({ users: userList })
    } catch (err) {
        console.log(err.message);
        res.status(err.statusCode || 500).send({ message: "Error while fetching user list -- " + err.message })
    }
}

export default getUsers;