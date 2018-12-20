var signo = prompt('¿Cual es tu signo?') //le pide al usuario su signo zodiacal mediante un cuador de texto
const horoscopo = 'Inserte horoscopo aquí'
switch(signo){
	case 'acuario':    // en caso de que el signo zodiacal de la persona sea acuario, se ejecuta la siguiente sentencia
		console.log('acuario' + horoscopo)
	break             //Termina la instrucción
	case 'piscis':
		console.log('piscis' + horoscopo)
	break
	case 'aries':
		console.log('aries' + horoscopo)
	break
	case 'tauro':
		console.log('tauro' + horoscopo)
	break
	case 'geminis':
	case 'géminis':   //Se pueden poner las 2 en caso de que el usuario lo escriba con acento
		console.log('geminis' + horoscopo)
	break
	case 'cancer':
	console.log('cancer' + horoscopo)
	break
	case 'leo':
	console.log('leo' + horoscopo)
	default:           //En caso de que no cumpla ninguna de las condiciones, se ejecuta esta línea
	console.log('prueba intentando de nuevo')
	break
}