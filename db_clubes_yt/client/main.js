//import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
//update module
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/dynamic'

//update modules
import '/imports/lib/router.js';
import 'meteor/aldeed:autoform/dynamic';

import './main.html';
import './html/admin_bio.html';
import './html/admin_nano.html';
import './html/report/bio.html';
import './html/report/nano.html';

import './js/admin_bio.js';
import './js/admin_nano.js';

//users 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//update 
async function init () {
  await AutoForm.load()
  await AutoFormThemeBootstrap4.load()
  // theme is imported, you can now make the form available
  // you could use a reactive var that resolves to true here
  // or any other mechanism you like to use to reactively activate the form
  AutoForm.setDefaultTemplate('bootstrap4')
}

(function () {
  init()
    .catch(e => console.error('[autoForm]: init failed - ', e))
    .then(() => console.info('[autoForm]: initialized'))
})()

/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/
