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

    function add2(object) {
        if ((typeof object === 'object') && JSON.stringify(Object.keys(object).sort()) === JSON.stringify(['height', 'name', 'types'])) {
            pokemonList.push(object);
        } else {
            return "Incorrect Format";
        };
    }

    return {
        getAll: getAll,
        add2: add2
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

pokemonRepository.add2({name: 'Ninetales', height: 1.1, types: ['Fire']});
// Works NOW!

pokemonRepository.add2({height: 5, nae: 'Grey', type: ['yellow']});
// WORKS NOW!

console.log(pokemonRepository.getAll());

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
// let testList = [
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

// testList.forEach(function(item){
//     console.log(Object.keys(item))
// });


// let header = document.querySelector('header')
// let button = document.createElement('button');
// button.innerText = 'Click Me';
// header.appendChild(button);

///////// CHALLENGES BELOW //////////

// add button to header div



// add paragraph to center main div



// remove text from footer div



// let testObject = {
//     name: 'Ninetales',
//     height: 1.1,
//     types: ['Fire']
// };

// let compareList = JSON.stringify(["height","name","types"]);
// let stringifyList = JSON.stringify(Object.keys(testObject).sort());

// console.log(compareList);
// console.log(stringifyList);
// console.log(compareList === stringifyList);