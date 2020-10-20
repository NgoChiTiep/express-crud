const mongoose = require('mongoose')
const Schema = mongoose.Schema

// khởi tạo trường trong Schema == table
var userSchema = new Schema({
    email: { type: String, unique: true, required: false, trim: true },
    age: { type: Number, min: 18, max: 65, required: false },
    username: { type: String, required: false, trim: true, minlength: 2 },
    password: { type: String, required: false, trim: true, minlength: 6 },
});

// tạo Schema == table
module.exports = mongoose.model('User', userSchema);
