// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e)
{
    const contador
    console.log(`O evento ocorreu! = ${contador + 1} vezes`)
}