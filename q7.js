function bask(a, b, c) {
    let resultado = []
    let delta = (b ** 2) - (4 * a * c)

    if (delta < 0) {
        return 'Delta Negativo'
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    resultado.push(x1)
    resultado.push(x2)

    return resultado
}

console.log(bask(1, 3, 2))
console.log(bask(3, 2, 1))