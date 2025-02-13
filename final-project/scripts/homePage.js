async function fetchQuote() {
    try {
        // Fetch the JSON file containing quotes
        const response = await fetch('quotes.json'); // Modify this path if the JSON file is hosted elsewhere
        if (!response.ok) {
            throw new Error("Failed to fetch quotes");
        }

        const quotes = await response.json();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Display the quote and author on the page
        document.getElementById("mental-health-quote").textContent = `"${randomQuote.q}"`;
        document.getElementById("quote-author").textContent = - `${randomQuote.a}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("mental-health-quote").textContent = "Stay positive and be strong.";
        document.getElementById("quote-author").textContent = "- Unknown";
    }
}

document.addEventListener("DOMContentLoaded", fetchQuote);