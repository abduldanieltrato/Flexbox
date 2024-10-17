class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar(frase) {
        console.log(this.nome + " disse: " + frase)
    }
}

var pessoa1 = new Pessoa("João");

pessoa1.falar("Estou exausto, uffff!!!!");