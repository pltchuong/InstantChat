var InstantChat = window.InstantChat = Ember.Application.create({
  ready: function() {
    socket      = io.connect('http://localhost:9000/');
    fingerprint = new Fingerprint().get();
  },
  customEvents: {
    paste: "paste",
    drop: "drop"
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