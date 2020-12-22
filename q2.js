function triangulo(l1, l2, l3) {
    if ((l1 < (l2 + l3)) && (l2 < (l1 + l3)) && (l3 < (l1 + l2)) &&
        ((l1 > (l2 - l3)) && (l2 > (l1 - l3)) && (l3 > (l1 - l2)))) {
        console.log('Obedece as condições de existência')

        if (l1 == l2 && l2 == l3) {
            return 'Equilátero'
        } else if (l1 == l2 || l2 == l3 || l1 == l3) {
            return 'Isósceles'
        } else {
            return 'Escaleno'
        }

    } else {
        return 'Não obedece as condições de existência'
    }
}

console.log(triangulo(3, 3, 3))