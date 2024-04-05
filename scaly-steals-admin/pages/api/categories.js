import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import mongoose from "mongoose";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Category.findOne({_id:req.query.id}));
        } else {
            res.json(await Category.find());
        }
    }

    if (method === "POST") {
        const {name, description} = req.body;
        const categoryDoc = await Category.create({
            name, description
        });
        res.json(categoryDoc);
    }

    if (method === 'PUT') {
        const {name, description,_id} = req.body;
        await Category.updateOne({_id}, {name,description});
        res.json(true);
    }

    if (method === 'DELETE') {
        if (req.query?.id) {
            await Category.deleteOne({_id:req.query?.id});
            res.json(true);
        }
    }
}
  