const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

	if(req.url === '/abc') {
	 fs.readFile('./global.html', 'utf-8', (err, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data);

	 })	
	} else {
		res.writeHead(404, {'Content-Type' : 'text/plain'});
		res.end('404 Page not found');
	}	
	

}).listen(3333);

