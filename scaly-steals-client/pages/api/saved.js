import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    // add or remove from liked arr
    if (method === "POST") {
        const {id, user} = req.body;
        if (await User.findOne({_id: new ObjectId(user), liked:id})) {
            await User.findOneAndUpdate({_id: new ObjectId(user)}, {$pull : {liked:id}});
        } else {
            await User.findOneAndUpdate({_id: new ObjectId(user)}, {$push : {liked:id}});
        }

        res.json(true);
    }
}