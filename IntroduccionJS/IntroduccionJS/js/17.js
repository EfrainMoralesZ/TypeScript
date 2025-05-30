/* Arrays Methods - Parte 1 de 2 
-.filter
- arrow =>
- .includes    
*/ 

//Methods
const tecnologias = ['HTML', 'JavaScript','CSS','React.js','Node.js','TypeScript','Nest.js']
const numeros = [10, 20, 30]

/*.filter
Este nos sirve para sacar un elemento del arreglo o tambien mantener 
algun elemento en el arreglo y sacar todos los demas en base a ciertas 
condiciones.

.filter sirve para estos dos casos: 
const tecnologias = ['HTML', 'JavaScript','CSS','React.js','Node.js','TypeScript','Nest.js']
const numeros = [10, 20, 30]

*/

//ejemplo 1 

/*const nuevoArray = tecnologias.filter(function (tech){
    console.table(tech)
})
*/

//ejemplo 2

/*
const ejemploArrow = (tech) => console.log(tech)
const nuevoArray = numeros.filter(ejemploArrow)
*/

/*ejemplo 3

este codigo nos traera la tecnologia que es igual a HTML 
cuando solo estamos usando un paramentro le podemos quitar los ()
((tech) => tech === 'HTML') y seguira compilando igual.
*/

/*
const nuevoArray = tecnologias.filter(tech => tech === 'HTML')
console.log(nuevoArray)
*/


/* ejemplo 4

Sirve para filtrar dentro de un arreglo
este codigo es igual al anterior solo que ocupa menos codigo
es una de las ventajas de usar las arrow => 
*/

/*
const tecnologias2 = tecnologias.filter(function(tech){
     if (tech === 'HTML') {
         return tech
     }
 })
 console.log(tecnologias2)
*/

//En caso de usar filter en datos numericos van sin '' 
/*
const resultado = numeros.filter(numero => numero > 10)
console.log(resultado) 
*/

//-------------------------------------------------------------------------

/*  ejemplo 1

.includes 

este method revisa si existe un elemento en un arreglo
*/

/*
const resultado = tecnologias.includes('JavaScript')
console.log(resultado)
*/

//-------------------------------------------------------------------------

/* ejemplo 1

.some
este Method devuelve si al menos uno cumple la condición.
retorna true

*/


/*
const resultados = numeros.some(numero => numero > 15)
console.log(resultados)
*/

/* ejemplo 2

Una comparación de codigos entre .filter y .some 
es la siguiente:

*/

//.some
/*
const resultado = numeros.some(numero => numero > 15)
if(resultado){
    console.log('Si hay resultados:')
} else {
    console.log('No hay resultados:')
}
*/


//.filter

/*
const resultados = numeros.filter(numero => numero > 15)
if(resultados.length > 0){
        console.log('Si hay resultados:')
} else {
    console.log('No hay resultados')
}
*/

//-------------------------------------------------------------------------

/* ejemplo 1

.find

devuelve el primer elemento que cumple una función

*/

/*
const resultado = numeros.find(numero => numero > 25)
console.log(resultado)
*/


//-------------------------------------------------------------------------

/* ejemplo 1

.every

Retorna true o false si todos cumplen la condición.

esto puede servir en un ejemplo de algun banco o establecimiento para
validar que clientes ya pagaron o no.

*/

/*
const resultado = numeros.every(numero => numero > 5)
console.log(resultado)
*/
//-------------------------------------------------------------------------

/* ejemplo 1

.reduce

Retorna un acomulado del total.

esto puede servir vara un carrito de compras para que el usuario pueda
visualizar el monto a pagar, ya que 

*/

const resultado = numeros.reduce((total, numero)=>{
    console.log(total) // este funciona como un acomuludor
    console.log(numero)

    return total + numero //suma el numero anterior con el actual.

},0)

console.log('el valor total es:' + resultado)// muestra en pantalla el valor total