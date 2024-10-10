let a = 7;
let b = 94;

console.log("O valor inicial é A = " + a);
console.log("O valor inicial é B = " + b);

// Trocar o valor das variáveris. a = 94 e b = 7;

a = 94;
b = 7;

console.log("O valor de troca de é A = " + a);
console.log("O valor de troca de é B = " + b);

// Outra forma de fazer

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// Outra forma de fazer

[a, b] = [b, a];
console.log(a);
console.log(b);