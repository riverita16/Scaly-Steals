const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    password: String,
    phone: String,
    image: String,
    products: [{type:String}],
    liked: [{type:String}],
    cart: [{type:String}]
},{ 
  timestamps: true 
});

export const User = models.User || model("User", UserSchema);