console.log("hello world");

const fs = require('fs');
fs.writeFileSync('script.txt', 'dummy txt');

// all about create server

const http = require('http');

const server = http.createServer((req, res) => {
    res.end("<h1>priya nayak</h1>");
});

server.listen(3000, () => {
    console.log("server started");
})
