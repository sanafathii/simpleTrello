import { hashPassword } from "../../../utils/auth";
import connectDB from "../../../utils/connectDB";
import User from "../../../models/User";

export default async function handler(req, res) {
    if (req.method !== "POST") return;
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ status: "failed", message: "Error in connecting DB" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ status: "failed", message: "Invalide Data" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res
            .status(422)
            .json({ status: "failed", message: "user alread exist" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
        email: email,
        password: hashedPassword,
    });
    res.status(201).json({ status: "success", message: "Created user!" });
}