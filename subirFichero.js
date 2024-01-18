const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const server = http.createServer();

server.on("request", function (peticion, respuesta) {
	if (peticion.url == "/subida") {
		let form = new formidable.IncomingForm();
		form.parse(peticion, function (err, campos, archivos) {
			let rutaOriginal = archivos.fichero[0].filepath;
			let ruta = "C:/temporales/" + archivos.fichero[0].originalFilename;

			fs.rename(rutaOriginal, ruta, function (err) {
				console.log("Fichero subido!");
			});
		});
	} else {
		fs.readFile("formularioSubida.html", function (err, datos) {
			respuesta.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
			respuesta.write(datos);
			respuesta.end();
		});
	}
});

server.listen(8080, "127.0.0.1");
console.log("Servidor corriendo en localhost:8080");
