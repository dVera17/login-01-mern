import conn from "../db/connect.js";
import { validationResult } from "express-validator";
const db = await conn();
const user = db.collection("user");

const validateCredentialsUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);

        const { username, password } = req.body;

        const currentUser = await user.findOne({ user: username });
        if (!currentUser) res.status(404).send({ message: 'User not found' });
        else {
            password === currentUser.password_user ? next() : res.send({ message: 'Incorrect password' });
        }
    } catch (error) {
        res.send(error);
    }
}

export default validateCredentialsUser;