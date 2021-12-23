const mongoose = require('mongoose');
const { ObjecId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            index: true,
        },
        role: {
            type: String,
            default: "subscriber",
        },
        cart: {
            type: Array,
            default: [],
        },
        address: String,
        // wishlist: [{type: ObjecId, ref: "Product"}],
    }, 
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema)