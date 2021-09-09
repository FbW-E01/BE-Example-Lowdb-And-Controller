import express from 'express';

const userRouter = express.Router();

// Add custom middleware JUST for the user routes
userRouter.use((req,res,next) => {
    console.log(" [UserRoute] " + req.method + " " + req.url);
    next();
});

userRouter.get("/", (req, res) => { res.send("Users root path"); });
userRouter.post("/", (req, res) => { res.send("Users root path POST") });
userRouter.get("/about", (req, res) => { res.send("Users About path") });
userRouter.get("/details", (req, res, next) => {
    // Local error handler
    try {
        res.send(details);
    } catch (err) {
        console.log("Whoops!!!!!!!!!!!!!!!!!!");
        console.log("Attempted to print details, this sometimes fails!!!!");

        err.message = "Getting details failed, this just fails sometimes, sowwy";
        next(err);
    }
});

export default userRouter;