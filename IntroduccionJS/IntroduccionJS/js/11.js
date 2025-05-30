/* Destructuring de Arrays

*/

//arreglo
const tecnologias = ['HTML', 'JavaScript','CSS','React.js','Node.js']

//ambas estructuras son iguales.

const react = tecnologias[3]
//Destructuring array
const [, , , reactjs] = tecnologias

console.log(reactjs)