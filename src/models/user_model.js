const mongoose = require('mongoose')
const Schema = mongoose.Schema

// khởi tạo trường trong Schema == table
var userSchema = new Schema({
    username: { type: String, required: false, trim: true, minlength: 2 },
    age: { type: Number, min: 18, max: 65, required: false },
    email: { type: String, unique: true, required: false, trim: true },
    password: { type: String, required: false, trim: true, minlength: 6 },
});

// tạo Schema == table
// demo
module.exports = mongoose.model('User', userSchema);
