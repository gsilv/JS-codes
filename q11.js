function verifAno(ano){
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verifAno(0))
console.log(verifAno(4))
console.log(verifAno(100))
console.log(verifAno(400))
console.log(verifAno(800))
console.log(verifAno(2020))
console.log(verifAno(2021))
console.log(verifAno(2024))
