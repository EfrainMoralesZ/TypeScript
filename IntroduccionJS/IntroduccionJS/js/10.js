/*Modificar un arreglo


*/

const tecnologias = ['HTML', 'JavaScript','CSS','React.js','Node.js']

/*Push en React.js muta el arreglo por lo que casi no se usa */
// tecnologias.push('Nest.js')

//Otra opcion en lugar de usar Push
// const nuevoArreglo = [...tecnologias,'Nest.js']
// console.table(nuevoArreglo)

// tecnologias[10]= 'Nest.js'

// console.table(tecnologias)

//Sirve para filtrar dentro de un arreglo
// const tecnologias2 = tecnologias.filter(function(tech){
//     if (tech === 'HTML') {
//         return tech
//     }
// })
// console.log(tecnologias2)


/*formas de hacer que no mute el arreglo
.map no muta el arreglo 
*/
const tecnologias2 = tecnologias.map(function(tech){
    if (tech === 'Node.js') {
        return 'Node.js'
    } else {
        return tech
    }

 })
console.log(tecnologias2)
