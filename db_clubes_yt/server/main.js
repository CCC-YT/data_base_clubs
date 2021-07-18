/*Importar Modulos/ librerias*/
import { Meteor } from 'meteor/meteor';
import {Club_Bio, Miembro_Bio, Actividad_Bio} from '/imports/api/db_bio';
import {Club_Nano, Miembro_Nano, Actividad_Nano} from '/imports/api/db_nano';

/*Main */
Meteor.startup(() => {
  // code to run on server at startups
  // import data only when Bio collections are empty
  if (Club_Bio.find().count() === 0) {
      console.log("Importing private/bio_club.json to db")

      var data_club_bio = JSON.parse(Assets.getText("bio_club.json"));
      
      //console.log(data_club_bio);

      data_club_bio.forEach(function (item, index, array) {
        Club_Bio.insert(item);
      })
  };

  if (Miembro_Bio.find().count() === 0) {
    console.log("Importing private/miembros_biomedica.json to db")

    var data_miembro_bio = JSON.parse(Assets.getText("miembros_bio.json"));

    //console.log(data_miembro_bio);

    data_miembro_bio.forEach(function (item, index, array) {
      Miembro_Bio.insert(item);
    })
  };

  if (Actividad_Bio.find().count() === 0) {
    console.log("Importing private/actividades_biomedica.json to db")

    var data_actividad_bio = JSON.parse(Assets.getText("actividades_bio.json"));

    //console.log(data_actividad_bio);

    data_actividad_bio.forEach(function (item, index, array) {
      Actividad_Bio.insert(item);
    })
  };

  if (Club_Nano.find().count() === 0) {
    console.log("Importing private/bio_club.json to db")

    var data_club_nano = JSON.parse(Assets.getText("nano_club.json"));
    
    //console.log(data_club_bio);

    data_club_nano.forEach(function (item, index, array) {
      Club_Nano.insert(item);
    })
  };

  if (Miembro_Nano.find().count() === 0) {
    console.log("Importing private/miembros_biomedica.json to db")

    var data_miembro_nano = JSON.parse(Assets.getText("miembros_nano.json"));

    //console.log(data_miembro_bio);

    data_miembro_nano.forEach(function (item, index, array) {
      Miembro_Nano.insert(item);
    })
  };

  if (Actividad_Nano.find().count() === 0) {
    console.log("Importing private/actividades_biomedica.json to db")

    var data_actividad_nano = JSON.parse(Assets.getText("actividades_nano.json"));

    //console.log(data_actividad_bio);

    data_actividad_nano.forEach(function (item, index, array) {
      Actividad_Nano.insert(item);
    })
  }
});
