import jwt from 'jsonwebtoken';

const authenticate = (req, res) => {
    try {
        let token = req.headers.Authorization;
        let user = jwt.verify(token, process.env.jwt_secret);
        req.user = user;
        next();
    } catch (err) {
        res.status(err.statusCode).send({ message: err.message });
    }
}