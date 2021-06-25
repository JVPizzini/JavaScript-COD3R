function formatar(v1){
   return console.log(valorFormatado = `R$ ${v1.toFixed(2).toString().replace(".",",")}`)
}

formatar(0.1 + 0.2)