function getWeather(cityID) {
	let key = "";
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?id=" +
		cityID +
		"&appID=" +
		key,
	)
		.then(function(resp) {
			return resp.json();
		})
		.then(function(data) {
			// console.log(data);
			writeWeather(data);
		});
}

function writeWeather(data) {
	let celcius = Math.round(parseFloat(data.main.temp) - 273.15);

	document.getElementById("description").innerHTML =
		data.weather[0].description;
	document.getElementById("degree").innerHTML = celcius + "&deg;";
	document.getElementById("location").innerHTML = data.name;
}

window.onload = function() {
	getWeather(1733046);
};
