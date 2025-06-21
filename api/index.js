import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


const app = express();
app.use(express.json());

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

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);