const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    // Ruta principal
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }

    // Servir CSS
    else if (req.url === '/css/estilop.css') {
    const filePath = path.join(__dirname, 'css', 'estilop.css');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('CSS no encontrado');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    }

    // Ruta no encontrada
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});