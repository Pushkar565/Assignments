const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Check if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not defined in the .env file');
    process.exit(1);
}

console.log('Mongo URI:', process.env.MONGO_URI);

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

connectDB();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



app.use('/api/users', require('./routes/user'));
app.use('/api/books', require('./routes/book'));
app.use('/api/reviews', require('./routes/review'));
app.use('/api/favorites', require('./routes/favorite'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
