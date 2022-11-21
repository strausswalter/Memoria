const fs = require('node:fs');

let args = process.argv.slice(2);//Retorna os argumentos passados via prompt de comando, porém sem os 2 primeiros.

let fileName = args[0];//o fileName será o 1o argumento (seria o 3o argumento antes do "slice")

fs.readFile(fileName, "UTF8", (error, data)=>{//Ler o arquivo já existente, incluindo dados em "data"

    if(error) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{//Criar novo arquivo com o data do 1o em letras maiúsculas
        if(error) throw error;

        console.log("Arquivo gerado com sucesso");
    })
});

