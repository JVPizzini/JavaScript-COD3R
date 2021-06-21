// cadeia de protótipos (prototypes chain)

Object.prototype.attr0 = '0' // evitar manipular o prototype
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr: '3'}

const filho = {__proto__:pai ,attr3: 'C'}

console.log(filho.attr1, filho.attr1,filho.attr2, filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    nome: 'f40',
    valMax: 324 // shadowing
}

const fiat = {
    nome: 'uno',
    status(){
        return `${this.nome}: ${super.status()}` // usar o super para pegar o metodo que está no prototype, pode ser usado 
    }
}

Object.setPrototypeOf(ferrari, carro) // referênciando o prototype de ferrari que no caso  é o carro
Object.setPrototypeOf(fiat, carro)    // idem

console.log(ferrari)
console.log(fiat)

fiat.acelerarMais(100)
console.log(fiat.status())
ferrari.acelerarMais(80)
console.log(ferrari.status())