import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const { method } = req;
    // console.log(`Request method: ${method}, Body: ${JSON.stringify(req.body)}, Query: ${JSON.stringify(req.query)}`);

    await mongooseConnect();

    if (method === "GET") {
        try {
            const { id } = req.query;
            if (!id) {
                console.log("No product ID provided");
                return res.status(400).send({ message: "Product ID is required" });
            }
    
            const product = await Product.findById(new ObjectId(id));
            if (!product) {
                console.log("Product not found, ID:", id);
                return res.status(404).send({ message: "Product not found" });
            }
    
            res.status(200).json(product);
        } catch (error) {
            console.error("Error fetching product:", error);
            res.status(500).send({ message: "Internal server error" });
        }
    } else if (method === "POST") {
        try {
            const { ids } = req.body;
            if (!ids || ids.length === 0) {
                console.log("No product IDs array provided");
                return res.status(400).send({ message: 'No product IDs provided' });
            }

            const objectIds = ids.map(id => new ObjectId(id));
            const products = await Product.find({ '_id': { $in: objectIds } });

            if (!products || products.length === 0) {
                console.log("No products found for IDs:", ids.join(", "));
                return res.status(404).send({ message: "Products not found" });
            }

            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send({ message: "Internal server error" });
        }
    } else if (method === "PUT") {
        const {title,description,user,price,images,category} = req.body;
        const productDoc = await Product.create({
            title,description,user,price,images,category
        });
        const id = (JSON.parse(JSON.stringify(productDoc)))._id;
        await User.findOneAndUpdate({_id: {user}}, {$push : {products: {id}}});
        res.json(productDoc);

    } else if (method === 'DELETE') {
        const {user,_id} = req.body;
        if (req.query?.id) {
            await Product.deleteOne({_id:req.query?.id});
            await User.findOneAndUpdate({_id: {user}}, {$pull : {products: {_id}}});
            res.json(true);
        }
    } else {
        res.status(405).send({ message: "Method not allowed" });
    }
}
