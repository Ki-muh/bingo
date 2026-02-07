window.onload = initAll;

function initAll() {
    // loop through the cell ids randomly assigning them numbers
    for(i=0; i<25; i++) {
        var newNumber = Math.floor(Math.random()*75) + 1;

        document.getElementById("sq-"+i).innerHTML = newNumber;
    }
}

// Add event listener where I manipulate all cells except the FREE cell
window.addEventListener("load", function() {
    // select all the td cells but the #free
    const cells = this.document.querySelectorAll("td:not(#free)");

    // of all selected cells, add a new element called canvas and append it
    cells.forEach(cell => {
        const canvas = this.document.createElement("canvas");
        canvas.className = "scratch";
        cell.appendChild(canvas);
    })
})