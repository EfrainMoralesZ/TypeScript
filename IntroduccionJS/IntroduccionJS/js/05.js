//Manipulacion de un Objeto 

//Objeto
const producto ={
   nombre : "Tablet",
   precio : 300,
   disponible : false
}


/* Como hacer para que el objeto no se pueda modificar o que no 
pueda agregar mas cosas al objeto, se ocupa un Object.freeze
este es un metodo */
//-- Object.freeze(producto)

/*Object.seal permite modificar las propiedades existentes pero no te
premite añadir ni eliminar ninguna propiedad */
//-- Object.seal(producto)

// Esta sintaxis es para reescribir un valor
producto.disponible = true

// Sino existe una propiedad dentro del objeto se puede añadir
producto.imagen ='imagen.jpg'

// Eliminar propiedad
delete producto.precio

// MUestra en pantalla
console.log(producto)

