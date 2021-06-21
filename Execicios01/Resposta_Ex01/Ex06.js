function JurosSimples(capIni, txJuros,tempo){
    return console.log(capIni + (capIni * txJuros * tempo))

}

function JurosComposto(capIni, txJuros,tempo){
    return console.log(capIni * (1 + txJuros) ** tempo)
}

JurosComposto(100, 10/100,2)
JurosSimples(100, 10/100,2)