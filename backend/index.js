import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors()); // does nothing at the moment
app.use(express.json()); // parses JSONs
app.use(express.urlencoded({extended: false})); //this is common practice for urlencoded
// these three lines are boilerplate
const PORT = process.env.PORT || 8080; //make sure that you have a .env file

//routes:
app.post('/addUser', async(req, res) => {
    // const user = req.body.user
    const {user} = req.body;
    const newUser = await User.create(user);
    res.send(newUser);
})

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() => {
    app.listen(PORT, function(){
        console.log("listening on " + PORT);
    })
}).catch(err => {console.log(err.message);});
