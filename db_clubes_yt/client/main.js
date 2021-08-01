//import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './html/admin_bio.html';
import './html/admin_nano.html';
import './html/report/bio.html';
import './html/report/nano.html';

import './js/admin_bio.js';
import './js/admin_nano.js';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

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
