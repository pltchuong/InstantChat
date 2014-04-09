InstantChat.MessagesView = Ember.View.extend({
  scrollToBottom: function() {
    jQuery('.messages').scrollTop(jQuery('.messages')[0].scrollHeight);
  }.observes('controller.model.length')
});

InstantChat.SenderView = Ember.View.extend({
  keyUp: function(event) {
    this.get('controller').send('updateSender');
  }
});

InstantChat.MessageView = Ember.View.extend({
  keyPress: function(event) {
    if(!event.ctrlKey && event.keyCode === 13) {
      this.get('controller').send('sendMessage');
      this.get('controller').set('message', '');
      return false;
    }
  }
});

InstantChat.SendButtonView = Ember.View.extend({
  tagName: 'span',
  click: function() {
    this.get('controller').set('message', '');
  }
});