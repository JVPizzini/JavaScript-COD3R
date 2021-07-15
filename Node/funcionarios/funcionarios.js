const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais ==='China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func,funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

 axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // Mulher chinesa com o menor salário?
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})

axios.get(url).then(resp =>{
    const funcionarios = resp.data
    
    const searchBrazil = f => f.pais === 'Brazil'

    const brasileiros = funcionarios.filter(searchBrazil).reduce(menorSalario)

    console.log(brasileiros)

})