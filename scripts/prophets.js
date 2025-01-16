const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetch and display the prophets' data
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

// Function to display the prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements for each prophet card
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDetails = document.createElement('p');
    let birthPlace = document.createElement('p')

    // Fill in the content for the elements
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDetails.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '250');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(birthDetails);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Append the card to the cards container
    cards.appendChild(card);
  });
};

// Initialize the function
getProphetData();