let pokemonRepository = (function () {

  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList() {
    return fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          console.log("Success")
          return res.json()
        } else {
          console.error("Error")
        }
      }).then((json) => {
        json.results.forEach((result) => {
          let pokemon = {
            name: result.name,
            detailsUrl: result.url
          }
          add(pokemon)
          // console.log(pokemon.name)
        })
      }).catch(e => console.error(e))
  }

  // Add pokemon to pokemonList ------------------------------------------------
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

  // Get List of all Pokemon ---------------------------------------------------
  function getAll() {
    return pokemonList;
  }

  // Add pokemon to page -------------------------------------------------------
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

  // Add Event Listener To Each List Element -----------------------------------
  function addListener(buttonElement, pokemon) {
    buttonElement.addEventListener('click', () => showDetails(pokemon));
  }

  // Show Details of Each Pokemon and Show Modal -------------------------------
  function showDetails(pokemon) {
    loadDetails(pokemon)
      .then(showModal(pokemon.name, pokemon.height, pokemon.imageUrl))
  }

  // Loads Each Pokemon then Fed Into Show Modal Function ----------------------
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(response => response.json())
      .then((json) => {
        item.imageUrl = json.sprites.front_default;
        item.height = json.height;
        item.types = json.types;
      }).catch((error) => {
        console.error(error)
      })
  }

  // Show Modal ----------------------------------------------------------------
  function showModal(name, height, img) {
    let modalContainer = document.querySelector('#modal-container');

    // clear existing content
    modalContainer.innerHTML = '';

    // create content
    let modal = document.createElement('div');
    let


  }

  // return functions
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

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});