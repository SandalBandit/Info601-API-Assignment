// Game of Thrones API: https://thronesapi.com/
// Testing an API

    // Function to create character card
    function createCharacterCard(character) {
      var card = document.createElement('div');
      card.className = 'character-card';

      var image = document.createElement('img');
      image.src = character.imageUrl;
      image.alt = character.fullName;
      card.appendChild(image);

      var name = document.createElement('h2');
      name.textContent = character.fullName;
      card.appendChild(name);

      var title = document.createElement('h3');
      title.textContent = character.title;
      card.appendChild(title);

      var family = document.createElement('p');
      family.textContent = 'Family: ' + character.family;
      card.appendChild(family);

      return card;
    }

    // Function to render character
    function renderCharacter(character) {
      var characterContainer = document.getElementById('character-container');
      characterContainer.innerHTML = ''; // Clear previous result

      var characterCard = createCharacterCard(character);
      characterContainer.appendChild(characterCard);
    }

    // Function to fetch character data from API
    function fetchCharacter() {
      var characterId = document.getElementById('character-input').value;

      fetch('https://thronesapi.com/api/v2/Characters/' + characterId)
        .then(response => response.json())
        .then(data => renderCharacter(data));
    }