// Global
let apiURLGen1 = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
let apiURLGen2 = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151';
let apiURLGen3 = 'https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251';
let apiURLGen4 = 'https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386';

// Main IIFE
let pokemonRepository = (function () {

  let pokemonList = [];

  function loadList(apiURL) {
    return fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          console.log('Success')
          return res.json()
        } else {
          console.error('Error')
        }
      }).then((json) => {
        json.results.forEach((result) => {
          let pokemon = {
            name: result.name,
            detailsUrl: result.url,
          }
          add(pokemon)
        })
      }).catch(e => console.error(e))
  }

  async function getID(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      const json = await response.json();
      return json.id;
    }
    catch(error) {
      console.error(`Could not get ID: ${error}`);
    }
  }

  // Add pokemon to pokemonList ------------------------------------------------
  function add(object) {
    if ((typeof object === 'object')) { 
      object = {
        name: object.name,
        detailsUrl: object.detailsUrl,
        pokeID: getID(object.detailsUrl)
      }
      pokemonList.push(object);
    } else {
      return 'Incorrect Format';
    }
  }

  // Get List of all Pokemon ---------------------------------------------------
  function getAll() {
    return pokemonList;
  }

  // Add pokemon to page -------------------------------------------------------
  async function addListItem(pokemon) {
    let listSelector = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    // console.log(pokemon.pokeID) // PROMISE PENDING HERE
    // let pokeNumber = document.createElement('span');
    // pokeNumber.classList.add('pokeNumber');
    // pokeNumber.innerText = pokemon.pokeID;

    let buttonElement = document.createElement('button');
    buttonElement.classList.add('btn');
    buttonElement.classList.add('btn-info');
    buttonElement.setAttribute('data-bs-target', '#modal');
    buttonElement.setAttribute('data-bs-toggle', 'modal');
    buttonElement.innerText = pokemon.name.toUpperCase();

    let idSpan = document.createElement('span');
    idSpan.classList.add('float-right')
    pokeID = await pokemon.pokeID.then((res) => res);
    idSpan.innerText = "#" + pokeID;
    buttonElement.appendChild(idSpan);


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
      .then(() => showModal(pokemon.name, pokemon.height, pokemon.imageUrl, pokemon.types, pokemon.pokeID))
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

  // Show Modal ****************************************************************
  function showModal(name, height, imgUrl, types, id) {
    // pokemon name
    let pokemonTitleName = document.getElementById('pokemon-name');
    pokemonTitleName.innerText = name.toUpperCase().trim();

    // pokemon height
    let pokemonHeight = document.querySelector('.pokemon-height');
    pokemonHeight.innerText = 'Height: ' + height;

    // pokemon image
    let pokemonImage = document.querySelector('.pokemon-img');
    pokemonImage.setAttribute('src', imgUrl);

    // pokemon types
    let pokemonTypes = document.querySelector('.modal-types');
    let typesList = [];
    types.forEach((type) => typesList.push(type.type.name));
    pokemonTypes.innerText = 'Type(s): ' + typesList;

  }

  // Event Listeners -----------------------------------------------------------
  let gen1Button = document.querySelector('.link-1');
  let gen2Button = document.querySelector('.link-2');
  let gen3Button = document.querySelector('.link-3');
  let gen4Button = document.querySelector('.link-4');

  function clearContent() {
    pokemonList = [];
    document.querySelector('.pokemon-list').innerHTML = '';
  }

  function setHeader(number) {
    let headerText = document.querySelector('.title');
    headerText.innerText = 'GENERATION ' + number.toString();
  }

  function callLoad(url) {
    pokemonRepository.loadList(url).then(() => {
      pokemonRepository.getAll().forEach((pokemon) => {
        pokemonRepository.addListItem(pokemon);
      });
    });
  }

  function replaceContent(url, genNumber) {
    clearContent();
    setHeader(genNumber);
    callLoad(url);
  }

  gen1Button.addEventListener('click', () => {
    replaceContent(apiURLGen1, 1);
  })

  gen2Button.addEventListener('click', () => {
    replaceContent(apiURLGen2, 2);
  })

  gen3Button.addEventListener('click', () => {
    replaceContent(apiURLGen3, 3)
  })

  gen4Button.addEventListener('click', () => {
    replaceContent(apiURLGen4, 4)
  })

  // RETURN FUNCTIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  return {
    getAll: getAll,
    addListItem: addListItem,
    add: add,
    showDetails: showDetails,
    addListener: addListener,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };

})();

let headerText = document.querySelector('.title');
headerText.innerText = 'GENERATION 1';

pokemonRepository.loadList(apiURLGen1).then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});