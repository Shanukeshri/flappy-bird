const { readFileSync } = require("fs")
const index = readFileSync("./main.html", "utf8")
const style = readFileSync("./styles.css", "utf8")
const script = readFileSync("./script.js", "utf8")
const bg = readFileSync("./images/bg.png")
const bird = readFileSync("./images/bird.png")
const obs = readFileSync("./images/obstacle.png")

const server = require("http").createServer((req, res) => {

    console.log(req.url)

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(index)
        res.end()
    }
    else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" })
        res.write(style)
        res.end()
    } 
    else if (req.url === "/script.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.write(script)
        res.end()
    }
    else if (req.url === "/images/bg.png") {
        res.writeHead(200, { "content-type": "image/png" })
        res.write(bg)
        res.end()
    }
    else if (req.url === "/images/bird.png") {
        res.writeHead(200, { "content-type": "image/png" })
        res.write(bird)
        res.end()
    }
    else if (req.url === "/images/obstacle.png") {
        res.writeHead(200, { "content-type": "image/png" })
        res.write(obs)
        res.end()
    }

    else {
        res.writeHead(404, { "content-type": "text/plain" })
        res.end("sorry not found")
    }

})

server.listen(3232)