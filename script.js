
document.querySelector('#btnAgregarMascota').addEventListener('click', guardarMascota);

function guardarMascota(){
    var nombreM = document.querySelector('#nombreM').value,
	 raza = document.querySelector('#raza').value,
	 color = document.querySelector('#color').value,
	 peso = document.querySelector('#peso').value,
	 nombreP = document.querySelector('#nombreP').value;

agregarMascota(nombreM,raza,color,peso,nombreP);

//formulario.reset();

}

//Agregando mascota
var mascotasLista = [];

function agregarMascota(nombreM,raza,color,peso,nombreP){

	var nuevaMascota = {
		nombreM : nombreM,
		raza : raza,
		color : color,
		peso : peso,
		nombreP : nombreP
	};
        console.log(typeof nuevaMascota);

		mascotasLista.push(nuevaMascota);
        
        //convirtiendo un objeto o valor de JavaScript en una cadena de texto JSON con método stringyfy
        var MascotaJSON = JSON.stringify(nuevaMascota);
        
        document.getElementById('mascotaRegistrada').innerHTML = MascotaJSON;

}


//Tratando de convertir JSON a objeto de JS con método parse
// document.querySelector('#btnAgregarMascota2').addEventListener('click', convertirAobjJS);

function convertirAobjJS(){
    var cadenaJSON  = document.querySelector('#cadenaJSON').value;

	console.info(cadenaJSON);

    var objetoJS = JSON.parse(cadenaJSON);
    
    document.getElementById('mascotaRegistrada2').innerHTML = objetoJS;
    
       
};

/* ########### CAMBIOS ########### */

document.querySelector('#btnAgregarMascota2').addEventListener('click', (evento) => {

	evento.preventDefault(); // Evitamos refrescar el formulario.

	// Convirtiendo a STRING
    var cadenaJSON  = JSON.parse(document.querySelector('#cadenaJSON').value);

	const myObject = {
		nombreM : cadenaJSON.nombreM,
		raza : cadenaJSON.raza,
		color : cadenaJSON.color,
		peso : cadenaJSON.peso,
		nombreP : cadenaJSON.nombreP
	}

	console.log(myObject);
	console.log(typeof myObject);

    document.getElementById('mascotaRegistrada2').innerHTML = `
		{
			nombreM: '${myObject.nombreM}',
			raza : '${cadenaJSON.raza}',
			color : '${cadenaJSON.color}',
			peso : ' '${cadenaJSON.peso}',
			nombreP : '${cadenaJSON.nombreP}'
		}
	`;
});