
//Função Construtora:
function Pessoa (nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
   
    this.falar = function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}. Sou ${this.profissao}`)
    }
}

const p1 = new Pessoa("João", 35, "Vendedor de carros");
p1.falar()


// Função Factory
function criaPessoa(nome, idade, profissao) {
    return {
        nome,
        idade,
        profissao,
        falar: function() {
            console.log(`Meu nome é ${nome}, tenho ${idade} e minha profissão é ${profissao}`);
        }
    };
}
const p2 = criaPessoa("Jefferson", 35, 'Engenheiro Eletricista');
p2.falar()


// Classe (class):
class Pessoa1 {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`);
    }
}

const p3 = new Pessoa1("Suelem", 34, "Técnica de enfermagem")
p3.falar()
