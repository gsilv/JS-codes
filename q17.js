function aumento(plan, sal) {
    switch (plan) {
        case 'A':
            console.log('Novo salário: ' + ((sal * 0.1) + sal))
            break
        case 'B':
            console.log('Novo salário: ' + ((sal * 0.15) + sal))
            break
        case 'C':
            console.log('Novo salário: ' + ((sal * 0.2) + sal))
            break
        default:
            console.log('Plano inválido')
    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)
