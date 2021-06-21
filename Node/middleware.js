// middleWare pattern (chain of responsability)


const passo01 = (ctx, next)=> {
    ctx.valor1 = 'mid1'
    next()
}

const passo02 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

const passo03 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx,()=> execPasso(indice + 1))    
    }
    execPasso(0)
}

const ctx = {
    exec(ctx,passo1,passo2,passo3)
}

console.log(ctx)