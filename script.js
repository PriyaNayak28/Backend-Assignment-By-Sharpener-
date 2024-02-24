console.log("hello world");

const fs = require('fs');
fs.writeFileSync('script.txt', 'dummy txt');

// all about create server

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-Type', 'text/html')
    res.write(`<html>
<head><title>Document</title></head>
<body><h1>hello world!</h1></body>
</html>`)
    if (req.url === '/home') {
        res.write('welcome home');
    }
    else if (req.url === '/about') {
        res.write('welcome to about us page');
    }
    else if (req.url === '/node') {
        res.write('Welcome to my Node Js project');
    }
    res.end("<h1>priya nayak</h1>");
});

server.listen(4000, () => {
    console.log("server started");
})
