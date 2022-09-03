let cartaUno = parseInt(prompt("Bienvenido al instructor de blackjack. Ingrese el valor de su primera carta"));
let cartaDos = parseInt(prompt("ingrese el valor de su segunda carta"));
let cartaUnoDealer = parseInt(prompt("ingrese el valor de la primera carta del dealer"));
let cartaDosDealer = parseInt(prompt("ingrese el valor de la segunda carta del dealer"));

if(cartaUno<=12 && cartaDos<=12){
    alert("el valor de sus cartas son "+cartaUno +" y " +cartaDos);
}else{
    alert("ingrese un numero valido");
}
if(cartaUnoDealer<=12 && cartaDosDealer<=12){
    alert("el valor de las cartas del dealer son "+cartaUnoDealer +" y " +cartaDosDealer);
}else{
    alert("ingrese un numero valido");
}

const suma = (a,b) => a + b;
let cartasMano = suma(cartaUno, cartaDos)
    alert("sus cartas suman "+ cartasMano);
let cartasDealer = suma(cartaUnoDealer, cartaDosDealer)
    alert("las cartas del dealer suman "+cartasDealer)

let pedirCarta = parseInt(prompt("Ingrese el valor de la carta pedida. En caso de plantarse, ingrese 0"));
if (pedirCarta<=12){
alert("usted pidio "+pedirCarta);
}
else if (pedirCarta="0"){
    alert("usted se planto");
}

let pedirCartaDealer = parseInt(prompt("Ingrese el valor de la carta pedida por el dealer. En caso de que no haya pedido, ingrese 0"));
if (pedirCartaDealer<=12){
alert("el dealer pidio "+pedirCartaDealer);
}
else if (pedirCartaDealer="0"){
    alert("el dealer se planto");
}

let nuevoValorMano = suma(cartasMano, pedirCarta)

if (nuevoValorMano<=21){
    alert("sus cartas ahora suman "+nuevoValorMano)
}

let nuevoValorDealer = suma (cartasDealer, pedirCartaDealer)
if(nuevoValorDealer<=21){
    alert("las cartas del dealer son "+nuevoValorDealer);
}
else if(nuevoValorDealer>21){
    alert("el dealer suma mas de 21");
}
else{
    alert("las cartas del dealer no son validas");
}

const resta = (a,b) => a - b;
let ganador = resta(nuevoValorMano-nuevoValorDealer)
if (((nuevoValorMano>=nuevoValorDealer)&& (nuevoValorMano<21))|| (nuevoValorDealer>21)){
    alert("usted ha ganado");
}else if ((nuevoValorMano<nuevoValorDealer) || (nuevoValorMano>21)){
    alert("usted ha perdido")
}


