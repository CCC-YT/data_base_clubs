import { Meteor } from 'meteor/meteor';

//import database of members and activities from mentors
import  { Club_Mentores, Miembros_Mentores, Actividad_Mentores } from '/imports/api/db_mentores';

//import database of members and activities from ccc-yt
import  { miembros_CCCYT, activi_CCCYT } from '/imports/api/db_ccc_yt';

Meteor.startup(() => {
  // code to run on server at startup
  
  // Club Mentores
  if (Club_Mentores.find().count() === 0){
    console.log("Importing private/club_mentores.json to db")

    // read your file as a json string (assuming it's in the private dir)
    var json = JSON.parse(Assets.getText('club_mentores.json'));

    json.forEach(function(item){
      Club_Mentores.insert(item)
    })
  }

  //MENTORES MIEMBROS
  if (Miembros_Mentores.find().count() === 0){
    console.log("Importing private/miembros_mentores.json to db")

    // read your file as a json string (assuming it's in the private dir)
    var json = JSON.parse(Assets.getText('miembros_mentores.json'));

    json.forEach(function(item){
      Miembros_Mentores.insert(item)
    })
  }
  
  //MENTORES ACTIVIDADES
  if (Actividad_Mentores.find().count() === 0){
    console.log("Importing private/actividades_mentores.json to db")

    // read your file as a json string (assuming it's in the private dir)
    var json = JSON.parse(Assets.getText('actividades_mentores.json'));

    json.forEach(function(item){
      Actividad_Mentores.insert(item)
    })
  }
});
