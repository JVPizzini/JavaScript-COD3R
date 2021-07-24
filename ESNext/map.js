const tec = new Map()

tec.set('react', { framework : false})
tec.set('angular', { framework : true})

console.log(tec.react)
console.log(tec.get('react'))
console.log(tec.get('react').framework)

const chaveVariadas = new Map([
     [function func(){},'Função']
    ,[{},'Objeto']
    ,[123,'Numeros']
])

chaveVariadas.forEach((vl,ch) => {
    console.log(`Chave: ${ch} Valor: ${vl}`)})

console.log(`Existe a chave 123 : ${chaveVariadas.has(123)}`)
console.log(`Qtd de chaves : ${chaveVariadas.size}`)
console.log('deletando a chave 123...')
chaveVariadas.delete(123)
console.log(`Existe a chave 123 : ${chaveVariadas.has(123)}`)
console.log(`Qtd de chaves : ${chaveVariadas.size}`)
