const moduloA = require('../../moduloA')
console.log(moduloA)


const c = require('./PastaC')
console.log(c.ola)


const http = require('http')
http.createServer((req,res) => {
    res.write('oi bebe ')
    res.end()
}).listen(8080)

