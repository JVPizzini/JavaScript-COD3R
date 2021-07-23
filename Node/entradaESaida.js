const anonimo = process.argv.indexOf('-a')!== -1

if(anonimo){
    process.stdout.write('fala ae bro!!\n')
    process.exit()
}else{
    process.stdout.write('Informa o seu nome :')
    process.stdin.on('data', data => {
        const nome = data.toString()//.replace('\n', '')

        process.stdout.write(` ooooiiiiiii ${nome} asdasdasdasds!! \n`)
        process.exit()
    })
}