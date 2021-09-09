import express from 'express';
import { postsGet, postsPost, postsPut, postsDelete } from '../controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.get("/", postsGet);
postsRouter.post("/", postsPost);
postsRouter.put("/:id", postsPut);
postsRouter.delete("/:id", postsDelete);

export default postsRouter;