// operador ... rest(juntar) / spread(espalhar)
// usar rest como parâmetro de função

// usar spread como objeto
const funcionario = {nome: 'joao',salario:3800000}
const clone = {milionario : true, ...funcionario}

console.log(clone)

// usar spread como array
const grupoA = ['joao','vitor','pizzini']
const grupoB = [...grupoA,'da','silva']

console.log(grupoB)