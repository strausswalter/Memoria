const http = require('http');

const server = http.createServer((request, response) =>{
   
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("<h1>Hello World!!</h1>");


    

});

server.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Servidor rodando na porta 3000!!");
    }
});
