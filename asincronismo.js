const API_URL = 'https://swapi.co/api/'    //URL de la API
const PEOPLE_URL = 'people/:id'            //Identificador del personaje
//const luke = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true}

/*$.get(luke,opts, function(luke){
	console.log(`Hola, yo soy ${luke.name}`)

})
*/

function obtenerPersonaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

	$.get(url, opts, callback).fail(function (){   //El siguiente mensaje se desplegará en caso de que se pierda la conexión
		console.log(`Ocurrió un error, no se pudo obtener el personaje ${id}`)
	})             
}
	/*if (callback) {    //Invoca al callback
		callback()
	}
	})
*/




obtenerPersonaje(1, function (personaje) {        //Se pide en serie y no en paralelo
	console.log(`Hola, yo soy ${personaje.name}`)	//Cuando llegue la respuesta del servidor, se desplegará el siguiente mensaje
	obtenerPersonaje(2, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`)      //Callback para manejar los tiempos de las peticiones al servidor
		obtenerPersonaje(3,function(personaje){
			console.log(`Hola, yo soy ${personaje.name}`)
			obtenerPersonaje(4, function(personaje){    //Callback hell: El codigo va a empezar a ser horizonta, en lugar de vertical
				console.log(`Hola, yo soy ${personaje.name}`)
			})
		})
	})
})

//obtenerPersonaje(3)  //No se sabe en que orden llegarán las respuestas, depende del servidor y cuanto tarda en responder las requests