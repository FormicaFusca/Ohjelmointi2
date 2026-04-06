// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered (not reverse sorted).
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.

let lista = [];
let kerta = 0;

while (kerta !== 5) {
    let num = parseInt(prompt("Anna luku: "));
    lista.push(num);
    kerta++;
    
}

for (let i = lista.length -1; i >= 0; i--) {
    console.log(lista[i]);
}
