let fs = require('fs');


//fs.readFile: com os argumentos: 1-nome do arquivo, 2-formato do arquivo, 3-callback com 2 argumentos (error e data)
fs.readFile('NovoNome.txt', 'UTF8', function(error, data){ 

    if(error) {throw error};
    
    console.log(data);

}); 


