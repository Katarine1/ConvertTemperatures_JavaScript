//Variables

let celsius = prompt("Enter value Celsius: ");
let fahrenheit = prompt("Enter value Fahrenheit: ");
let kelvin = prompt("Enter value Kelvin: ");

let result = 0;

function celsiusToKelvin(){
	result =  (parseFloat(celsius) + 273).toFixed(2); 
	console.log("Celsius To Kalvin : " + result);
}

function celsiusToFahrenheit(){
	result = (1.8 * parseFloat(celsius) + parseFloat(32)).toFixed(2);
	console.log("Celsius To Fahrenheit : " + result);
}

function fahrenheitToCelsius(){
	result = ((fahrenheit - 32) / 1.8).toFixed(2);
	console.log("Fahrenheit To Celsius : " + result);
}

function fahrenheitToKelvin(){
	result = ((parseFloat(fahrenheit) + parseFloat(459.67)) / 1.8).toFixed(2);
	console.log("Fahrenheit To Kelvin : " + result);
}

function kelvinToCelsius(){
	result = (kelvin - 273.15).toFixed(2);
	console.log("Kelvin To Celsius : " + result);
}

function kelvinToFahrenheit(){
	result = (kelvin * 1.8 - 459.67).toFixed(2);
	console.log("Kelvin To Fahrenheit : " + result);
}

celsiusToKelvin();
celsiusToFahrenheit();

fahrenheitToCelsius();
fahrenheitToKelvin();

kelvinToCelsius();
kelvinToFahrenheit();