import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { router } from './routers/index.js';
import { errorMiddleware } from './middlewares/error-middleware.js'
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);
const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log('Error', e);
    }
}

start();