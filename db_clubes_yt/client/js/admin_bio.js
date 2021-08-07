/*importar modulos/ librerías*/
import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Club_Bio, Miembro_Bio, Actividad_Bio } from '/imports/api/db_bio.js';

/*helper*/
Template.club_bio.helpers({
    clubBio(){
        return Club_Bio.find({})
    }
});

Template.miembro_bio.helpers({
    miembroBio(){
        return Miembro_Bio.find({})
    }
});

Template.actividad_bio.helpers({
    actividadBio(){
        return Actividad_Bio.find({})
    }
});

Template.club_bio_report.helpers({
    clubBioReport(){
        return Club_Bio.find({})
    }
});

Template.miembro_bio_report.helpers({
    miembroBioReport(){
        return Miembro_Bio.find({})
    }
});

Template.actividad_bio_report.helpers({
    actividadBioReport(){
        return Actividad_Bio.find({})
    }
});

Template.miembro_bio.events({
    'click .del-miembro-bio': function(event){
        Miembro_Bio.remove({'_id':this._id});
    }
});

Template.actividad_bio.events({
    'click .del-actividad-bio': function(event){
        Actividad_Bio.remove({'_id':this._id});
    }
});

/*Filter bio members*/

Template.miembro_bio.onRendered(function(){
    $(document).ready(function(){
        $("#input_bio").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_bio tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});

Template.actividad_bio.onRendered(function(){
    $(document).ready(function(){
        $("#input_bio_act").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_bio_act tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});

/*Insertar miembro*/

Template.new_miembro_bio.events({
	'submit .js-add-miembro-bio':function(event){
		var ci, carrera, semestre, mail, phone, nomb, apel, com, estado, dir;
		ci = event.target.ci_bio.value;
		carrera = event.target.carrera_bio.value;
        semestre = event.target.semestre_bio.value;
        mail = event.target.email_bio.value;
        phone = event.target.phone_bio.value;
        nomb = event.target.nombre_bio.value;
        apel = event.target.apellido_bio.value;
        com = event.target.comision_bio.value;
        estado = event.target.estado_bio.value;
        dir = event.target.directiva_bio.value;
		//console.log('C.I: '+ci+' Nombre: '+nomb+' Phone: '+phone);

		Miembro_Bio.insert({
		IdClub: 1000,
        CI: ci,
		Carrerar: carrera,
        Semestre: semestre,
        Correo: mail,
        Celular: phone,
        Nombres: nomb,
        Apellidos: apel,
        Comision:com,
        Estado: estado,
        Directiva: dir,
		datereg: new Date(),
		owner: Meteor.user()._id,
		});
		//alert('Saved!');
		return false;
	}
});