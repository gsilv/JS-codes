function calcAltura(alturaA, alturaB, crescAnualA, crescAnualB) {
    if (alturaA > alturaB) {
        while (alturaA > alturaB) {
            alturaB += crescAnualB
        }
        return alturaB
    }

    else if (alturaA < alturaB) {
        while (alturaA < alturaB) {
            alturaA += crescAnualA
        }
        return alturaA
    }
}

calcAltura()