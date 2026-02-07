window.onload = initAll;

function initAll() {
    // loop through the cell ids randomly assigning them numbers
    for(i=0; i<25; i++) {
        var newNumber = Math.floor(Math.random()*75) + 1;

        document.getElementById("sq-"+i).innerHTML = newNumber;
    }
}