// Function
let dobro = function(a) {
        return 2 * a
    }
    // Arrow Function
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Returnd está implícito

console.log(dobro(Math.PI))

ola = () => 'Óla'
ola = _ => 'Olá' // Possui param

console.log(ola())


soma = (a, b) => a + b

console.log(soma(1, 2))