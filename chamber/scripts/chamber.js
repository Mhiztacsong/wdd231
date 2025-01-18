document.addEventListener("DOMContentLoaded", async () => {
    const memberList = document.getElementById("member-list");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
  
    // Fetch JSON data
    const response = await fetch("data/members.json");
    const members = await response.json();
  
    // Render members
    const renderMembers = (layout) => {
      if (layout === "grid") {
        memberList.className = "grid";
        memberList.innerHTML = members
          .map(
            (member) => `
              <div class="member-card">
                <img src="${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
              </div>
            `
          )
          .join("");
      } else if (layout === "list") {
        memberList.className = "list";
        memberList.innerHTML = `
          <table class="member-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              ${members
                .map(
                  (member) => `
                  <tr>
                    <td>
                      ${member.name}<br>
                      <small>Level: ${member.membershipLevel}</small>
                    </td>
                    <td>${member.address}</td>
                    <td>${member.phone}</td>
                    <td><a href="${member.website}" target="_blank">${member.website}</a></td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        `;
      }
    };

    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");

    });
  
    // Toggle layouts
    gridViewButton.addEventListener("click", () => renderMembers("grid"));
    listViewButton.addEventListener("click", () => renderMembers("list"));
  
    // Initial render
    renderMembers("grid");
  
    // Footer updates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});