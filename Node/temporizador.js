const sc = require('../node_modules/node-schedule')

const tr1 = sc.scheduleJob('*/5 * 12 * * 2',function(){
    console.log('Executando tarefa', new Date().getSeconds())
})