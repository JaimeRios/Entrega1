let cursos=[{
	id: 1,
	nombre: 'JavaScript',
	duracion: 64,
	valor: 215000

},
{
	id: 2,
	nombre: 'Nodejs',
	duracion: 64,
	valor: 360000
},
{
	id: 3,
	nombre: 'React',
	duracion: 32,
	valor: 280000
},
{
	id: 4,
	nombre: 'HTML5',
	duracion: 32,
	valor: 160000
}];




const opciones ={

	id:{
		alias: 'i',
		demand: true
	},
	nombre:{
		alias: 'n',
		demand: true
	},
	cedula:{
		alias: 'x',
		demand: true
	}
}

let id = 1;
let time=0;

let mostrarCursos=(callback)=>{
	setTimeout(function(){
		let curso = cursos.find(function(cursosTodos){
			return cursosTodos.id==id});
		callback(curso);
		id++;
		if(argv._[0]==undefined){
			time=2000;
		}
		if(id<=cursos.length){
			mostrarCursos(function(cursof){
				console.log('El curso '+cursof.nombre+' con ID '+cursof.id+' tiene una duracion de '+cursof.duracion+' horas y un valor de '+cursof.valor+' pesos.');
	
			});
		}		

	}, time);
	
}

let mostrarCursosInmediato=()=>{
	setTimeout(function(){
		console.log(argv.i+' no pertenece a ningun curso disponible, por favor verificar la informacion del curso interesado en la siguiente lista: ');
		mostrarCursos(function(cursof){
			console.log('El curso '+cursof.nombre+' con ID '+cursof.id+' tiene una duracion de '+cursof.duracion+' horas y un valor de '+cursof.valor+' pesos.');
		});
	},2000);
	
}




const argv = require('yargs')
			.command('inscribir','inscribir en programa',opciones)
			.argv

module.exports = {
	cursos,
	mostrarCursos,
	mostrarCursosInmediato,
	argv
};

	