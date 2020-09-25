const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MondoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error: ${err.message}`.red)
    }
}