const http = require('http');
var fs = require('fs');

const PORT = 4000;

http.createServer(function (request, response) {
    console.log('request starting...', new Date());

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000,
    };
    if (request.method === 'OPTIONS') {
        respose.writeHead(204, headers);
        response.end();
        return;
    }

    var filePath = './videos' + request.url;
    console.log(filePath);;
    fs.readFile(filePath, function (error, content) {
        response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('error with:\t' + error.code);
                response.end();
            }
        }
        else {
            response.end(content, 'utf-8');
        }
    });
}).listen(PORT);
console.log(`Server listening PORT ${PORT}`);