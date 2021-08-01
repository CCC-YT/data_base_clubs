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