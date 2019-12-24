const mongoose = require('mongoose')
const Schema = mongoose.Schema

// khởi tạo trường trong Schema == table
var userSchema = new Schema({
    email: { type: String, unique: true, required: true, trim: true },
    age: { type: Number, min: 18, max: 65, required: true },
    username: { type: String, required: true, trim: true, minlength: 2 },
    password: { type: String, required: true, trim: true, minlength: 6 },
});

// tạo Schema == table
module.exports = mongoose.model('User', userSchema);
