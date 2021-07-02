

let obj1 = new Object()
let obj2 = new Object()


obj1 = {a: 1, b: 2}

obj2 = {
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}

function removerPropriedade1(objeto, propriedade){
  const copia = Object.assign({},objeto )
  delete copia[propriedade]
  return copia
} // retornará {b: 2}

function removerPropriedade2(objeto,propriedade){
    const copia = {...objeto}
    delete copia[propriedade]
    return copia
}

console.log(removerPropriedade1(obj1,"nome"))
console.log(removerPropriedade2(obj2,"nome"))
// function removerPropriedade(objeto, nomeDaPropriedade) {
//     const copia = Object.assign({}, objeto)
//     delete copia[nomeDaPropriedade]
//     return copia
//     }

// function removerPropriedade(objeto, nomeDaPropriedade) {
//     const copia = {...objeto}
//     delete copia[nomeDaPropriedade]
//     return copia
//     }

//testes
// const nome1 = "joao"
// const nome2 = "joao"
// const copia1 = {...nome1}
// const copia2 = [...nome2]
// console.log(copia1,copia2)