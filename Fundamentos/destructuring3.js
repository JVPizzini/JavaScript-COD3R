function random({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// console.log(random({ max: 50, min: 30 }))

const obj = { max: 40, min: 20 }
console.log(random(obj))
console.log(random({ min: 955 }))
console.log(random({}))