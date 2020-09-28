const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MondoDB Connected: ${conn.connection.port}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1);
    }
}


module.exports = connectDB;