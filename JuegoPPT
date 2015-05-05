var usuarioElige = prompt("¿Piedra, papel o tijera?"); 
var computadoraElige = Math.random();
if(computadoraElige < 0.34){
    computadoraElige = "piedra";
    } else if (computadoraElige <= 0.67){
        computadoraElige = "papel";
        } else{
            computadoraElige = "tijera";
            }
var comparar = function(usuarioElige, computadoraElige) {
    if(usuarioElige === computadoraElige) {
        return "¡Es un empate!";
    }
    if (usuarioElige == "piedra") {
         if (computadoraElige == "tijera") {
             return "piedra gana";
         } else {
             return "papel gana";
         }
    }
    if (usuarioElige == "papel") {
         if (computadoraElige == "piedra") {
             return "papel gana";
         } else {
             return "tijera gana";
         }
    }
    if (usuarioElige == "tijera") {
         if (computadoraElige == "piedra") {
             return "piedra gana";
         } else {
             return "tijera gana";
         }
    }
};
