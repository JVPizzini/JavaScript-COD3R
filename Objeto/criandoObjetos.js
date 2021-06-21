// usando a notação literal

const obj1 = {}
console.log(obj1)

// Objeto em JS

console.log(typeof Object, typeof new Object)


const obj2 = new Object
console.log(obj2.idade)



// funções construtores
function Produto (nome, preco,desc){ 
    this.nome = nome
    this.getPrecoComDesconto = () =>{return preco * (1 - desc)}
}

const p1 = new Produto('caneta', 3 , 0.5)
const p2 = new Produto('borracha', 2 , 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcão Factory

function criarFunc(nome, salario, faltas){ 
    return{ nome,
        salario,
        faltas,getSalario(){
            return (salario/30)  * (30 - faltas)
        }
    }
}

const f1 = criarFunc('joao', 400, 5)
const f2 = criarFunc('joao', 100, 2)

console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))


// Object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// Função famoso que retorna Objeto...

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)