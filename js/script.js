pokemonList = [
    {
        name: 'Bulbasaur', 
        height: 0.7, 
        types: ['Grass', 'Poison']
    },
    {
        name: 'Charmander', 
        height: 0.6, 
        types: ['Fire']
    },
    {
        name: 'Squirtle', 
        height: 0.5, 
        types: ['Water']
    },
    {
        name: 'Arcanine', 
        height: 1.9, 
        types: ['Fire']
    },
    {
        name: 'Gengar', 
        height: 1.5, 
        types: ['Ghost', 'Poison']
    },
    {
        name: 'Gyarados', 
        height: 6.5, 
        types: ['Water', 'Flying']
    },
    {
        name: 'Zapdos', 
        height: 1.6, 
        types: ['Electric', 'Flying']
    },
];

for (let i = 0; i < pokemonList.length; i++) {
    // console.log(pokemonList[i].name);
    document.write(
        `The height of ${pokemonList[i].name} is ${pokemonList[i].height}m.`
        );
    document.write("<br>");
}