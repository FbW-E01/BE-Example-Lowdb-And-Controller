export function globalErrorHandler(err, req, res, next) {
    console.error("Global Error Handler intercepted an error!", err.stack);
    res.status(500);
    res.send({ message: err.message });
}