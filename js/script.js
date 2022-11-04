let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasaur', 
            height: 0.7, 
            types: ['Grass', 'Poison'],
            // testing functions
            details: 'Grass and poison type pokemon that precedes Ivysaur and Venusaur'
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

    function add(object) {
        if ((typeof object === 'object') && JSON.stringify(Object.keys(object).sort()) === JSON.stringify(['height', 'name', 'types'])) {
            pokemonList.push(object);
        } else {
            return "Incorrect Format";
        };
    }

    function addListItem(pokemon) {
        let listSelector = document.querySelector('ul');
        let listItem = document.createElement('li');
        let buttonElement = document.createElement('button');
        buttonElement.innerText = pokemon.name;
        buttonElement.classList.add(pokemon.types[0].toLowerCase());
        listItem.appendChild(buttonElement);
        listSelector.appendChild(listItem);
        // call function to add listener
        addListener(buttonElement, pokemon);
    }

    function addListener(buttonElement, pokemon) {
        buttonElement.addEventListener('click', () => showDetails(pokemon));
    }

    // not working as intended
    function showDetails(pokemon) {
        // let parent = document.querySelector('.pokemon-list')
        // let detailSpace = document.createElement('p');
        // detailSpace.innerText = pokemon.types;
        // parent.appendChild(detailSpace);
        // detailSpace.classList.add('hidden');
        // detailSpace.classList.toggle('is-visible');
        console.log(pokemon);
    };

    return {
        getAll: getAll,
        addListItem: addListItem,
        add: add,
        showDetails: showDetails,
        addListener: addListener
    };

})();

function printArrayDetails(list) {
    list.forEach(pokemon => {
        pokemonRepository.addListItem(pokemon);
    });
}

pokemonRepository.add({name: 'Ninetales', height: 1.1, types: ['Fire']});
printArrayDetails(pokemonRepository.getAll());

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
// console.log(testList[0].types[0]);
// let headerArea = document.querySelector('header');
// let button = document.createElement('button');
// button.innerText = testList[0].name;
// headerArea.appendChild(button);
// button.classList.add(testList[0].types[1].toLowerCase());

// testList.forEach(pokemon => {
// console.log(pokemon.types);
// })

// testList.forEach(function(item){
//     console.log(Object.keys(item))
// });


// let header = document.querySelector('header')
// let button = document.createElement('button');
// button.innerText = 'Click Me';
// header.appendChild(button);

///////// CHALLENGES BELOW //////////

// add internal button & sibling button to header div
// let header = document.querySelector('header');
// let button2 = document.createElement('button');
// button2.innerText = 'Sibling Button';
// header.appendChild(button2);

// let headerDiv = document.querySelector('header > div');
// let divButton = document.createElement('button');
// divButton.innerText = 'Header Inside Div Button';
// headerDiv.appendChild(divButton);

// // add paragraph to center main div
// let middleDiv = document.querySelector('main :nth-child(2)');
// let middleDivPara = document.createElement('p');
// middleDivPara.innerText = 'Paragraph inside middle div';
// middleDiv.appendChild(middleDivPara);


// // remove text from footer div
// // let elementToRemove = document.querySelector('footer > .footer');
// // elementToRemove.parentElement.removeChild(elementToRemove);
// // footerDiv.innerText = '';

// let elementToEdit = document.querySelector('main :nth-child(3)');
// elementToEdit.classList.remove('main');
// elementToEdit.classList.add('footer');
