let pokemonRepository = (function () {

    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function loadList() {
        return fetch(apiURL)
        .then(response => response.json())
        .then((json) => {
            json.results.forEach((item) => {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                }
                add(pokemon)
                // console.log(pokemon)
            })
        }).catch(error => console.error(error))
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let listSelector = document.querySelector('ul');
        let listItem = document.createElement('li');
        let buttonElement = document.createElement('button');
        buttonElement.innerText = pokemon.name.toUpperCase();
        listItem.appendChild(buttonElement);
        listSelector.appendChild(listItem);
        // call function to add listener
        addListener(buttonElement, pokemon);
    }

    function addListener(buttonElement, pokemon) {
        buttonElement.addEventListener('click', () => showDetails(pokemon));
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            console.log(pokemon);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then((response) => {
            return response.json();
        }).then((details) => {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch((error) => {
            console.error(error)
        })
    }

    function add(object) {
        if ((typeof object === 'object')) {
            object = {
                name: object.name,
                detailsUrl: object.detailsUrl
            }
            pokemonList.push(object);
        } else {
            return "Incorrect Format";
        };
    }


    return {
        getAll: getAll,
        addListItem: addListItem,
        add: add,
        showDetails: showDetails,
        addListener: addListener,
        loadList: loadList,
        loadDetails: loadDetails,
    };

})();

// console.log(pokemonRepository.loadList());

pokemonRepository.loadList().then(() => {
    pokemonRepository.getAll().forEach((pokemon) => {
        pokemonRepository.addListItem(pokemon);
    });
});



// ************************** OLD CODE BELOW ************************** 