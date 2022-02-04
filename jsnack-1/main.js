const biciclette = [

    {nome: 'wilier', peso: 8},

    {nome: 'cannondale', peso: 10},

    {nome: 'trek', peso: 6},

    {nome: 'ava', peso: 13},

];

let {nome, peso} = biciclette[0];



for (let i = 0; i < biciclette.lenght; i++) {

    if (peso < biciclette[i].peso) {

        peso = biciclette[i].peso;
        nome = biciclette[i].nome;
    }

}

console.log(nome, peso);
document.getElementById('section').innerHTML = `La bicicletta dal minor peso è ${nome} con un peso di ${peso}`;