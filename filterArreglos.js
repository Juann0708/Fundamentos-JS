var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = persona => persona.altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula] //metemos todas las funciones a un arreglo

var personasAltas = personas.filter(esAlta)  //Filtra a las personas que son altas



console.log(personasAltas)

const esBaja = persona => persona.altura <1.7

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)


const pasarAlturaACms = personas => ({                    
        ...personas,               //Tomamos los atributos del arreglo personas  
        altura: personas.altura * 100   //multiplica por 100 la estatura de la persona
})

var personasCms = personas.map(pasarAlturaACms)  //crea un nuevo arreglo con la estatura en Centímetros

console.log(personasCms)




