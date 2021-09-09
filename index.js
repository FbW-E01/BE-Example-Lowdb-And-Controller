import express from 'express';
import { requestlogger } from './middlewares/requestlogger.js';
import { globalErrorHandler } from './middlewares/globalErrorHandler.js';
import { wildcardEndpoint } from './controllers/errorController';
import userRouter from './routes/userRouter.js';
import postsRouter from './routes/postsRouter.js';

const app = express();
app.use(requestlogger);
app.use(express.json());

// "Users" endpoints
app.use('/users', userRouter);

// "Post" endpoints
app.use('/posts', postsRouter);

// Wildcard endpoint, runs for everything..... except errors!
app.use(wildcardEndpoint);

// This middleware handles all uncaught errors
app.use(globalErrorHandler);

const port = 3012;
app.listen(port, () => {
    console.log("Application listening on http://localhost:" + port);
});