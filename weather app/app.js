let cityInput = document.querySelector('#city');
let searchBtn = document.querySelector('#search');
let cityName = document.querySelector('.city-name'); 
let temperature = document.querySelector('.temp'); 
let latitude = document.querySelector('.lat');
let longtitude = document.querySelector('.long');
let description = document.querySelector('.desc'); 
let country = document.querySelector('.country')
let result = document.querySelector('.weather-result-container'); 


searchBtn.addEventListener('click', ()=>{
    let api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPid=a668f97e2d064886c974803e14f2290e&units=metric`)
    api.then(result => result.json())
        .then(data=> {
            console.log(data)
            result.classList.toggle('weather-result-container-toggle')
            cityName.textContent = data['name']; 
            temperature.textContent = `Temperature: ${data['main']['temp']}`;
            description.textContent = `Description: ${data['weather'][0]['description']}`
            longtitude.textContent = `Longtitude: ${data['coord']['lon']}`
            latitude.textContent = `Latitude: ${data['coord']['lat']}`
            country.textContent = `Country: ${data['sys']['country']}`
        })
       
     
    cityInput.value = ''

}); 
