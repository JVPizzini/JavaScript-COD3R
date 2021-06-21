console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('joao', 'lucas', 'carlos')
console.log(aprovados)

aprovados = ['lucas','carlos', 'joao']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'paulo'
aprovados.push('joaov')

console.log(aprovados.length)

aprovados[9] = 'rafa'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['joao', 'lucas', 'amanda']
aprovados.splice(1,1, 'teste1', 'teste2')
console.log(aprovados)