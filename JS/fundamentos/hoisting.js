console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// Nesse caso, quando usamos o var, ele tem uma propriedade chamada "hoisting" que usa o conceito de jogar a variváel para o topo, ou seja, mesmo que ela não tenha sido declarada iicialmente, ela sobe para o topo como se tivesse sido declarada, mesmo que vazia.
// Exemplo da estrutura:

var b
console.log('b = ', b);
b = 2;
console.log('b = ', b);

