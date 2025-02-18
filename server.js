const express = require("express")
const {resolve} = require("path")

const app = express()

app.use(express.static("./static"))

app.get("/" , (req , res)=>{
    res.status(200).sendFile(resolve("./main.html"))
})

app.listen(3232)