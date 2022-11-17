interface ContaInterface{
    valor: number | null, //tipado como numero ou nulo
    nome: string | null,
    addValor(v: number): void,
    showValor(): void,
    removeValor(v: number): void,
}

class Conta implements ContaInterface{
    valor: number | null;
    nome: string | null;

    constructor(
        valor: number | null,
        nome: string | null,
    ){
        this.valor = valor;
        this.nome = nome;
    }

    addValor(v: number): void{

    }
    showValor(): void{

    }

    removeValor(v: number): void{

    }
}