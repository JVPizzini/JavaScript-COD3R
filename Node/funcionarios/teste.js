const func = [
  {
    id: 268,
    nome: 'Cornie',
    sobrenome: 'Wessing',
    email: 'cwessing7f@tinyurl.com',
    genero: 'F',
    cidade: 'Ábidos',
    pais: 'Brazil',
    empresa: 'Zoozzy',
    salario: 2295.2
  },
  {
    id: 309,
    nome: 'Cristobal',
    sobrenome: 'Faunch',
    email: 'cfaunch8k@symantec.com',
    genero: 'M',
    cidade: 'Além Paraíba',
    pais: 'Brazil',
    empresa: 'Lajo',
    salario: 15968.66
  },
  {
    id: 379,
    nome: 'Nicolette',
    sobrenome: 'Rowth',
    email: 'nrowthai@comcast.net',
    genero: 'F',
    cidade: 'Palmeira',
    pais: 'Brazil',
    empresa: 'Leenti',
    salario: 2016.86
  },
  {
    id: 396,
    nome: 'Holden',
    sobrenome: 'Ambrozik',
    email: 'hambrozikaz@hhs.gov',
    genero: 'M',
    cidade: 'Pirapora do Bom Jesus',
    pais: 'Brazil',
    empresa: 'Tagpad',
    salario: 9615.09
  },
  {
    id: 472,
    nome: 'Claiborne',
    sobrenome: 'Reinhard',
    email: 'creinhardd3@mit.edu',
    genero: 'M',
    cidade: 'Entre Rios',
    pais: 'Brazil',
    empresa: 'Zoombeat',
    salario: 22868.83
  },
  {
    id: 486,
    nome: 'Domenico',
    sobrenome: 'MacGaughey',
    email: 'dmacgaugheydh@ebay.co.uk',
    genero: 'M',
    cidade: 'Tobias Barreto',
    pais: 'Brazil',
    empresa: 'Geba',
    salario: 22839.94
  }
]

//const empresa = empre => empre.empresa === 'Geba'

console.log(func.filter(empre => empre.empresa === 'Geba'))
console.log(func[0])

const Br = item =>{

    let nomes = []

    for(let i = 0; i < item.length;i++){
        if(item[i].pais === 'Brazil')
        nomes.push(item[i].nome)
    }
    return nomes
}

console.log(Br(func))
console.log(func.length)