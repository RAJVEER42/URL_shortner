import 'dotenv/config';
import express from 'express';
import userRouter from './routes/user.routes.js';
import urlRouter from './routes/url.routes.js';
import {authenticationMiddleware} from './middlewares/auth.middlewares.js';

const app = express();
const PORT = process.env.PORT ?? 8000;

//middleware
app.use(express.json());
app.use(authenticationMiddleware);

app.get('/', (req,res) => {
    return res.json({status: 'Server is up and running...'})
});

//middleware
app.use(urlRouter);
app.use('/user', userRouter);

app.listen(PORT, (req, res) => {
    console.log(`The server is running in the port ${PORT}`);
});