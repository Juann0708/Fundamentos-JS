
const API_URL = 'https://swapi.co/api/'    //URL de la API
const PEOPLE_URL = 'people/:id'            //Identificador del personaje
const opts = { crossDomain: true}


function obtenerPersonaje(id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

			$.get(url, opts, function (data) {  //cuando esta funcion se ejecuta llamamos a "resolve" pasandole "data"
				resolve(data) //no se llama hasta que la funcion de arriba se ejecuta
			})
			.fail(() => reject(id))   //El siguiente mensaje se desplegará en caso de que se pierda la conexión
		})           
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}

//var ids = [1, ,2, 3, 4, 5, 6, 7]
//	var promesas =  ids.map(function(id){

var ids = [1, 2, 3, 4, 5, 6, 7]  //Array de id's de personajes
	var promesas =  ids.map(id => obtenerPersonaje(id)) //Array de promesas
	Promise
	.all(promesas) //Le pasamos a promise.all un array de promesas
	.then(personajes => console.log(personajes))
	.catch(onError) //En casod e que suceda algún error
/*
obtenerPersonaje(1)
	.then(personaje =>{  //Esto se ejecuta si la promise se resuelve
		console.log(`El personaje 1 es ${personaje.name}`)
		return obtenerPersonaje(2)
})
	.then(personaje =>{
		console.log(`El personaje 2 es ${personaje.name}`)//Promesas encadenadas
		return obtenerPersonaje(3)
	})
		.then(personaje =>{
		console.log(`El personaje 3 es ${personaje.name}`)
		return obtenerPersonaje(4)
	})
			.then(personaje =>{
		console.log(`El personaje 4 es ${personaje.name}`)
		return obtenerPersonaje(5)
	})
				.then(personaje =>{
		console.log(`El personaje 5 es ${personaje.name}`)
		return obtenerPersonaje(6)
	})



	.catch(onError) //Esto se ejecu	ta si es rechazada



*/

