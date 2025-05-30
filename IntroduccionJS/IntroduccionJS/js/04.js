/*
    Entre menos lineas de cosigo utilices sera mejor y para eso sirven los Objetos,
    Destruturing y Object Literal Enhacement.
*/

//Objetos 

/* Un onjeto es una coleccion de propiedades y cada propiedad es una asosiacion entre una
clave o valor.
*/

// const producto ={
//     nombre : "Tablet",
//     precio : 300,
//     disponible : false
// }

// console.log(producto)
// console.table(producto)


//-------------------------------------------------------------------------------
//Destructuring

/*
Permite estraer una variable y generarla en una sola linea de codigo.
*/

// const {nombre, precio, disponible} = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// console.log(producto.nombre)
// console.log(producto.precio)

//-------------------------------------------------------------------------------
//Object Literal Enhacement

// const autenticado =true
// const usuario2= "Juan"

// const nuevoObjeto ={
//     autenticado,
//     usuario:usuario2
// }
// console.log(nuevoObjeto)