var http = require('http');
var fs = require("fs");
var path = require("path");
var $ = require('jquery');

// Create a server object
http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	var url = req.url;
	let htmlFile = '';
	let cssfile = '';
	let jsfile = '';
	if(url ==='/about') {
		
		fs.readFile("./public/index.html", (err,fileContent) =>
		{
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(fileContent);
		});
		fs.readFile('./assets/css/style.css', function (err, html) {
			if (err) {
			  throw err; 
			}       
			cssfile = html;
		  });
		// res.render("./public/index.html", "UTF-8", (err, html)=>{
		// 	res.statusCode = 200;
		// 	res.setHeader('Content-Type', 'text/html');
		// 	res.end(html);
		
		// });
	}
	else if(url ==='/contact') {
		res.write(' Welcome to contact us page', {name: "Contact Us"});
		res.end();
	}
	else {
		res.write('Hello World!');
		res.end();
	}
    function send404(response){
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Error 404: Resource not found.');
        response.end();
    }
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
