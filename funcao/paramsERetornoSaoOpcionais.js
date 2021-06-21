function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 4))
console.log(area(2))
console.log(area())
console.log(area(2, 4, 3, 10, 12))
console.log(area(3, 10))
area(3, 10)