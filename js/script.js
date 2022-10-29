let pokemonRepository = (function () {
    let pokemonList = [
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

    // returns pokemon list of objects
    function getAll() {
        return pokemonList;
    }

    // adds new object to pokemonList and checks type
    function add(item) {
        if ((typeof item === "object") && (Object.keys(item) === 'name', 'height', 'types')) {
            pokemonList.push(item);
        } else {
            return "Incorrect Format";
        };
    }

    return {
        pokemonList: pokemonList,
        getAll: getAll,
        add: add,
    };

})();

function printArrayDetails2(list) {
    pokemonRepository.getAll().forEach(pokemon => {
        if (pokemon.height > 2) {
            document.write(
                "Name: <strong>" + pokemon.name + "</strong><br>",
                "Height: " + pokemon.height + "m. Wow, that's big!<br>",
                "Types: " + pokemon.types + "<br>",
                "<br>"
            )
        } else {
            document.write(
                "Name: <strong>" + pokemon.name + "</strong><br>",
                "Height: " + pokemon.height + "m.<br>",
                "Types: " + pokemon.types + "<br>",
                "<br>"
            )
        }
    });
}

pokemonRepository.add({name: 'Ninetales', height: 1.1, types: ['Fire']});

pokemonRepository.add({height: 5, nae: 'Grey', type: ['yellow']});
// not sure why its still adding this ^^^ to the list. Incorrect keys returning "undefined" makes sense. But I thought all three keys would need to match for it to add anything.

printArrayDetails2(pokemonRepository.getAll());








// ************************** OLD CODE BELOW ************************** 

// pokemonList = [
//     {
//         name: 'Bulbasaur', 
//         height: 0.7, 
//         types: ['Grass', 'Poison']
//     },
//     {
//         name: 'Charmander', 
//         height: 0.6, 
//         types: ['Fire']
//     },
//     {
//         name: 'Squirtle', 
//         height: 0.5, 
//         types: ['Water']
//     },
//     {
//         name: 'Arcanine', 
//         height: 1.9, 
//         types: ['Fire']
//     },
//     {
//         name: 'Gengar', 
//         height: 1.5, 
//         types: ['Ghost', 'Poison']
//     },
//     {
//         name: 'Gyarados', 
//         height: 6.5, 
//         types: ['Water', 'Flying']
//     },
//     {
//         name: 'Zapdos', 
//         height: 1.6, 
//         types: ['Electric', 'Flying']
//     },
// ];

// function printArrayDetails(list) {
//     for (let i = 0; i < list.length; i++) {

//         // Writes a special message if the pokemon's height is greater than 2m
//         if (list[i].height > 2) {
//             document.write(
//                 `The height of ${list[i].name} is ${list[i].height}m. WOW, that's big!`
//                 );
//             document.write("<br>");
//             document.write("<br>");
    
//         // Writes the height of the pokemon and their name
//         } else {
//             document.write(
//                 `The height of ${list[i].name} is ${list[i].height}m.`
//                 );
//             document.write("<br>");
//             document.write("<br>");
//         } 
    
//     }
// }

// printArrayDetails(pokemonList);
