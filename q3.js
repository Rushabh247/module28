class Temperature {
    constructor() {
        this._celsius = 0;
        this._fahrenheit = 32;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._celsius = value;
            this._fahrenheit = (value * 9/5) + 32;
        } else {
            console.log("Invalid temperature value. Temperature must be a number.");
        }
    }

    get fahrenheit() {
        return this._fahrenheit;
    }

    set fahrenheit(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._fahrenheit = value;
            this._celsius = (value - 32) * 5/9;
        } else {
            console.log("Invalid temperature value. Temperature must be a number.");
        }
    }
}


const temperature = new Temperature();

console.log("Initial temperature in Celsius:", temperature.celsius); // Output: 0
console.log("Initial temperature in Fahrenheit:", temperature.fahrenheit); // Output: 32

temperature.celsius = 25;
console.log("Temperature in Celsius after setting:", temperature.celsius); // Output: 25
console.log("Temperature in Fahrenheit after setting:", temperature.fahrenheit); // Output: 77

temperature.fahrenheit = 212;
console.log("Temperature in Celsius after setting:", temperature.celsius); // Output: 100
console.log("Temperature in Fahrenheit after setting:", temperature.fahrenheit); // Output: 212

// Trying to set an invalid temperature (non-numeric)
temperature.celsius = "abc"; // Output: Invalid temperature value. Temperature must be a number.
