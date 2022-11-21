let fs = require('fs');

//fs.writeFile tem 3 argumentos: 1-nome do arquivo, 2-o conteúdo do arquivo, 3-callback para saber se tudo deu certo.
// fs.writeFile('teste.txt', 'Hello World', function(error){

//fs.appendFile: concatena novo texto em arquivo já existente (ou cria o arquivo caso este não exista)
// fs.appendFile('teste.txt', 'Hello World', function(error){

// fs.unlink: deleta arquivo
// fs.unlink('teste.txt', function (error) {

//fs.rename:
fs.rename('teste.txt', 'NovoNome.txt', function (error) {

    if(error) {throw error};//A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.

    console.log("Arquivo renomeado com sucesso");

}); 


