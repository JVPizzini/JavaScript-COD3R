
// Arrouw function
const soma = (a,b) => a+b
console.log(soma(1,1))

// Arrouw function (This)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametro default

function log(text = 'Node'){
    console.log(text)
}

log()
log('teste')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,74,5))