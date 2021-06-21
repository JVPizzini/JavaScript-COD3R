class Avo{
    constructor(sobrenome){
        this.sobrenemo = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'prof'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('silva')
        
    }
}
const filho = new Filho
console.log(filho)