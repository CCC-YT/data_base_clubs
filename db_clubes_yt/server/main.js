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
  };

  //Users and roles
  if (Meteor.users.find().count() === 0){
    console.log("Inserting Users to Admin DB.");

    Accounts.createUser(
      {
        _id: "1",
        email: "admin@example.com",
        password: "admin",
        profile: { name: "admin" }
      }
    );

    Accounts.createUser(      
      {
        _id: "2",
        email: "admin_j@example.com",
        password: "admin_j",
        profile: { name: "admin_j" }
      }      
    );
    Accounts.createUser(
      {
        _id: "3",
        email: "writer_nano_1@example.com",
        password: "writer_nano_1",
        profile: { name: "writer_nano_1" }
      }
    );
    Accounts.createUser(      
      {
        _id: "4",
        email: "writer_nano_2@example.com",
        password: "writer_nano_2",
        profile: { name: "writer_nano_2" }
      }      
    );
    Accounts.createUser(
      {
        _id: "5",
        email: "writer_bio_1@example.com",
        password: "writer_bio_1",
        profile: { name: "writer_bio_1" }
      }
    );
    Accounts.createUser(      
      {
        _id: "6",
        email: "writer_bio_2@example.com",
        password: "writer_bio_2",
        profile: { name: "writer_bio_2" }
      }
    );
    Accounts.createUser(
      {
        _id: "7",
        email: "writer_ccc_1@example.com",
        password: "writer_ccc_1",
        profile: { name: "writer_ccc_1" }
      }      
    );
    Accounts.createUser(
      {
        _id: "8",
        email: "writer_ccc_2@example.com",
        password: "writer_ccc_2",
        profile: { name: "writer_ccc_2" }
      }      
    );
    Accounts.createUser(
      {
        _id: "9",
        email: "writer_men_1@example.com",
        password: "writer_men_1",
        profile: { name: "writer_men_1" }
      }      
    );
    Accounts.createUser(
      {
        _id: "10",
        email: "writer_men_2@example.com",
        password: "writer_men_2",
        profile: { name: "writer_men_2" }
      }      
    );
    Accounts.createUser(
      {
        _id: "11",
        email: "report_nano@example.com",
        password: "report_nano",
        profile: { name: "report_nano" }
      }      
    );
    Accounts.createUser(
      {
        _id: "12",
        email: "report_bio@example.com",
        password: "report_bio",
        profile: { name: "report_bio" }
      }
    );
    Accounts.createUser(
      {
        _id: "13",
        email: "report_ccc@example.com",
        password: "report_ccc",
        profile: { name: "report_ccc" }
      }
    );
    Accounts.createUser(
      {
        _id: "14",
        email: "report_men@example.com",
        password: "report_men",
        profile: { name: "report_men" }
      }
    )
  };

  //Create roles
  if (Meteor.roleAssignment.find().count() === 0) {
    console.log("Checking Roles and Users.")

    Roles.createRole('admin');
    Roles.createRole('adminj');
    Roles.createRole('writer_nano_1');
    Roles.createRole('writer_nano_2');
    Roles.createRole('writer_bio_1');
    Roles.createRole('writer_bio_2');
    Roles.createRole('writer_ccc_1');
    Roles.createRole('writer_ccc_2');
    Roles.createRole('writer_men_1');
    Roles.createRole('writer_men_2');
    Roles.createRole('report_nano');
    Roles.createRole('report_bio');
    Roles.createRole('report_ccc');
    Roles.createRole('report_men');
  };

  //console.log(Meteor.users.find().count())

  //console.log(Meteor.users.find({"_id": '6dQY7E8tPkoQbDjTY'}));

  //Add users to role
  Roles.addUsersToRoles('PRhwnPDxJXRag654R', 'admin');
  Roles.addUsersToRoles('WYRPaDHy9ZzSN94Ke', 'adminj');
  Roles.addUsersToRoles('iSAsKNpa4izo7PmFY', 'writer_nano_1');
  Roles.addUsersToRoles('5EhPB9QPbWpcBTM3F', 'writer_nano_2');
  Roles.addUsersToRoles('Q6goma9kY5dr48Nkc', 'writer_bio_1');
  Roles.addUsersToRoles('GydXb5DRqiudaM9Dx', 'writer_bio_2');
  //Roles.addUsersToRoles('', 'writer_ccc_1');
  //Roles.addUsersToRoles('', 'writer_ccc_2');
  //Roles.addUsersToRoles('', 'writer_men_1');
  //Roles.addUsersToRoles('', 'writer_men_2');
  Roles.addUsersToRoles('bjiBvjBs82ZHNpdHi', 'report_nano');
  Roles.addUsersToRoles('66jyh2a7LSZLiKpFb', 'report_bio');
  //Roles.addUsersToRoles('', 'report_ccc');
  //Roles.addUsersToRoles('', 'report_men');
});
