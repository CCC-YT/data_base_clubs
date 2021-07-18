/*Importar Modulo/ librerias */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/*Exportar esquemas*/
export const Club_Nano = new Mongo.Collection("club_nano");
export const Miembro_Nano = new Mongo.Collection("miembro_nano");
export const Actividad_Nano = new Mongo.Collection("actividad_nano");

/*Esquema Club Nano*/
Club_Nano.attachSchema(new SimpleSchema({
   _id:{
      type: String,
      label: '_id club'
   },
   Vision:{
      type: String,
      label: 'vision nano',
      required: false
   },
   Objetivo:{
      type: String,
      label: 'objetivo nano',
      required: false
   },
   Nombre:{
      type:String,
      label: 'nombre nano'
   },
   Mision:{
      type: String, 
      label: 'mision nano',
      required: false
   },
   Correo: {
      type: String,
      label: 'email nano',
      regEx: SimpleSchema.RegEx.Email,
      autoform: {
         type: 'email'
      },
      required: false
   },
}, 
{ tracker: Tracker }
));

/*Miembros Club Nano*/
Miembro_Nano.attachSchema(new SimpleSchema({
   _id:{
      type: String,
      label: '_id Miembros'
   },
   IdClub:{
      type: SimpleSchema.RegEx.Id,
      /*ref: 'Club_Nano',*/
      label: 'Id Club'
   },
   CI:{
      type: String,
      label: 'cedula miembro',
      required:false
   },
   Carrera:{
      type: String,
      label: 'carrera miembro',
      required: false
   },
   Semestre:{
      type: String,
      label: 'semestre miembro',
      required:false
   },
   Correo: {
      type: String,
      label: 'email miembro',
      regEx: SimpleSchema.RegEx.Email,
      autoform: {
         type: 'email'
      }
   },
   Celular: {
      type: SimpleSchema.RegEx.Phone,
      label: 'celular miembro',
      autoform: {
         type: 'number'
      },
      required: false
   },
   Nombres:{
      type:String,
      label: 'nombre miembro'
   },
   Apellidos:{
      type: String,
      label: 'apellido'
   },
   /*Comision:[{
      type: String,
      label: 'comision miembro',
      required: false
   }],*/
   Estado:{
      type: String,
      label: 'estado miembro',
      required: false
   },
   Directiva:{
      type:String,
      label:'directiva miembro',
      required: false
   }
},
{tracker: Tracker }
));

/*Actividad Club Nano*/
Actividad_Nano.attachSchema(new SimpleSchema({
   _id:{
      type:String,
      label: 'id actividad'
   },
   Tipo:{
      type:String,
      label: 'tipo actividad',
      required: false
   },
   Fecha_Inicio:{
      type:Date,
      label: 'fecha inicio actividad'
   },
   Nombre: {
      type:String,
      label: 'nombre actividad'
   },
   Estado:{
      type: String,
      label: 'estado actividad',
      required: false
   },
   Fecha_Fin:{
      type: Date,
      label:'fecha fin actividad'
   },
   Descripcion:{
      type:String,
      label:'descripcion actividad',
      required: false
   },
   IdCoordinador:{
      type: SimpleSchema.RegEx.Id,
      /*ref: 'Miembro_Nano',*/
      label: 'id coordinador',
      required: false
   },
   IdColaboradores:{
      type: SimpleSchema.RegEx.Id,
      /*ref: 'Miembro_Nano',*/
      label: 'id colaborador',
      required: false
   }
},
{tracker: Tracker}
));