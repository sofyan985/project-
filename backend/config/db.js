const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB Atlas connection string
        const uri = 'mongodb+srv://sofyanbabar:kitty@cluster0.qrq7p.mongodb.net/kitty?retryWrites=true&w=majority&appName=Cluster0';

        // Connect to MongoDB Atlas
        await mongoose.connect(uri);
        console.log('MongoDB Connected Successfully to Atlas');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

