const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gerneSchema = new Schema ({
    name:{type:String, minLength:3, maxLength:100},
})

gerneSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`;
})
module.exports = mongoose.model("Genre",gerneSchema);
