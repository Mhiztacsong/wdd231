document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Async function to fetch and display cards dynamically
async function fetchAndDisplayCards() {
    try {
        const response = await fetch("data/discover.json");
        if (!response.ok) {
            throw new Error("Failed to load JSON file");
        }

        const data = await response.json();
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML = "";

        data.forEach((item, index) => {
            const card = document.createElement("article");
            card.classList.add("card", `card${index + 1}`);
            card.innerHTML = `
                <h2>${item.title}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.alt}" loading="lazy">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchAndDisplayCards);