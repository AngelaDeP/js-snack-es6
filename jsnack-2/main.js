const squadreObject = [

    {nome: 'juve', punti: 0, falli: 0},

    {nome: 'milan', punti: 0, falli: 0},

    {nome: 'inter', punti: 0, falli: 0},

    {nome: 'roma', punti: 0, falli: 0},

];

for (let key in squadreObject) {

    squadreObject[key]['punti'] = randomNumber(1, 30);
    squadreObject[key]['falli'] = randomNumber(1, 20);

}

const totaleSquadre = [];

for (let key in squadreObject) {

    let {punti, falli} = squadreObject[key];
    totaleSquadre.push({
        punti: punti, falli: falli
    })
}
console.log(totaleSquadre);


function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

