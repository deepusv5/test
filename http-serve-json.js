const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((req, serverResponse) => {

 if(req.method === 'GET' && req.url === '/post') {
	https.get(url, (httpResponse) => {
		httpResponse.on('data', data => {
            httpResponse.setEncoding('utf-8');
            serverResponse.write(data);
            console.log(data);
		});
		httpResponse.on('end', () => {
			serverResponse.end();
			console.log('Its over');
		});
	});
 } else {
 	serverResponse.writeHead(404, {'Content-Type' : 'text/plain'});
 	serverResponse.end('404 file not found');
 }
 
}).listen(4444);

