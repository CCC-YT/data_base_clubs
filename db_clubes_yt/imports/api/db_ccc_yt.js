import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/*Exportar esquemas*/
export const Club_CCCYT = new Mongo.Collection("club_cccyt");
export const Miembros_CCCYT = new Mongo.Collection("miembros_cccyt");
export const Actividad_CCCYT = new Mongo.Collection("actividad_cccyt");

/*Esquema Mentores */
Club_CCCYT.attachSchema(new SimpleSchema ({
	_id:{
		type: String,
		label: 'Id club'
	},
	Nombre:{
		type:String,
		label: 'Nombre club',
		required: true
	},
	Correo: {
		type: String,
		label: 'Email',
		regEx: SimpleSchema.RegEx.Email,
		autoform: {
		   type: 'email'
		},
		required: false
	 },
	 Vision:{
		type: String,
		label: 'Visión',
		required: false
	 },
	 Mision:{
		type: String, 
		label: 'Misión',
		required: false
	 },
	 Objetivo:{
		type: String,
		label: 'Objetivo',
		required: false
	 }
},
{tracker: Tracker}
));

/*Esquema miembros mentores*/
Miembros_CCCYT.attachSchema(new SimpleSchema({
	_id: {
		type: String,
		label: 'Id Miembro'
	},
	idClub:{
		type: String,
		//ref: 'Club_Mentores',
		label: '_id Club',
		required: true
	},
	Apellidos: {
		type: String, 
		label: 'Apellidos',
		required: true,
	},
	Nombres: {
		type: String,
		label: 'Nombres',
		required: true,
	},
	CI:{
		type: String,
		label: 'Cédula de identidad',  
		required: false,
	},
	Correo:{
		type: String,
		label: 'Correo Electrónico',
		required: true,
	},
	Carrera:{
		type: String,
		label: 'Carrera',
		required:false,
	},
	Semestre:{
		type: String,
		label: 'Semestre',
		required: false,
	},
	Comision:{
		type: String,
		label: 'Comisión',
		required:false,
	},
	Cargo:{
		type: String,
		label: 'Cargo',
		required:false,
	},
	Periodo:{
		type: String,
		label: 'Periodo',
		required:false,
	},
	Estado:{
		type: String,
		label: 'Estado',
		required: true,
	}
}, 
{tracker: Tracker}
));

Actividad_CCCYT.attachSchema(new SimpleSchema({
	_id: {
		type: String,
		label: 'Id Actividad'
	},
	Nombre: {
		type: String, 
		label: 'Nombre de actividad',
		required:true,
	},
	Tipo: {
		type: String,
		label: 'Tipo de actividad',
		required: true,
	},
	Fecha_inicio: {
		type: String,
		label: 'Fecha de inicio de actividad',  
		required: false,
	},
	idCoordinador:[{
		type: String,
		label: 'Id Coordinador de actividad',
		required: false,
	}],
	idColaborador: [{
		type: String,
		label: 'Id Colaboradores de actividad',
		required: false,
	}],
	Description:{
		type: String,
		label: 'Descripción actividad',
		required: false,
	},
	Estado:{
		type: String,
		label: 'Estado de actividad',
		required:true,
	}
},
{tracker: Tracker}
));