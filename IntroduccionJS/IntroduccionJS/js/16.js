/* Funciones que retornan valores.

*/

/*Funcion Declaration 
esta funcion permite sacar algun valor y reutilizarlo a otros lugares 
de tu codigo.

*/

const sumar = function (numero1 = 0, numero2 = 0){
         return numero1 + numero2
 }

const resultado = sumar (10,20) 
sumar(300, 1)
sumar(100)



//Function Expression
/*
function sumar(numero1 = 0, numero2 = 0){
     return numero1 + numero2
  }

const resultado = sumar (10,20) 
*/

//Funcion Arrow
/*
const sumar = (numero1 = 0, numero2 = 0)=>{
    numero1 + numero2
}
const resultado = sumar (10,20) 
*/


console.log(resultado)
