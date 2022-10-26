// Create an article Schema with fields

// title -> String
// description -> String
// tags -> String
// createdAt -> Date, defaults to current date
// likes -> Number, defaults to zero

// Q. create model for article schema created above and export it.

let mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    crearedAt: { type: Date, default: new Date() },
    likes: {type:Number,default:0}
 })

let Article = mongoose.model('Article', articleSchema)
  module.exports= Article