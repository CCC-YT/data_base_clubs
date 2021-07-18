/*importar modulos/ librerías*/

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

/*Exportar esquemas*/
export const Club_Bio = new Mongo.Collection("club_bio");
export const Miembro_Bio = new Mongo.Collection("miembro_bio");
export const Actividad_Bio = new Mongo.Collection("actividad_bio");

/*Esquema Club Bio*/
Club_Bio.attachSchema(new SimpleSchema({
   _id:{
      type: String,
      label: '_id club'
   },
   Vision:{
      type: String,
      label: 'vision bio',
      required: false
   },
   Objetivo:{
      type: String,
      label: 'objetivo bio',
      required: false
   },
   Nombre:{
      type:String,
      label: 'nombre bio'
   },
   Mision:{
      type: String, 
      label: 'mision bio',
      required: false
   },
   Correo: {
      type: String,
      label: 'email bio',
      regEx: SimpleSchema.RegEx.Email,
      autoform: {
         type: 'email'
      },
      required: false
   },
}, 
{ tracker: Tracker }
));

/*Miembros Club Bio*/
Miembro_Bio.attachSchema(new SimpleSchema({
   _id:{
      type: String,
      label: '_id Miembros'
   },
   IdClub:{
      type: SimpleSchema.RegEx.Id,
      /*ref: 'Club_Bio',*/
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
   Comision:[{
      type: String,
      label: 'comision miembro',
      required: false
   }],
   Estado:{
      type: Boolean,
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

/*Actividad Club Bio*/
Actividad_Bio.attachSchema(new SimpleSchema({
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
      /*ref: 'Miembro_Bio',*/
      label: 'id coordinador',
      required: false
   },
   IdColaboradores:{
      type: SimpleSchema.RegEx.Id,
      /*ref: 'Miembro_Bio',*/
      label: 'id colaborador',
      required: false
   }
},
{tracker: Tracker}
));