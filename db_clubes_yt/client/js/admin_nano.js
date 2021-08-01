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