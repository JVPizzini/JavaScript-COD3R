let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Joao','vitor','pizzini'])
})

// p.then(function(resolve) {
//     resolve['Joao','vitor','pizzini']
// })

// const letraMinuscula = letra => letra.toUpperCase()

p
  .then(arrayOuString => arrayOuString[0])
  .then(arrayOuString => arrayOuString[0])
  .then(letraMinuscula => letraMinuscula.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))