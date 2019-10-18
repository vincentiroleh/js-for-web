// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

// Prepare request
let apiRequest = new XMLHttpRequest();


/* 
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
*/
cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const chosenCity = cityInput.value;

    apiRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`);
    apiRequest.send();
});

/*
 * Handling data from a GET request
*/
apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            reportSection.textContent = `City not found!`;
        }
        else {
            const response = JSON.parse(apiRequest.response);
            reportSection.textContent =
                `The weather in ${response.name} is 
            ${response.weather[0].main} 
            with ${response.weather[0].description}`;
        }
    }
};
