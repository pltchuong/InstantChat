InstantChat.IndexController = Ember.ObjectController.extend({
  
  init: function() {
    var store = this.store;
    
    socket.on('sendMessage', function(message) {
      store.createRecord('message', {
        fingerprint : message.fingerprint,
        sender      : message.sender,
        message     : message.message
      }).save();
      
      // TODO: break MVC ?
      document.title = message.message;
    });
    
    socket.on('updateSender', function(sender, fingerprint) {
      store.find('message', {fingerprint: fingerprint}).then(function(record) {
        record.content.forEach(function(message) {
          message.set('sender', sender);
        });
      });
    });
  },
  
  actions: {
  
    sendMessage: function() {
      if(!this.get('message')) return;
    
      store = this.store;
      var message = {
        fingerprint : fingerprint,
        sender      : this.get('sender') ? this.get('sender') : fingerprint,
        message     : this.get('message')
      };
      
      store.createRecord('message', message).save();
      socket.emit('sendMessage', message);
      
      // TODO: break MVC ?
      document.title = message.message;
    },
    
    updateSender: function() {
      var store = this.store;
      var sender = this.get('sender') ? this.get('sender') : fingerprint;
      
      store.find('message', {fingerprint: fingerprint}).then(function(record) {
        record.content.forEach(function(message) {
          message.set('sender', sender);
        });
      });
      
      socket.emit('updateSender', sender, fingerprint);
    }
  }
});