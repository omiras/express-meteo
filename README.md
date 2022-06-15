# MeteoMoon

Nos han pedido crear una app para explotar, analizar diferentes tipos de datos meteorológicos

## Req 1

Crear una home page. Cuando el usuario haga un GET a / ; devolver un mensaje de bienvenida

## Req 2

Nos gustaria enviar un HTML con la página de about-us

## Req 3

Nos gustaría un endpoint de nombre /convert ; que le pasamos un parámetro de nombre 'celsius', y nos devuelve una respuesta convirtiendo el valor del parámetro a farenheit.

farenheit = (celsius *1,8) + 32

## Req 4

Nos gutaría ahora que el endpoint /convert fuera capaz también de convertir de Fahrenheit a celsius

/convert?type=celsiusToFahrenheit&value=0 // Debería devolvernos 32
/convert?type=FahrenheitToCelsius&value=32 // Debería devolvernos 0

1. Modifica adecuadamente el endpoint /convert para que tenga en consideración los nuevos nombres de parámetros de la query string
2. Crea una función nueva en utils/index.js que transforme de Fahrenheit a celsius y devuelva el resutado
3. Devuelve un mensaje adecuadamente en función del tipo de conversión que el usuario quiere hacer

