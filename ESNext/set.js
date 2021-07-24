// Não aceita repetição e não é indexada

const times = new Set()

times.add('sp')
times.add('palmera').add('fla').add('flu')
times.add('palmera')
times.add('sp')

console.log(times)
console.log(times.size)
console.log(times.has('SP'))
console.log(times.has('sp'))
times.delete('fla')

console.log(times.has('fla'))

const nomes = ['joao','vitor','vitor','joao', 'pizzini']
const nomesSet = new Set(nomes)
console.log(nomesSet)
