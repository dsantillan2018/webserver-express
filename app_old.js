const http = require('http');

// Codigo que inicia un servidor
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Escribiendo en la respuesta
    let salida = {
        nombre: 'David',
        edad: '28',
        url: req.url
    }
    res.write(JSON.stringify(salida));

    // Se debe indicar que se termino de escribir la respuesta
    res.end();
    // Puerto a escuchar
}).listen(8080);

console.log(`Escuchando el puerto 8080`);