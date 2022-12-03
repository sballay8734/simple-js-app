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
    listItem.classList.add('list-group-item');

    let buttonElement = document.createElement('button');
    buttonElement.classList.add('btn');
    buttonElement.classList.add('btn-info');
    buttonElement.setAttribute('data-bs-target', '#modal');
    buttonElement.setAttribute('data-bs-toggle', 'modal');
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
      .then(() => showModal(pokemon.name, pokemon.height, pokemon.imageUrl, pokemon.types))
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

  // Global

  function showModal(name, height, imgUrl, types) {

    // pokemon name
    let pokemonTitleName = document.getElementById('pokemon-name');
    pokemonTitleName.innerText = name.toUpperCase().trim();

    // pokemon height
    let pokemonHeight = document.querySelector('.pokemon-height');
    pokemonHeight.innerText = "Height: "+ height;
    
    // pokemon image
    let pokemonImage = document.querySelector('.pokemon-img');
    pokemonImage.setAttribute("src", imgUrl);

    // pokemon types
    let pokemonTypes = document.querySelector('.modal-types');
    typesList = [];
    types.forEach((type) => typesList.push(type.type.name));
    pokemonTypes.innerText = "Type(s): " + typesList;

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
    showModal: showModal
  };

})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});