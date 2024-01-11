const http = require("http");
const url = require("url");
const fs = require("fs");

/**
http.createServer(function (peticion, respuesta) {
    respuesta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	respuesta.write("<h1>Hola Mundo<h1>");
	respuesta.end();
}).listen(8080, "127.0.0.1");
*/

let server = http.createServer();
server.on("request", function (peticion, respuesta) {
	let urlCompleta = url.parse(peticion.url, true);
	let pathname = urlCompleta.pathname;
	let fichero = "";

	if (pathname == "/verano") {
		fichero = "./verano.html";
	}
	if (pathname == "/invierno") {
		fichero = "./invierno.html";
	}
	if (fichero != "") {
		fs.readFile(fichero, function (err, datos) {
			respuesta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
			respuesta.write(datos);
			respuesta.end();
		});
	} else {
		respuesta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		respuesta.write("No hay ninguna estación");
		respuesta.end();
	}
});
server.listen(8080, "127.0.0.1");

console.log("Servidor corriendo en localhost:8080");
