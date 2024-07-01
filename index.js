const prompt = require("prompt-sync")();

const triangulos = [];

while (true) {
    let a = prompt("Lado A: ");
    let b = prompt("Lado B: ");
    let c = prompt("Lado C: ");

    if (a > 0 && b > 0 && c > 0 && a + b > c 
        && b + c > a && a + c > b) {


            let tipo;

            if (a == b && b == c) {
                tipo = "Equilatero";
            }
        }
    
}