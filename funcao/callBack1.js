const fabrincante = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`)
}

fabrincante.forEach(imprimir)
fabrincante.forEach(fabricante => console.log(fabricante))  

