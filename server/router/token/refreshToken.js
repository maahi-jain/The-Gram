import jwt from 'jsonwebtoken';

const refreshToken = (req, res) => {
    try {
        const user = req.body.user;
        let token = jwt.sign({ user }, process.env.jwt_secret);
        res.status(200).send({ token: token });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: "Error while refreshing token " + err.message });
    }
}

export default refreshToken;