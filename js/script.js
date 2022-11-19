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
  let modalContainer = document.querySelector('#modal-container');

  function showModal(name, height, imgUrl, types) {

    // clear existing content
    modalContainer.innerHTML = '';

    // create content (modal)
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // create content (goes inside modal)
    let closeModalButton = document.createElement('button');
    closeModalButton.innerText = 'Close';
    closeModalButton.classList.add('close-modal');
    closeModalButton.addEventListener('click', closeModal);

    let pokemonTitleName = document.createElement('h1');
    pokemonTitleName.innerText = name.toUpperCase().trim();
    pokemonTitleName.classList.add('pokemon-name');

    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = "Height: "+ height;
    pokemonHeight.classList.add('pokemon-height');

    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    
    let pokemonImage = document.createElement('img');
    pokemonImage.setAttribute("src", imgUrl);
    pokemonImage.classList.add('pokemon-img');

    let pokemonTypes = document.createElement('p');
    typesList = [];
    types.forEach((type) => typesList.push(type.type.name));
    pokemonTypes.innerText = "Type(s): " + typesList;
    pokemonTypes.classList.add('modal-types');


    // append content
    modal.appendChild(closeModalButton);
    modal.appendChild(pokemonTitleName);
    modal.appendChild(pokemonHeight);
    imageContainer.appendChild(pokemonImage);
    modal.appendChild(imageContainer);
    modal.appendChild(pokemonTypes);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('modal-is-visible');
  }

  // Close Modal ---------------------------------------------------------------
  function closeModal() {
    modalContainer.classList.remove('modal-is-visible');
  }

  // Event listeners to close modal --------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  })

  window.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      closeModal();
    }
  })

  // return functions
  return {
    getAll: getAll,
    addListItem: addListItem,
    add: add,
    showDetails: showDetails,
    addListener: addListener,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    closeModal: closeModal
  };

})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});