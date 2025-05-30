/* Recorriendo arrays con for

*/

const tecnologias = ['HTML', 'JavaScript','CSS','React.js','Node.js','TypeScript','Nest.js']

//-------------------------------------------------------------------------
/* Esto no se usa porque lo que se requiere es que el codigo sea lo mas 
limpio posible

console.log(tecnologias[0])
console.log(tecnologias[1])
console.log(tecnologias[2])
console.log(tecnologias[3])
console.log(tecnologias[4])
*/

//-------------------------------------------------------------------------

//existen metodos que permiten iterar arrays de formas mas sencillas

/*Se ocupa .length para saber el tamaño del array y de esta forma el
codigo se adapte a todos los escenarios posibles.
*/


/*
for(let i = 0; i<tecnologias.length ; i++){
    console.log(tecnologias[i])
}
*/

//-------------------------------------------------------------------------

/* forEach loop
es un metodo que ejecuta una función indicada por cada elemento del arreglo.
*/


/*
tecnologias.forEach(function(){
    console.log('Desde la función')
})
*/


//-------------------------------------------------------------------------

/*map
Sirve para iterar, pero su caracteristica principal es que crea un nuevo 
arreglo en base a las condiciones de la función
*/


/*
tecnologias.map(function(){
    console.log('Desde la función')
})
*/

//-------------------------------------------------------------------------

/*¿Cual es la diferencia de forEach y map? 
La diferencia es que map te genera un nuevo arreglo, se itera pero su 
caracteristica principal es que genera un nuevo arreglo.
*/

//genera un array nuevo.
const arrayMap = tecnologias.map(function(tech){
    // return tech
    return 'HOLAA'
})

//aparece como undefined.
const arrayforEach = tecnologias.forEach(function(tech){
    return tech
})

console.log(arrayMap)
console.log(arrayforEach)

/*Se puede usar forEach en lugar de for loop ambos sirven para iterar
sin crear un nuevo arreglo
*/

//-------------------------------------------------------------------------
/*for ... of
Es una combinacion de for y forEach de forma mas simple
*/ 
for(let tech of tecnologias){
    console.log(tech)
}