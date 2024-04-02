const http = require('http');

const PORT = 8080

const server = http.createServer((req, res) => {
    console.log(req);

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {
        'Content-Type': 'application/csv'
    });

    /* const persona = {
           id: 1,
           nombre: 'Felipe',
       } */
    // res.write( JSON.stringify(persona) );

    res.write('id, nombre\n')
    res.write('1, Fernando\n')
    res.write('2, Maria\n')
    res.write('3, Juan\n')
    res.write('4, Pedro\n')
    res.end();
})

server.listen(PORT);

console.log("Escuchando en el puerto: ", PORT);