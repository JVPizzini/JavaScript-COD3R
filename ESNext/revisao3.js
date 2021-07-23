//ES8: Object.velues / Object.entries

const obj = {a:1, b:2, c:3}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


const nome = 'joao'
const obj1 = {
    nome,
    fala(){return 'eae rapaziada!!'}
}

console.log(obj1.nome,'\n',obj1.fala())

// Class

class Animal {}
class cachorro extends Animal{
    falar(){return 'au au'}
}

console.log(new cachorro().falar())