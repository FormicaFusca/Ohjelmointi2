let num1 = parseInt(prompt("Anna ensimmäinen luku:"));
let num2 = parseInt(prompt("Anna toinen luku:"));
let num3 = parseInt(prompt("Anna kolmas luku:"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.getElementById("summa").innerHTML = 'Lukujen summa ' + num1 + ' + ' + num2 + ' + '+ num3 + ' = ' + sum;
document.getElementById('tulo').innerHTML = 'Lukuje tulo ' + num1 + ' * ' + num2 + ' * '+ num3 + ' = ' + product;
document.getElementById('avg').innerHTML = 'Lukuje keskiarvo ' + num1 + ' + ' + num2 + ' + '+ num3 + ' / 3 = ' + average;