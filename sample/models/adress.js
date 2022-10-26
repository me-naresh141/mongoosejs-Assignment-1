// Q. Add address Schema with fields

// village -> String
// city -> String
// state -> String
// pin -> number
// user -> ObjectId of User from user schema

// Q. Update address schema to contain required validators for state and city field.

// Q. Add timestamps to user and address schema.
let mongoose = require('mongoose')

 let adressSchema = new mongoose.Schema({
    village: { type: String, required: true },
     city: { type: String, required: true },
     state: {type:String,required:true},
    pin: Number,
    user: mongoose.Schema.Types.ObjectId,
 }, { timestamps: true })
 
 module.exports = mongoose.model('Address',adressSchema)