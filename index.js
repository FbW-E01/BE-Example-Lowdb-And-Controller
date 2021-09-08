import express from 'express';
import { requestlogger } from './middlewares/requestlogger.js';
import { postsGet, postsPost, postsPut, postsDelete } from './controllers/postsController.js';

const app = express();
app.use(requestlogger);
app.use(express.json());

app.get("/posts", postsGet);
app.post("/posts", postsPost);
app.put("/posts/:id", postsPut);
app.delete("/posts/:id", postsDelete);

const port = 3012;
app.listen(port, () => {
    console.log("Application listening on http://localhost:" + port);
})