function bissexto(ano){
  
    if (ano % 4 === 0 && (ano % 100 != 0 || ano % 400 === 0)){
        return "Bissexto"
    }else{
        return "Não é bissexto"
    }
}

// check if february is the 29th

function feb(year){
    return new Date(year,1,29).getDate() === 29
}

console.log(feb(2020))
console.log(bissexto(2021))