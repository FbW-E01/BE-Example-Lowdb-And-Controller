export function requestlogger(req, res, next) {
    console.log(` --> ${req.method} ${req.url}`)
    next();
}