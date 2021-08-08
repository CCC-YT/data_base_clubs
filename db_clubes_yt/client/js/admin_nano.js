/*importar modulos/ librerías*/
import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Club_Nano, Miembro_Nano, Actividad_Nano } from '/imports/api/db_nano.js';

/*helper*/
Template.club_nano.helpers({
    clubNano(){
        return Club_Nano.find({})
    }
});

Template.miembro_nano.helpers({
    miembroNano(){
        return Miembro_Nano.find({})
    }
});

Template.actividad_nano.helpers({
    actividadNano(){
        return Actividad_Nano.find({})
    }
});

Template.club_nano_report.helpers({
    clubNanoReport(){
        return Club_Nano.find({})
    }
});

Template.miembro_nano_report.helpers({
    miembroNanoReport(){
        return Miembro_Nano.find({})
    }
});

Template.actividad_nano_report.helpers({
    actividadNanoReport(){
        return Actividad_Nano.find({})
    }
});

Template.miembro_nano.events({
    'click .del-miembro-nano': function(event){
        Miembro_Nano.remove({'_id':this._id});
    }
});

Template.actividad_nano.events({
    'click .del-actividad-nano': function(event){
        Actividad_Nano.remove({'_id':this._id});
    }
});

/*Filter bio members*/

Template.miembro_nano.onRendered(function(){
    $(document).ready(function(){
        $("#input_nano").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_nano tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});

Template.miembro_nano_report.onRendered(function(){
    $(document).ready(function(){
        $("#input_nano_report").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_nano_report tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});

Template.actividad_nano.onRendered(function(){
    $(document).ready(function(){
        $("#input_nano_act").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#table_nano_act tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});


Template.actividad_nano_report.onRendered(function(){
    $(document).ready(function(){
        $("#nanoReportActiv").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#tableNanoReportActiv tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});

/*Inserts from form */
Template.new_miembro_nano.events({
    'submit .js-add-miembro-nano':function(event){
        var ci, carrera, semestre, mail, phone, nomb, apel, estado, dir;
        ci = event.target.ci_nano.value;
        carrera = event.target.carrera_nano.value;
        semestre = event.target.semestre_nano.value;
        mail = event.target.email_nano.value;
        phone = event.target.phone_nano.value;
        nomb = event.target.nombre_nano.value;
        apel = event.target.apellido_nano.value;
        estado = event.target.estado_nano.value;
        dir = event.target.directiva_nano.value;
        //console.log('C.I: '+ci+' Nombre: '+nomb+' Phone: '+phone);

        Miembro_Nano.insert({
        _id: 200001,
        IdClub: 1001,
        CI: ci,
        Carrerar: carrera,
        Semestre: semestre,
        Correo: mail,
        Celular: phone,
        Nombres: nomb,
        Apellidos: apel,
        Estado: estado,
        Directiva: dir,
        datereg: new Date(),
        owner: Meteor.user()._id,
        });
        //alert('Saved!');
        return false;
    }
});

Template.new_actividad_nano.events({
	'submit .js-add-actividad-nano':function(event){
		var tipo, f_init, nomb, estado, f_fin, desc, id_cord, id_col;
		tipo = event.target.tipo_act_nano.value;
        f_init = event.target.finit_act_nano.value;
        nomb = event.target.nombre_act_nano.value;
        estado = event.target.estado_act_nano.value;
        f_fin = event.target.ffin_act_nano.value;
        desc = event.target.desc_act_nano.value;
        id_cord = event.target.coordinador_act_nano.value;
        id_col = event.target.colaborador_act_nano.value;
		//console.log(tipo, f_init, nomb, estado, f_fin, desc, id_cord, id_col);

		Actividad_Nano.insert({
		Tipo: tipo,
        Fecha_Inicio: f_init,
		Nombre: nomb,
        Estado: estado,
        Fecha_Fin: f_fin,
        Descripcion: desc,
        IdCoordinador: id_cord,
        IdColaboradores: id_col,
		datereg: new Date(),
		owner: Meteor.user()._id,
		});
		alert('Saved!');
		return false;
	}
});