const { Schema } = require('mongoose');

const CommentSchema = new Schema({
// Create an "author" property with type String and default of 'Anonymous'
// Create a "body" property with type String and make it required
// Create a "createdAt" property with type Date and set default to Date.now
author: {
    type: String,
    default: 'anonymous'
},
body: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    Default: Date.now 
}
})

module.exports = CommentSchema
