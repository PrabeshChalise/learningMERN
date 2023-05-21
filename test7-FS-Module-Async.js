const {readFile, writeFile} = require("fs")
readFile("./content/first.txt","utf-8", (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile("./content/second.txt","utf-8", (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second =  result
        writeFile("./content/result1.txt", "hello its prabesh's result", (err, result)=>{
            if(err){
                console.log(err)
                return;
            }
            const resultXD = result
        })
    }
    )
})

