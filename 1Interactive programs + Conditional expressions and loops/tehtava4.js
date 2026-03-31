let nimi = prompt("Enter student's name:");

let houseNumber = Math.floor(Math.random() * 4);

let house;

if (houseNumber === 0) {
    house = "Gryffindor";
} else if (houseNumber === 1) {
    house = "Slytherin";
} else if (houseNumber === 2) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.getElementById("vastaus").innerHTML = nimi + ", you are " + house + ".";