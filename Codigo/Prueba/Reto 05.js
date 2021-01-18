let L, PG = 3.5, TG, GA;

function calcularGanancia(L){
    TG = L/3.785
    GA = TG * PG
    return GA;
}
let leche = +prompt("Cuantos Litros de leche has producido");
console.log(`Su ganacia de hoy: ${calcularGanancia(leche)}`)