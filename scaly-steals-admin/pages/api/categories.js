import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import mongoose from "mongoose";

export default async function handler(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === "GET") {
        res.json(await Category.find());
    }

    if (method === "POST") {
        const {name, description} = req.body;
        const categoryDoc = await Category.create({
            name, description
        });
        res.json(categoryDoc);
    }
}
  