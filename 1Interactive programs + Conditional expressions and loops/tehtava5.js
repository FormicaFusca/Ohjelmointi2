let vuosi = parseInt(prompt("Enter a year:"));

let result;

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    result = vuosi + " is a leap year.";
} else {
    result = vuosi + " is not a leap year.";
}

document.getElementById("result").innerHTML = result;