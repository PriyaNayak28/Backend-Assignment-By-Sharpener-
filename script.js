// creating a small chat app

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`<html>
           <head><title>Document</title></head>
           <body>
           <form action ="/message" method = "POST">
           <input type ='text' name = "message">
           <button type="submit">submit</button>
           </form>
           </body>
           </html>`);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err);
                    return res.end('Error writing to file');
                }

                fs.readFile('message.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.log(err);
                        return res.end('Error reading file');
                    }
                    else {
                        res.setHeader('location', '/');
                        res.write(`<html>
                        <head><title>Document</title></head>
                        <body>
                        <form action ="/message" method = "POST">
                        <h1>${data}</h1>
                        <input type ='text' name = "message">
                        <button type="submit">submit</button>
                        </form>
                        </body>
                        </html>`);
                        console.log(data);
                        return res.end();
                    }
                });
            });
        })
    }
});

// server started

server.listen(5500, () => {
    console.log("server started");
})








