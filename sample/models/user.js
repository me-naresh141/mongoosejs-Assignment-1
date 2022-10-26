// Q. create a user schema with following fields and type 1.name -> string 2.email -> string 3.age -> number

// Q. update user schema to make email lowercase and default age to be 0.

// Q. Update user schema

// contains password field with minimum 5 characters
// add createdAt field of type date and default it to current date.



// Q. Add favourites in user schema of type array of strings.

// Q. Add timestamps to user and address schema.

// Q. create model for users schema created above and export it.

let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  password: { type: String, minlength: 5 },
  createdAt: { type: Date, default: new Date() },
  favourites: [String],
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)
