const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://innomatricstechnologies:F4qEaqCXKeY0XME9@cluster0.a8hjn.mongodb.net/",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongo DB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;