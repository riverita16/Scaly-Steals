const { Schema, model, models } = require("mongoose");

// fix to require these
const CategorySchema = new Schema({
    name: {type:String, required:true},
    description: {type:String, required:true}
});

export const Category = models.Category || model('Category', CategorySchema);