import express, {Request, Response, Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { PORT } from "./config";



dotenv.config();


const app: Application = express();

app.use(express.json());



const corsOptions= {
    origin: process.env.NODE_ENV === 'production' ? 'https://your-production-domain.com' : 'http://localhost:3000',
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-VERIFY', 'X-MERCHANT-ID'],
    credentials: true,
} 

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

