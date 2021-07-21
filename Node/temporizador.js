const schedule = require('../node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2',function(){
    console.log('Executando a cada 5 segundos a tafera 1',new Date().gatSeconds())
})

