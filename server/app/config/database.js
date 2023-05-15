const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:5000/express-mongo';


const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        );
        console.log('MongoDB connected');
        }
    catch (err) {
        console.error(err.message);
        process.exit(1);
        }
    };

module.exports = connectDB;