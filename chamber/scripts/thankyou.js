// Get the current URL
const currentUrl = window.location.href;

// Extract query parameters after "?"
const urlParts = currentUrl.split('?');
const queryParams = urlParts[1] || ""; // Get query string or empty string if not present

// Select the unordered list where the details will be displayed
const showInfo = document.querySelector("#details-list");

// Split the query string into key-value pairs
const formData = queryParams.split('&');

// Loop through the key-value pairs and add them to the list
formData.forEach(item => {
    let pair = item.split("="); // Split into key and value
    let key = decodeURIComponent(pair[0]); // Decode key
    let value = decodeURIComponent(pair[1] || ""); // Decode value

    // Format key: replace underscores with spaces and capitalize words
    key = key.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase());

    // Create a list item and append it to the UL
    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    showInfo.appendChild(listItem);
});