fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&lang=es&appid=e62f013e2a26c772b86bd87c928be40c")
.then(response=> response.json())
.then(data=> {
    console.log(data);

    //------------------------------------------ Temperatura ------------------------------------------//
    $(".temperatura").append(`<p class="temp-text">Actual= ${Math.trunc(data.main.temp)}°C</p>`);
    $(".temperatura").append(`<p class="temp-text">Maxima= ${Math.trunc(data.main.temp_max)}°C</p>`);
    $(".temperatura").append(`<p class="temp-text">Minima= ${Math.trunc(data.main.temp_min)}°C</p>`);


    //------------------------------------------ Estado ------------------------------------------//
    let iconId = data.weather[0].main;
    switch(iconId){
        case "Clear":
            $("#iconoAnimado").attr("src","../icons/day.svg")
            $(".estado").append(`<p class="infoEstado">Cielo Despejado</p>`)
            break;
        case "Drizzle":
            $("#iconoAnimado").attr("src","../icons/rainy-2.svg")
            $(".estado").append(`<p class="infoEstado">Lluvia</p>`)
            break;
        case "Thunderstorm":
            $("#iconoAnimado").attr("src","../icons/thunder.svg")
            $(".estado").append(`<p class="infoEstado">Tormenta</p>`)
            break;
        case "Rain":
            $("#iconoAnimado").attr("src","../icons/rainy-7.svg")
            $(".estado").append(`<p class="infoEstado">Llovizna</p>`)
            break;
        case "Clouds":
            $("#iconoAnimado").attr("src","../icons/cloudy-day-1.svg")
            $(".estado").append(`<p class="infoEstado">Nublado</p>`)
            break;
        default:
            $("#iconoAnimado").attr("src","../icons/cloudy-day-1.svg")
            $(".estado").append(`<p class="infoEstado">Nublado</p>`)
    }
    
})