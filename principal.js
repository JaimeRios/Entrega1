let {cursos,mostrarCursos,mostrarCursosInmediato,argv} = require('./informacion.js');

const fs = require('fs');


let crearArchivo = (datosEstudiante, datosCurso)=>{
	texto= 'El estudiante '+datosEstudiante.n +'\n'+
	'con cedula '+datosEstudiante.x +'\n'+
	'Se ha matriculado en el curso '+datosCurso.nombre +'\n'+
	'tiene una duracion de '+datosCurso.duracion +' horas y un valor de '+datosCurso.valor+' pesos.';
	fs.writeFile('matricula.txt',texto,(err)=>{
		if(err)throw(err);
		console.log('Se ha creado el archivo')
	});
} 

if(argv._[0]=='inscribir'){

	let cursoIns = cursos.find(function(cursosTodos){
		return cursosTodos.id==argv.i});

	if(cursoIns!=undefined){

		crearArchivo(argv,cursoIns);

	}else{
		mostrarCursosInmediato();
		
	}
}else{

	mostrarCursos(function(cursof){
		console.log('El curso '+cursof.nombre+' con ID '+cursof.id+' tiene una duracion de '+cursof.duracion+' horas y un valor de '+cursof.valor+' pesos.');
	});
}