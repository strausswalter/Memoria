
//linha HTML:
//<input type="text"name="txtCpf"id="cpf"time="fla">


//colocar a linha HTML ligada ao id cpf dentro da variavel cpf:
let cpf = document.querySelector('#cpf');

//vendo atributos CSS:
cpf.style

//manipulando elementos CSS de forma inline:
cpf.style.backgroundColor = 'blue';

//atributo "time" não é um atributo padrão do HTML, portanto o comando abaixo não funciona:
cpf.time
undefined

//manipulando atributos não padrão do HTML:
cpf.getAttribute('time')
'fla'

cpf.getAttribute('id')
'cpf'

cpf.getAttribute('name')
'txtCpf'

//adicionar atributos HTML
cpf.setAttribute('page','cadastro.html')38
undefined

cpf
<input type="text"name="txtCpf"id="cpf"time="fla"page="cadastro.html"></input>


/*
DOCUMENT:OPERAÇÕES ÚTEIS
Métodos:
 getElementById  (id é único na página)
 getElementsByName (conjunto de elementos, um array, pois pode retornar mais de um elemento com o mesmo name)
 getElementsByTagName (conjunto de elementos, um array)
 getElementsByClassName (conjunto de elementos, um array)
 querySelector (retorna o 1o elemento que encontrar com o nome apontado)
 querySelectorAll (conjunto de elementos, um array)

 If you only want to style a specific input type, you can use attribute selectors:
    input[type=text] - will only select text fields
    input[type=password] - will only select password fields
    input[type=number] - will only select number fields
    etc..
*/




