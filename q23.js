function calcMedia(cod, nota1, nota2, nota3) {

    let mediaPond

    if (nota1 > nota2 && nota1 > nota3) {
        mediaPond = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
    } else if (nota2 > nota3) {
        mediaPond = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
    } else {
        mediaPond = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3)) / 10
    }

    const resul = mediaPond => {
        if (mediaPond >= 5 && mediaPond <= 10) {
            return 'Aprovado'
        } else {
            return 'Reprovado'
        }
    }

    console.log(resul(mediaPond), 'codigo: ' + cod, 'Nota 1: ' + nota1,
        'Nota 2: ' + nota2, 'Nota 3: ' + nota3, '\nMedia: ' + mediaPond)

}

calcMedia(1111, 4, 5, 6)
calcMedia(2222, 7, 4, 1)
calcMedia(3333, 5, 9, 2)
calcMedia(4444, 0, 5, 1)
