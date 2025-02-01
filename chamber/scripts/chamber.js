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

// Home page javascript code
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const todayForecast = document.querySelector('#today');
const mondayForecast = document.querySelector('#monday');
const tuesdayForecast = document.querySelector('#tuesday');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.49&lon=3.35&units=imperial&appid=dca1f7879054202b56dab2017c2f044c';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.49&lon=3.35&units=imperial&appid=dca1f7879054202b56dab2017c2f044c';

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data)

      } else {
          throw Error(await response.text());
      }

  } catch (error) {
      console.log(error);
  }
}

async function fetchForcastWeather() {
  try {
      const forecastResponse = await fetch(forecastUrl);
      if (forecastResponse.ok) {
          const forecastData = await forecastResponse.json();
          displayForecast(forecastData);
      } else {
          throw Error(await forecastResponse.text());
      }
  } catch (error) {
    console.log(error);
  }
}

function formatTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true});
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    description.innerHTML = data.weather[0].description;
    high.innerHTML = `${data.main.temp_max}&deg;`;
    low.innerHTML = `${data.main.temp_min}&deg;`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = formatTime(data.sys.sunrise);
    sunset.innerHTML = formatTime(data.sys.sunset);
    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

function displayForecast(data) {
  const currentDate = new Date().toISOString().split('T')[0]; // Today's date (YYYY-MM-DD)
  const mondayDate = getNextWeekdayDate(1); // Next Monday
  const tuesdayDate = getNextWeekdayDate(2); // Next Tuesday

  // Get today's forecast
  const todayTemp = getAverageTempForDate(data, currentDate);
  todayForecast.textContent = `${todayTemp}°F`;

  // Get Monday's forecast
  const mondayTemp = getAverageTempForDate(data, mondayDate);
  mondayForecast.textContent = `${mondayTemp}°F`;

  // Get Tuesday's forecast
  const tuesdayTemp = getAverageTempForDate(data, tuesdayDate);
  tuesdayForecast.textContent = `${tuesdayTemp}°F`;
}

function getNextWeekdayDate(dayOfWeek) {
  const date = new Date();
  const currentDay = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const daysUntilNext = (dayOfWeek + 7 - currentDay) % 7 || 7;
  date.setDate(date.getDate() + daysUntilNext);
  return date.toISOString().split('T')[0]; // Return YYYY-MM-DD
}

function getAverageTempForDate(data, targetDate) {
  const dayData = data.list.filter(entry => entry.dt_txt.startsWith(targetDate));
  if (dayData.length > 0) {
      const avgTemp = dayData.reduce((sum, entry) => sum + entry.main.temp, 0) / dayData.length;
      return avgTemp.toFixed(1); // Return 1 decimal place
  }
  return 'No data';
}

apiFetch();
fetchForcastWeather();


// join page scripts
document.getElementById("timestamp").value = new Date().toISOString();

// function openModal(id) {
//     document.getElementById(id).style.display = "block";
// }

// function closeModal(id) {
//     document.getElementById(id).style.display = "none";
// }


