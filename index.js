const http = require('http')

const server = http.createServer((request,response)=>{
    console.log('ruta',request.url)
    switch(request.url){
        case '/':
            response.writeHead(200,{'Content-Type': 'application/json'})
            response.end(JSON.stringify('Hola mundo'))
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('No encontrado')
    }
})
server.listen(3079,()=>{
    console.log('servidor operativo en puerto 4000 y localhost')
})