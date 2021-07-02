function maior(a,b){
    if (a>=b) {
        return true
    }else
        return false
    }

function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }

console.log(maior(15,10))
console.log(maiorOuIgual(3,11))