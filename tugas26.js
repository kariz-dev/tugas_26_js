/* Tugas 26 Javascript */
// Muhammad Rizwan

function tugasDuapuluhEnam(){
    var bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    for(i=0; i<bilangan.length; i++) {
        if(isFinite(bilangan) == true) {
            console.log("Angka", bilangan[i], "Is Infinity");
        }else {
            console.log("Angka", bilangan[i], "Is NOT Infinity");
        }
    }
}

tugasDuapuluhEnam();