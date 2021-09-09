export function wildcardEndpoint(req,res) { 
    res.status(404);
    res.send({ error: "Not found" });
}