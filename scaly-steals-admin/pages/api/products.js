import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Product.findOne({_id:req.query.id}));
        } else {
            res.json(await Product.find());
        }
    }

    if (method === "POST") {
        const {title,description,user,price,images,category} = req.body;
        const productDoc = await Product.create({
            title,description,user,price,images,category
        });

        await User.findOneAndUpdate({_id: user}, {$push : {products: productDoc._id}});
        res.json(productDoc);
    }

    if (method === 'PUT') {
        const {title,description,user,price,images,category,_id} = req.body;
        await User.findOneAndUpdate({products: {_id}}, {$pull : {products: {_id}}});
        await User.findOneAndUpdate({_id: new ObjectId(user)}, {$push : {products: {_id}}});
        await Product.updateOne({_id}, {title,description,user,price,images,category});
        res.json(true);
    }

    if (method === 'DELETE') {
        const {title,description,user,price,images,category,_id} = req.body;
        if (req.query?.id) {
            await Product.deleteOne({_id:req.query?.id});
            await User.findOneAndUpdate({_id: user}, {$pull : {products: {_id}}});
            res.json(true);
        }
    }
}
  