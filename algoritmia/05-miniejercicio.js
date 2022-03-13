/* 
Realiza una calculadora, pregunta al usuario que acción desea implementar y realiza la acción, 
lo puede hacer mediante "prompt" para capturar los datos, y si deseas hacarlo en la consola de la terminal,
puede pasarle de forma directa a los datos.
*/


/* 

suma
resta
division
raiz cuadrada
exponent
perimetro de un area 

*/

function calculadora(op,num1,num2=0){ switch (op) { case 'suma': return num1+num2 //let result = num1+num2 break; case 'resta': return num1-num2 //let result = num1-num2 break; case 'multiplicacion': return num1*num2 break; case 'division': return num1/num2 break; case 'raiz': return Math.sqrt(num1); break; case 'exponent': return num1 ** num2; break; case 'Papayas': console.log('El kilogramo de mangos y papayas cuesta $2.79.'); break; default: console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.'); //return result } } let inputOp = prompt("Ingrese el tipo de operacion") let inputNum1 = prompt("Ingrese Numero 1") let inputNum2 = prompt("Ingrese Numero 2") let result = calculadora(inputOp,Number(inputNum1),Number(inputNum2)); console.log(result)