InstantChat.Message = DS.Model.extend({
  message     : DS.attr('string'),
  sender      : DS.attr('string'),
  fingerprint : DS.attr('number'),
  
  meta        : DS.attr('string'),
  created     : DS.attr('date'),
  updated     : DS.attr('date')
});

InstantChat.Message.FIXTURES = [];