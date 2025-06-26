const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('request made');

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, date) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(date);
            res.end(date);
        }
    })

   
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})