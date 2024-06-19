import express from "express";
import connectToDb from "./db/index.js";
import user from "./router/user/index.js";
import post from "./router/post/index.js"
import cors from 'cors';
import refreshToken from "./router/token/refreshToken.js";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/post", post);

app.post("/refresh-token", refreshToken);

Promise.all([connectToDb()]).then(() => {
    app.listen(8080, () => {
        console.log("Listening to port 8080")
    })
}).catch((err) => console.error("Error connecting to DB--" + err));