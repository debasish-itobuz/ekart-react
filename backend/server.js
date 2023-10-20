import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/dbRoute.js';
import { connectDb } from './config/dbConnection.js';
const app = express();

dotenv.config();
connectDb();

const port = process.env.PORT || 8070

app.use(express.json())
app.use(cors());

app.use(router);

app.options('*', cors());

app.listen(port, ()=>{
    console.log(`Server started at port : ${port}`);
})

const url = 'mongodb://localhost/product'

