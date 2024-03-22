async function fetchWeatherData(cityName){
	let url=`http://api.openwhethermap.org/data/2.5/whether?q=$(cityName)&appid=abc6232`
	const response = await fetch(url)
	const data = await responce.json();
	let city=document.getElementById("city")
	city,innerHTML=data.name;
	let windSpeed=document.getElementById("wind_speed");
	windSpeed.innerHTML=data.wind.speed+"km/hr";
	let humidity=document.getElementById("humidity");
	humidity.innerHTML=data.main.humidity+"g/kg";
	let temp=document.getElementById("temp");
	temp.innerHTML=Math.round((data.main.temp)-273.15)+"degree c "
	consol.log(data)
}

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if (cityName.value==="pune	") {
		alert("Enter a city pune");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName="";
	    }
	}

