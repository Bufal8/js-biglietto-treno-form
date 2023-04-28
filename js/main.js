// programma biglietto treno
// il programma dovrà erogare come output il prezzo di un biglietto del trenomassimo 2 valori decimali() il cuo costo va in base ai km percorso (0.21€ / km) tenendo conto dello sconto under 18 (-20%) e dello sconto over 65 (-40%)



// variabili globali
let userChilometri, userEta, userTotaleParziale, userTotale, messaggio;
const euroPerChilometro = 0.21;







// calcolare lo sconto
// let arrotondamento = userTotale.toFixed(2);
function calcola(){
    
    // immettere i chilometri da percorrere
    userChilometri = document.getElementById("chilometri-utente").value;
    
    console.log("Chilometri inseriti dall'utente: " + userChilometri);
    
    
    
    
    // immettere l'età del passeggero
    
    userEta = document.getElementById("eta-utente").value;

    console.log("Età inserita dall'utente: " + userEta);

    // moltiplicare i chilometri da percorrere per la costante 0.21€
    userTotaleParziale = userChilometri * euroPerChilometro;

    // se età < 18 anni sconto 20%
    if(userEta < 18){
        userTotale = userTotaleParziale - (userTotaleParziale * 20 / 100);
        messaggio = `Giovanotto il prezzo del tuo biglietto è ${userTotale.toFixed(2)}€`;
    }

    // se età > 65 anni sconto 40%
    else if(userEta >= 65){
        userTotale = userTotaleParziale - (userTotaleParziale * 40 / 100);
        messaggio = `Nonno il prezzo del tuo biglietto è ${userTotale.toFixed(2)}€`;
    }

    // età compresa tra 18 e 64 senza sconto
    else{
        userTotale = userTotaleParziale;
        messaggio = `Il prezzo del tuo biglietto è ${userTotale.toFixed(2)}€`;
    }

    document.getElementById("mio_id").innerHTML = messaggio;
}