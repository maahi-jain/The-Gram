import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('connected'));
        let result = await mongoose.connect(
            `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@thegram.wr8wqfv.mongodb.net/?retryWrites=true&w=majority&appName=TheGram`
        );
        return Promise.resolve(result);
    } catch (err) {
        console.log("Error while connecting to DB" + err);
    }
}


export default connectToDb;
