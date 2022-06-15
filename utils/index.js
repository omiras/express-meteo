/**
 * Función que transforma los grados celsius a Farenheit
 * 
 * @param {number} celsius Temperatura en grados Celsius 
 * @returns number Temperatura en grados Fahrenheit
 */

// Voy a exportar una función que se llama 'celsiusToFarenheit'
exports.celsiusToFarenheit = function (celsius) {
    return celsius * 1.8 + 32;
}
