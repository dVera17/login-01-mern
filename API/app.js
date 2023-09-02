import express from 'express';
import { config } from "dotenv";
import cors from 'cors';
import routerLogin from './routes/login.routes.js';
config();

const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204
}

const app = express();
app.set('port', process.env.PORT_SERVER)
app.use(express.json())
app.use(cors(corsOptions));

app.use('/login', routerLogin);

export default app;
