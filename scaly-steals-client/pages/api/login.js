import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import mongoose from "mongoose";

export default async function handler(req, res) {
    console.log("howdy");

    const {method} = req;
    await mongooseConnect();

    if (method === "GET") {
        if (req.query?.email) {
            console.log(1);
            res.json(await User.findOne({ email: req.query.email }));
        } else {
            console.log(2);
            res.json(await User.find());
        }
    }

    if (method === "POST") {
        const {name, email, password} = req.body;
        const userDoc = await User.create({
            name, email, password
        });
        await User.findOneAndUpdate({name: name}, {email: email}, {password: password}, {phone: ""}, {image: ""}, {products: []});
        res.json(userDoc);
    }

}
  