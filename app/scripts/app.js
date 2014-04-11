var InstantChat = window.InstantChat = Ember.Application.create({
  ready: function() {
    socket      = io.connect('http://instantchat.imphan.com/');
    fingerprint = new Fingerprint().get();
  }
});

/* Order and include as you please. */
require('../index');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers/*');
require('scripts/router');