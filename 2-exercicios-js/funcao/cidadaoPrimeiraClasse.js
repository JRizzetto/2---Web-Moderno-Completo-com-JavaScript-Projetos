// Função em JS é a First_class Object (Citiziens)
// Higher-order function 

// Criar função de forma literal 
function fun1(){
    return 'n';
}

// Armazenar em uma variável
const fun2 = function(){

}

// Armazenar em um Array 
const array = [function( a, b ) {return a + b}, fun1, fun2]
console.log(array[0](3, 6))

// Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro 
function run(fun){
    fun()
}
run(function() { console.log('Olá parametro ...')})

// Uma função pode retornar e contar uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 5)(7)
const somaFunc = soma(2, 5);
somaFunc(7)