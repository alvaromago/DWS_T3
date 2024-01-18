const http = require("http");
const nodemailer = require("nodemailer");
const server = http.createServer();

server.on("request", function (peticion, respuesta) {
	let transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "aalvaromago@gmail.com",
			pass: "jmpdvpsymsczbqku",
		},
	});

	let correo = {
		from: "aalvaromago@gmail.com",
		to: "98claudia@gmail.com",
		subject: "Asunto del correo",
		text: "Hoola buenos dias :)",
	};

	transport.sendMail(correo, function (err, info) {
		console.log("Correo enviado correctamente");
	});
});

server.listen(8080, "127.0.0.1");
console.log("Servidor corriendo");
