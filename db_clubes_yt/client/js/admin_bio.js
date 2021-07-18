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