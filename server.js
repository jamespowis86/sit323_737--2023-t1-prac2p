const express = require("express")
const app = express ()

app.get("/", function (req,res,)
{
    res.send("Hello World.  A basic web page")
})

app.listen(3000, () =>{
    console.log('The server is listening on port 3000')
})