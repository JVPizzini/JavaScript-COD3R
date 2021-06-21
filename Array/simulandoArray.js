const quaseArray = {0:'joao', 1:'vitor'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['joao', 'vitor', 'lucas']
console.log(quaseArray.toString(), meuArray)