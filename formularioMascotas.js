	var getData = function (){
	var nombreM = document.getElementById("nombreM").value;
	var raza = document.getElementById("raza").value;
	var color = document.getElementById("color").value;
	var peso = document.getElementById("peso").value;
	var nombreP = document.getElementById("nombreP").value;
	//console.log(nombreM + " " + raza + color + peso + nombreP);//
}

agregarMascota();

	/*var formulario = document.getElementById('formulario'),
		nombreM= formulario.nombreM,
		raza=formulario.raza,
		color=formulario.color,
		peso=formulario.peso,
		nombreP=formulario.nombreP;

formulario.addEventListener('submit', )

console.log('raza');*/

var mascotasLista = [];

function agregarMascota(nombreM,raza,color,peso,nombreP){

	var nuevaMascota = {
		nombreM : nombreM,
		raza : raza,
		color : color,
		peso : peso,
		nombreP : nombreP
	};

	console.log(nuevaMascota);
	mascotasLista.push(nuevaMascota);
}

