import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    // add to cart
    if (method === "POST") {
        const {id, user} = req.body;
        await User.findOneAndUpdate({_id: new ObjectId(user)}, {$push : {cart:id}});
        res.json(true);
    }

    // delete from cart
    if (method === "DELETE") {
        const {id, user} = req.body;
        await User.findOneAndUpdate({_id: new ObjectId(user)}, {$pull : {cart:id}});
        res.json(true);
    }
}