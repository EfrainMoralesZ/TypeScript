/*
Template Strings y Concatenación

Concatenar es:
    Unir unas variables con otras o mezclar
    algunos valores con otros.
*/

const producto ="Table de 12 pulgadas"
const precio = 400
const marca = "orange"

//esto es concaternar 
console.log('El producto es: ' + producto)
console.log('El producto es: ' , producto)
console.log("El producto es: " +  producto + " El costo es: $ " + precio + " Dolares, marca: " + marca) 

//backtick ``
console.log (`El Producto es: ${producto}`)

//este es un template de Strings
/*
Se ocupan mucho en React porque es como renderizas todo el codigo.
*/
console.log (`${producto} $ ${precio} Dolares, marca $${marca} `)
