function falarDepoisDe(sec,phase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(phase)
        }, sec * 1000)
    })
}

falarDepoisDe(3,'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))
