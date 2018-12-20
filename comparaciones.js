var x = 4             //De tipo num 
var y = '4'           //De tipo string

/*Al compararlo con '==' dira que son iguales, ya que lleva los 2 
valores al mismo tipo y despues los compara, pero si los comparamos con '==='
Dira que es falso, ya que así tambien compara los tipos de valor
*/

var juan = {
	nombre: 'Juan'
}

var otroJuan = juan

/*Si comparamos 2 objetos 
siempre nos dirá que son distintos, ya que al hacer la comparación 
se apunta al lugar en la memoria donde se encuentran los objetos, a 
menos de que el onjeto le apunte al otro*/