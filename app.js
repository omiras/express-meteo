// Módulo de terceros express
const express = require('express');

// El módulo path nos permite obtener/rutas en el sistema de ficheros del servidor
const path = require('path')

// Voy a importar el módulo que acabo de crear para convertir de celsius a farenheit
// Es suficiente poner el nomnbre de la carpeta; cargara por defecto index.js, a no ser que le especifiques lo contrario.
const utils = require('./utils');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>¡Bievenido a la home de MeteoMoon! ¡Que emoción! </h1>")
});

app.get("/about-us", (req, res) => {
    // __dirname es la ruta absoluta a la carpeta donde se encuentra el script que estamos ejecutando
    // about-us.html es el fichero que queremos enviar al cliente
    // path.join nos permite construir rutas (es más seguro que hacero manualmente concatenado string);
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get("/convert", (req, res) => {
    console.log(req.query)
    const type = req.query.type; // tipo de conversión
    const value = req.query.value; // valor

    //TODO: Comprobar la variable 'type'. Si es celsiusToFahrenheit, debemos invocar la función utils.celsiusToFarenheit y enviar una respuesta adecauda
    // Altrament, si la variable 'type' es FahrenheitToCelsius, debemos invocar la función utils.fahrenheitToCelsius

    if (type == "celsiusToFahrenheit") {
        res.send(`${value} ºC --> ${utils.celsiusToFarenheit(value)} F`);
        // 32 ºC --> 0 F
    }

    else if (type == "FahrenheitToCelsius") {
        res.send(`${value} F --> ${utils.fahrenheitToCelsius(value)} ºC`);
    }

});


app.listen(3000);
