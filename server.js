const http = require('node:http');
const datos = require('./data.js');

const server = http.createServer((req , res) =>{
    res.writeHead(200, {'content-type' : 'text/html'});

    res.write(`
    <!DOCTYPE html>
    <html lang = 'es'>
    <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width , initial-scale=1.0'>
    <title>${datos.titulo}</title>
    </head>
    <body>
    <h1>${datos.titulo}</h1>
    <h2>${datos.subtitulo}</h2>
    <p>${datos.descripcion}</p>
    <p>${datos.escritor}</p>
    <p>${datos.director}</p>
    </body>
    </html>
    `);
    res.end()
});
const PORT = 3000 ;
server.listen(PORT,() => {
    console.log('servidor escuchando en el puerto ${PORT}');

});