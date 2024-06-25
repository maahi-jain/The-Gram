import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        let decodedToken = jwt.verify(token, process.env.jwt_secret);
        req.userId = decodedToken.id;
        next();
    } catch (err) {
        res.status(401).send({ message: "Unanuthorized: " + err.message });
    }
}

export default authenticate;