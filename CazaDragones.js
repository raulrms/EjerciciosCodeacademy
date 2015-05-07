var atacar = true;
var vosAcertas = Math.floor(Math.random() * 2);
var lastimaEsteRound = Math.floor(Math.random()*5 + 1);

perdidaTotal=0;

while(atacar) {
    if (vosAcertas) {
        console.log("¡Vos acertás!");
        perdidaTotal += lastimaEsteRound;
        
        if (perdidaTotal >= 4) {
            console.log("¡Ganaste!");
            atacar = false;
        } else {
            vosAcertas = Math.floor(Math.random() * 2);
        }       
    } else {
        console.log("¡Fallaste!");
    }
    atacar = false;
}
