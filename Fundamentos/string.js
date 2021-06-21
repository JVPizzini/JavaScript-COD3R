const escola = "Cod3r--4"

console.log(escola.charAt(4)) // Exibira a letra que se encontra na posição 4
console.log(escola.charAt(5)) // Não ira exibir nada pois não possui nada na posição 5
console.log(escola.charCodeAt(3)) // tabela uniCode
console.log(escola.indexOf('o')) // Ele acha a posição do parametro passado
console.log(escola.substring(1)) // Exibe somenete o que estava na posição 1
console.log(escola.substring(0, 3)) // Exibe da posição zero a posição 3
console.log('escola '.concat(escola).concat("!")) // .concat ele concatena as strings 
console.log(escola.replace(3, 'e')) // Substitui de acordo com a posição passada. Nessa caso ele colocarar o E na posição 3
console.log(escola.replace(/\w/g, 'e')) // expressão regular (rejecs) Troca todas as letras por 'e'
console.log('escola '.concat(escola).concat("oi ").concat("ae")) // concatenando mais de uma vez
console.log('joao, maria, ana, bia'.split(',')) // A função .split abre um array e separa através do "," as palavras