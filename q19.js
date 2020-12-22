function pedido(codigo, qtd = 1){
    switch(codigo){
        case 100:
            return (3 * qtd)
            break
        case 200:
            return  (4 * qtd)
            break
        case 300:
            return (5.5 * qtd)
            break
        case 400:
            return (7.5 * qtd)
            break
        case 500: 
            return (3.5 * qtd)
            break
        case 600: 
            return (2.8 * qtd)
            break
        
        default:
            return 'Produto não existente'
    }
}

console.log(pedido(100, 2))
console.log(pedido(200, 2))
console.log(pedido(300, 2))
console.log(pedido(400, 2))
console.log(pedido(500, 2))
console.log(pedido(600, 2))
console.log(pedido(700, 2))