const pilotos = ['joao', 'lucas', 'bruno', 'carmela', 'vacare']


pilotos.pop() // remove o ultimo da lista do array
console.log(pilotos)

pilotos.push('amanda') // add um elemento no final da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista do array
console.log(pilotos)

pilotos.unshift('elza') // add no primeiro elemento da lista
console.log(pilotos)

//-----------  splice pode add e remover elementos

// add
pilotos.splice(2,0,'konagai','americano')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

// novo array extraido de outro array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)