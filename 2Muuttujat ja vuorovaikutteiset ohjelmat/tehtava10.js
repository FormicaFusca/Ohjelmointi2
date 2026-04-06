function henkilot(name){
    this.name = name
    this.votes = 0
};

let kertaa = parseInt(prompt("Number of candidate: "));
let num = 0
let lista = []

while (kertaa !== num) {
    num ++
    nimi = prompt(`Name for candidate ${num}: `);
    lista.push(new henkilot(nimi)); 
}

let aanestaja = parseInt(prompt("Number of voters: "));

for(i = 0; i < aanestaja; i++){
    aani = prompt("Who will you vote for?: ");

    for(j = 0; j < lista.length; j++){
        if (aani === lista[j].name){
            lista[j].votes++
        }
    }

}

lista.sort((a, b) => {
   return b.votes - a.votes;
});
console.log(`The winner is ${lista[0].name} with ${lista[0].votes} votes.`);
console.log("results:");
for (let i = 0; i < lista.length; i++) {
    console.log(`${lista[i].name}: ${lista[i].votes} votes`);
}