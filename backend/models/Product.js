const mongoose = require('mongoose'), Schema = mongoose.Schema;

var Company = require('./Company');

const ProductSchema = mongoose.Schema({
    pname: String,
    price: Number,
    imageURL: String,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Company
    }
});

module.exports = mongoose.model('Product', ProductSchema);

