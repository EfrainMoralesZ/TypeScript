/* Funcion - Arrow function

Se parecen mucho a los function expression
se llama asi por la figura que forman los signos "=>"
no ocupan {}
es mas compacto.
*/


const sumar = (numero1 = 0, numero2 = 0)=>
         console.log(numero1 + numero2)

sumar (10,20)
sumar (300,1)
sumar (100)