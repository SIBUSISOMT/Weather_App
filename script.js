const app = document.querySelector('.weatherApp');
const temp = document.querySelector('.temp');
const date = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const name = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput= document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('#searchInput');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');
const container = document.querySelector('.container');
const submit = document.getElementById('submitButton');


let cityInput = "Nelspruit";

console.log(cities)
   cities.forEach((city) =>{
       city.addEventListener('click',(e)=>{
           cityInput = e.target.innerHTML;
           console.log(cityInput)
           fetchWeatherData(cityInput);
           app.style.opacity = "0";
       });
   });

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
        cityInput = search.value;
        fetchWeatherData();
        search.value = '';
        // app.style.opacity= "0";

    
    
});


function dayOfTheWeek(day, month, year)
{
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return weekday[new Date('${day}/${month/${year}').getDay()];

};
 async function fetchWeatherData(cityInput){
    
//  if (!cityInput || cityInput.trim() === "") {
//     alert("Please enter a valid city name.");
//     return;
//   }
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6cbc961dc4644bc885283113231406&q=${cityInput}`)
    const data = await response.json();
    console.log(data);

    temp.innerHTML = data.current.temp_c + "&#176;"
    conditionOutput.innerHTML = data.current.condition.text;
    name.innerHTML = data.location.name;
    
   

    date.innerHTML = data.location.localtime;
    timeOutput.innerHTML = data.location.name;
    const iconId =data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
    icon.src="./icons/" + iconId

    cloudOutput.innerHTML = data.current.cloud + "%";
    humidityOutput.innerHTML = data.current.humidity + "%";
    windOutput.innerHTML =  data.current.wind_kph + "km/h";

    let timeOfDay = "day";
    const code =  data.current.condition.code;
    if(! data.current.is_day){
        timeOfDay = "night";
    }
    if(code == 1000){
        app.style.backgroundImage = 'url(./Night-photos/${timeOfDay}/mountains.jpg)';
        btn.style.background = "#e5ba92";
        if(timeOfDay == "night"){
            btn.style.background = "#181e27";
        }
    }
    else if(
        code == 1003 ||
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1069 ||
        code == 1087 ||
        code == 1135 ||
        code == 1273 ||
        code == 1276 ||
        code == 1279 ||
        code == 1282 
    );
    {
        app.style.backgroundImage = 'url(./Night-photos/${timeOfDay}/dark clouds.jpg)';
        btn.style.background ='#fa6d1b';

        if(timeOfDay == "night"){
            btn.style.background = "#181e27";

        }
        else if(
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252 
        )
        {
             app.style.backgroundImage = 'url(./Day-photos/${timeOfDay}rainy.jpg)'; 
             btn.style.background = "#647d75";
             if(timeOfDay == "night"){
                btn.style.background = "#325c80";
             }
             else(app.style.backgroundImage = 'url(./Night-photos/${timeOfDay}snow.jpg)');
             btn.style.background = "#4d72aa";
             if(timeOfDay == "night"){
                btn.style.background = "#1b1b1b"
             }
        }
 
      app.style.opacity = "1";

    };
    
} 
fetchWeatherData(); 
app.style.opacity = "1";
 
    