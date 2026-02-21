const form = document.querySelector("form");
const input = document.querySelector("input");
const main = document.getElementById("main");

const weatherapi = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = input.value.trim();
  if(city === "") return alert("Enter city name");

  const oldResult = document.querySelector(".resulted");
  if(oldResult) oldResult.remove();

  try{
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapi}&units=metric`
    );

    if(!response.ok) throw new Error("City not found");

    const data = await response.json();

    const {
      name,
      main:{temp,humidity},
      weather:[{id,description}]
    } = data;

    const report = document.createElement("div");
    report.className = "resulted";

    const cityEl = document.createElement("h1");
    cityEl.textContent = name;

    const tempEl = document.createElement("p");
    tempEl.className = "tempDisplay";
    tempEl.textContent = `${temp}°C`;

    const humidityEl = document.createElement("p");
    humidityEl.className = "humidityDisplay";
    humidityEl.textContent = `Humidity: ${humidity}%`;

    const descEl = document.createElement("p");
    descEl.className = "descDisplay";
    descEl.textContent = description;

    const emojiEl = document.createElement("p");
    emojiEl.className = "emojiDisplay";
    emojiEl.textContent = getEmoji(id);

    report.append(cityEl,tempEl,humidityEl,descEl,emojiEl);

    main.append(report);

  }catch(err){
    alert(err.message);
  }
});

function getEmoji(id){
  switch(true){
    case id>=200 && id<300: return "⛈️";
    case id>=300 && id<400: return "🌧️";
    case id>=500 && id<600: return "🌦️";
    case id>=600 && id<700: return "❄️";
    case id>=700 && id<800: return "🌀";
    case id===800: return "☀️";
    case id>=801: return "⛅";
    default: return "❓";
  }
}