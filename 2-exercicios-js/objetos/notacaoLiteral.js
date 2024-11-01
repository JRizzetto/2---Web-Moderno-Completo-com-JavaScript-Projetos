const a = 1
const b = 2
const c = 3 

const obj1 = {a, b, c}
console.log(obj1)

console.log('-------------------------------')

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

console.log('-------------------------------')

const obj5 = {
    function1: function(){
        // ...
    },
    function2(){
        // ...
    }
}

console.log(obj5)