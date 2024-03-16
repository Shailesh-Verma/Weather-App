const apiKey = "f6710383141699b2d7a831208400a0d0";

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);

        cityName.innerHTML = city;
        feels_like.innerHTML = data.main.feels_like;
        sunrise.innerHTML = data.sys.sunrise;
        sunset.innerHTML = data.sys.sunset;
        humidity.innerHTML = data.main.humidity;
        humidity2.innerHTML = data.main.humidity;
        temp.innerHTML = data.main.temp;
        temp2.innerHTML = data.main.temp;
        temp_max.innerHTML = data.main.temp_max;
        temp_min.innerHTML = data.main.temp_min;
        deg.innerHTML = data.wind.deg;
        speed.innerHTML = data.wind.speed;
        speed2.innerHTML = data.wind.speed;
        visibility.innerHTML = data.visibility;
        main.innerHTML = data.weather[0].main;
    } catch (err) {
        console.error(err);
    }
};

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    await getWeather(city.value);
});

getWeather("Delhi");
