function celsiusToFahrenheit(celsius) {
    const Fahrenheit = (celsius * 9/5) + 32;
    return Fahrenheit;
}

const celsius = 14;
console.log(celsiusToFahrenheit(celsius));