var contador = 0

const llueve = () => Math.random() < 0.25  //La probabilidad de que llueva es de 25%

do{                    //Haz esto mientras que no se cumpla la condicion
	contador++

}while(!llueve())      //Mientras no llueva se suma 1 a contador

if (contador === 1){
console.log(`Tuvo que pasar ${contador} dia para que lloviera`)	
} else {
	console.log(`Tuvieron que pasar ${contador} dias para que lloviera`)	
}
