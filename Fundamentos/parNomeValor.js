// par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'faaala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 18,
    end: {
        rua: 'rua birigui',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)