import express from "express";
import connectToDb from "./db/index.js";
import user from "./router/user/index.js";
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use("/user", user);


app.get("/", (req, res) => {
    res.status(200).send("Success!")
});

Promise.all([connectToDb()]).then(() => {
    app.listen(8080, () => {
        console.log("Listening to port 8080")
    })
}).catch((err) => console.error("Error connecting to DB--" + err));