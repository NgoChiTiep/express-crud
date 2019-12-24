const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express()
const PORT = 8181
const routes = require('./src/routes/Crud_routes')
//Thiết lập một kết nối mongoose mặc định
const mongoDB = 'mongodb://127.0.0.1:27017/demo';
mongoose.connect(mongoDB).then(() => console.log('DB Connected!'))
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
const db = mongoose.connection

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',routes)

app.listen(PORT, () => console.log(`Server started on http://localhost${PORT}`))

module.exports = app;
