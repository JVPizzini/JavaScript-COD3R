const soma = function (x,y)
{
    return x + y

}
const imprimirResultado = function (a,b, operacao = soma)
{
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y) 
  {
      return x - y
  }
)

imprimirResultado(3,4, (x,y) => x * y)

const pessoa = 
{
    falar: function()
    {
        console.log('Ola')
    }
}

pessoa.falar()
console.log(soma(4,4))

const func =  (x,y,z) => console.log(x + y + z )

func(1,2,3)
