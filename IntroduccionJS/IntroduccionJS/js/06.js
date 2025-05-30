//Destructuring de dos o mas objetos

//Objeto
const producto ={
   nombre: "Tablet",
   precio: 300,
   disponible: false
}

//objeto
const cliente ={
   nombre: "Efrain",
   premium: true,
   /*se puede agregar un objeto dentro de otro se le llama
   destructuring*/
   direccion:{
    calle: "calle Loma altamira",
    colonia: "San Juan Ixtacala Plano Norte"
   }
}

//se puede renombrar valores para evitar colision de valores.

const {nombre} = producto
const {nombre:nombreCliente, direccion: {calle, colonia}} = cliente
console.log(nombre)
console.log(nombreCliente)
console.log(calle)
console.log(colonia)

/*Para mandar a llamar un objeto que esta dentro de otro 
es necesario poner {} para que pueda ingresar a lo que esta 
dentrode otra forma mostrara al cual lo que tiene el objeto 
adentro con todo y {}*/