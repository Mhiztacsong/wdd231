document.addEventListener("DOMContentLoaded", () => {
    const tipsContainer = document.querySelector(".tips");

    fetch("tips.json")
        .then(response => response.json())
        .then(tips => {
            tips.forEach(tip => {
                const section = document.createElement("section");
                section.classList.add("section");

                section.innerHTML = `
                    <h2>${tip.title}</h2>
                    <img src="${tip.image}" alt="Wellness Tip" loading="lazy" width="400" height="250">
                    <p><strong>Description:</strong> ${tip.description}</p>
                    <p><strong>Quick Tip:</strong> ${tip.quickTip}</p>
                `;

                tipsContainer.appendChild(section);
            });
        })
        .catch(error => console.error("Error loading tips:", error));
});