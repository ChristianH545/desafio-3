let contadorA = 0
let contadorB = 0
let contadorC = 0
let contadorD = 0
let entradaVoto

do {
    entradaVoto = prompt('Ingrese su Voto:')
    switch(entradaVoto) {
        case 'a': 
            contadorA = contadorA + 1
            alert('a votado por A. Gracias!')
        break
        case 'b':
            contadorB = contadorB + 1
            alert("a votado por b. Gracias!");
        break
        case 'c':
            contadorC = contadorC + 1
            alert("a votado por C. Gracias!");
        break
        case 'd':
            contadorD = contadorD + 1
            alert("a votado por D. Gracias!");
        break
    }
} while(entradaVoto != 'esc')

console.log('Votos para A: ' + contadorA)
console.log('Votos para B: ' + contadorB)
console.log('Votos para C: ' + contadorC)
console.log('Votos para D: ' + contadorD)

if(contadorA > contadorB && contadorA > contadorC && contadorA > contadorD){
console.log( `ganador es A por un total de: ${contadorA}`)
}
else if(contadorB > contadorA && contadorB > contadorC && contadorB > contadorD){

  console.log(`ganador es B por un total de:${contadorB}`);
}else if(contadorC > contadorA && contadorC > contadorB && contadorC > contadorD){

  console.log(`ganador es C por un total de:${contadorC}`);

}else{

  console.log(`ganador es C por un total de:${contadorC}`);

}