const resources = [
    { id: 1, name: "Mental Health America", url: "https://www.mhanational.org/" },
    { id: 2, name: "National Alliance on Mental Illness", url: "https://nami.org/" },
    { id: 3, name: "Substance Abuse and Mental Health Services Administration", url: "https://www.samhsa.gov/" },
];

// Load resources into the resources page
function loadResources() {
    const resourceList = document.getElementById('resource-list');
    resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${resource.url}" target="_blank">${resource.name}</a>`;
        resourceList.appendChild(li);
    });
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Store submission in localStorage
            const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
            submissions.push({ name, email, message });
            localStorage.setItem('submissions', JSON.stringify(submissions));
        });
    }
});

// Load resources on the resources page
if (document.getElementById('resource-list')) {
    loadResources();
}