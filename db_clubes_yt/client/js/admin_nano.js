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