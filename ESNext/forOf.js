for(let letra of "Coder"){
    console.log(`Letra: ${letra}`)
}

const assuntosEcma = ['Map','Set','Promise']

for(let i in assuntosEcma){
    console.log(`indice: ${i}`)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
     ['Map',{abordado: true}]
    ,['Set', {abordado: true}]
    ,['Promise', {abordado : false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

// Segunda possibilidade
for(let [ch,vl] of assuntosMap){
    console.log(ch,vl)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valores of assuntosMap.values()){
    console.log(valores)
}

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a','b','c'])

for(let i of s){
    console.log(i)
}

