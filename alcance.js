var juan = {                      //Variable global, ya que no esta declarada dentro de una función especifica
	nombre: 'Juan',
	apellido: 'Cedillo',
	edad: 21

}
function imprimirMayusculas(juan){

	var { nombre } = juan
	console.log(nombre.toUpperCase())
}

imprimirMayusculas(juan)

//Parametros como referencia

function cumpleanos(juan){
	return{
		...juan,
		edad: juan.edad + 1       //Variable local, ya que solo se modifica dentro de una función
	}
}

