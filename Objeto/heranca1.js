const ferrari = {
    medole: 'f40',
    valMax: 321
}

const fiat = {
    medole: 'uno',
    valMax: 501
}


console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(fiat.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype )