const mongoose = require("mongoose");
const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.dxpbszx.mongodb.net/?retryWrites=true&w=majority");
        console.log(
            `Connected to Mongodb Database ${mongoose.connection.host}`
        );
    } catch (error) {
        console.log(`MONGO Connect Error ${error}`);
    }
};

module.exports = connectDB;