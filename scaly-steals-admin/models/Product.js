const { Schema, model, models } = require("mongoose");

// fix to require these
const ProductSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    price: {type: Number, required: true},
    images: [{type:String}],
    category: {type:String, required: true},
    user: {type:String, required:true}
}, {
    timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);