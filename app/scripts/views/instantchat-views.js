InstantChat.MessagesView = Ember.View.extend({
  scrollToBottom: function() {
    $('.messages').scrollTop($('.messages')[0].scrollHeight);
  }.observes('controller.model.length')
});

InstantChat.MessageDate = Ember.View.extend({
  tagName: 'small',
  attributeBindings: ['title'],
  title: function() {
    return moment(this.get('data').get('created')).format('dddd, MMMM D, YYYY hh:mm A');
  }.property()
});

InstantChat.MessageSender = Ember.View.extend({
  tagName: 'small',
  classNameBindings: ['isAuthor:text-danger'],
  attributeBindings: ['title'],
  isAuthor: function() {
    return fingerprint == this.get('data').get('fingerprint');
  }.property(),
  title: function() {
    return this.get('data').get('sender');
  }.property('data.sender')
});

InstantChat.SenderTextField = Ember.TextField.extend({
  keyUp: function(event) {
    this.get('targetObject').send('updateSender');
  }
});

InstantChat.MessageTextArea = Ember.ContenteditableView.extend({

  keyPress: function(event) {
    if(!event.shiftKey && event.keyCode === 13) {
      this.get('controller').set('message', this.$().html());
      this.get('controller').send('sendMessage');
      this.set('value', this.$().html(''));
      return false;
    }
  },

  paste: function(event) {
    /*
      Credits: 
        https://github.com/vladmalik/pasteimage/
        http://joelb.me/blog/2011/code-snippet-accessing-clipboard-images-with-javascript/
        http://stackoverflow.com/questions/11850970/javascript-blob-object-to-base64
        http://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c
    */
    var _e = event.originalEvent;
    var _this = this;
    var items = _e.clipboardData.items;
    if (items) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          var blob = items[i].getAsFile();
          var reader = new FileReader();
          reader.onload = function(event) {
            _this.$().append('<img src="' + event.target.result + '" />');
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  },

  drop: function(event) {
     /*
      Credits: 
        http://stackoverflow.com/questions/23548745/drag-and-drop-image-file-into-contenteditable-div-works-fine-in-ff-fails-miser
    */
    var _e = event.originalEvent;
    var _this = this;
    var files = _e.dataTransfer.files;
    if (files) {
      for (var i = 0; i < files.length; i++) {
        if (files[i].type.indexOf("image") !== -1) {
          var reader = new FileReader();
          reader.onload = function(event) {
            _this.$().append('<img src="' + event.target.result + '" />');
          };
          reader.readAsDataURL(files[i]);
        }
      }
    }
    return false;
  }

});