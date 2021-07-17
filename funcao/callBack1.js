const fabrincante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, teste)
{
    console.log(`${teste}. ${nome}`)
}

fabrincante.forEach(imprimir)
fabrincante.forEach(fabricante => console.log(fabricante))  


function teste2(a,b,c,d){
    console.log(`${b} - ${a} - ${c} - ${d}`)
    console.log(typeof(a))
    console.log(typeof(b))
    console.log(typeof(c))
    console.log(typeof(d))
    
}

const teste = ["oi","Tchau","oie"]

teste.forEach(teste2)
