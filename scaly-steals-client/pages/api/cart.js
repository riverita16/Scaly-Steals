import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    // get cart total
    if (method === "GET") {
        const {user} = req.body;
        const u = await User.findById(user);
        console.log(u?._id);
        res.json(true);
    }

    // add to cart
    if (method === "POST") {
        const {id, user} = req.body;
        await User.findOneAndUpdate({_id: new ObjectId(user)}, {$push : {cart:id}});
        res.json(true);
    }

    // delete from cart
    if (method === "DELETE") {
        if (req.query?.user && req.query?.id) {
            await User.findOneAndUpdate({_id: new ObjectId(req.query?.user)}, {$pull : {cart:req.query?.id}});
            res.json(true);
        }
    }
}