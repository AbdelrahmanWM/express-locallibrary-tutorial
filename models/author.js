const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const authorSchema = new Schema({
    first_name:{type:String,required:true,maxLength:100},
    family_name:{type:String,required:true,maxLength:100},
    date_of_birth:Date,
    date_of_death:Date,

})

authorSchema.virtual('name').get(function(){
    let name = "";
    if(this.first_name&&this.family_name){
        name = `${this.family_name}, ${this.first_name}`;
    }
    return name;
})
authorSchema.virtual('url').get(function(){
    return `/catalog/author/${this._id}`;
})

authorSchema.virtual("date_of_birth_formatted").get(function(){
    return this.date_of_birth?DateTime.fromJSDate(this.date_of_birth).toLocaleString({
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    :"";
})

authorSchema.virtual("date_of_death_formatted").get(function(){
    return this.date_of_death?DateTime.fromJSDate(this.date_of_death).toLocaleString({
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    :"";
})
authorSchema.virtual('lifespan').get(function(){
    return `${this.date_of_birth_formatted} - ${this.date_of_death_formatted}`;
})
module.exports = mongoose.model("Author",authorSchema);
