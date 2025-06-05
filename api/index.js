import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

const app = express();

console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');

        app.listen(3000, () => {
            console.log('🚀 Server running on port 3000');
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });
