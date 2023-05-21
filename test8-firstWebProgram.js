const http = require("http")
const server = http.createServer((req, res, next)=>{
    try{
    if(req.url==="/"){
        res.end("Hello this is our home page")
        return;
    }
    if(req.url==="/about"){
        res.end("This is about page")
        return;
    }
    else{
    res.end("Soory no-thing to show")
    }
}
catch (e){
    next({"error": e})
}

})
server.listen(5000)