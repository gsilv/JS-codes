function som(valor){
    resulta = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(resulta)
    
}

som(0.1 + 0.2)