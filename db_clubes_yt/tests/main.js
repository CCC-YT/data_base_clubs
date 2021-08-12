import assert from "assert";
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Meteor } from 'meteor/meteor';

describe("db_clubes_yt", function () {
  it("package.json is correct for optimaL performance", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "db_clubes_yt");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });

    it("generate data", function() {
      const Test_Club = new Meteor.Collection('test_club');
      const Test_Miembro = new Meteor.Collection('test_miembro');
      const Test_Actividad = new Meteor.Collection('test_actividad');

      Factory.define('test_club', Test_Club, {
        _id: "1000",
        Vision: "Y su visión es constituirse como un grupo de renombre nacional que impulsa la participación de la academia, los centros de salud, y la parte privada, para el desarrollo de la Ingeniería Biomédica en el país.",
        Objetivo: "El Club de Ingeniería Biomédica nace con el objetivo de divulgar la Ingeniería Biomédica a nivel institucional y nacional, además se preocupa por el aprendizaje extracurricular de sus miembros, estudiantes de la Universidad Yachay Tech. Para esto, el Club promueve eventos de alto nivel académico para impulsar el desarrollo científico y tecnológico en el campo de la Ingeniería Biomédica en el país.",
        Nombre: "Club de Ingeniería Biomédica",
        Mision: "Su misión es Fomentar y propiciar el desarrollo de conocimiento a estudiantes y profesionales, de esta manera motivar el crecimiento de la Ingeniería Biomédica a nivel nacional.",
        Correo: "clubbiomedica@yachaytech.edu.ec",
        date: new Date(),
      });

      Factory.define('test_miembro', Test_Miembro, {
        _id: "100018",
        IdClub: Factory.get('test_club'),
        CI: "1724972714",
        Carrera: "Ingeniería Biomédica",
        Semestre: "OCTAVO",
        Correo: "daniel.amaguana@yachaytech.edu.ec",
        Nombres: "Daniel Alfredo",
        Apellidos: "Amaguaña Marmol",
        Comision: "Embajadores",
        Directiva: "Viceprecidente",
        date: new Date(),
      });

      Factory.define('test_actividad', Test_Actividad, {
        _id: "104",
        Tipo: "Online",
        Fecha_Inicio: "2021-08-11",
        Nombre: "Clausura del Club",
        Estado: "True",
        Fecha_Fin: "2021-08-11",
        Descripcion: "Entrega de certificados, conversatorio e integración",
        IdCoordinador: Factory.get('test_miembro'),
        IdColaboradores: Factory.get('test_miembro'),
        date: new Date(),
      }); 
      //const test_data = Factory.create('test_club');
    });

    it("reset data", function() {
      beforeEach(function () {
        resetDatabase();
      });
    });
  }
});
