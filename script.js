let counter = 0;

function incremento() {
    counter++;
    document.getElementById("interfaccia").innerText = counter;
} 
function decremento() {
    if (counter != 0) {
        counter--;
        document.getElementById("interfaccia").innerText = counter;
    }
}