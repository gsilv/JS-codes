function calc(a, oper, b,){
    switch(oper){
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break

        default:
            console.log('Operação inválida')
    }
}

calc(4, '+', 5)
calc(4, '-', 5)
calc(4, '*', 5)
calc(4, '/', 5)
calc(4, '**',5)