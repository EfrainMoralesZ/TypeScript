/*Funciones - Function expression

Esta muy relacionada a las arrow function 

Esta muy relacionada a la sintaxis a la "Function Declaration"

*/

const sumar = function (numero1 = 0, numero2 = 0){
         console.log(numero1 + numero2)

 }

sumar (10,20)
sumar (300,1)
sumar (100)

/*¿Diferencias de las dos sintaxis?
La sintaxis de arriba requiere de un orden para ejecutar ya que se inicializa
la valible dentro de la función, mientras que la otra estructura no requiere
que este inicializada ya que primero le la funcion y luego lo relaciona 
con los parametros de externos.

*/

/*
sumar(1,2)
sumar(100,200)
function sumar(numero, numero2){
    console.log(numero + numero2)
}
*/
