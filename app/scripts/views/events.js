InstantChat.MessagesView = Ember.View.extend({
  scrollToBottom: function() {
    jQuery('.messages').scrollTop(jQuery('.messages')[0].scrollHeight);
  }.observes('controller.model.length')
});

InstantChat.MessageTextArea = Ember.ContenteditableView.extend({
  keyPress: function(event) {
    if(!event.shiftKey && event.keyCode === 13) {
      this.get('controller').set('message', this.get('value'));
      this.get('controller').send('sendMessage');
      this.set('value', this.$().html(''));
      return false;
    }
  },
  paste: function(event) {
    var _e = event.originalEvent;
    var _this = this;

    /*
      Credits: 
        https://github.com/vladmalik/pasteimage/
        http://joelb.me/blog/2011/code-snippet-accessing-clipboard-images-with-javascript/
        http://stackoverflow.com/questions/11850970/javascript-blob-object-to-base64
        http://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c
    */

    // If Webkit
    if (_e.clipboardData.items) {
      var items = _e.clipboardData.items;
      if (items) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            var blob = items[i].getAsFile();
            var reader = new FileReader();
            reader.onload = function(event) {
              var image = document.createElement('img');
              image.src = event.target.result;
              _this.set('value', _this.$().html(image));
            };
            reader.readAsDataURL(blob);
          }
        }
      } else { 
        alert("Webkit - Nothing found in the clipboard!");
      }
    }
  }
});

InstantChat.SenderTextField = Ember.TextField.extend({
  keyUp: function(event) {
    this.get('targetObject').send('updateSender');
  }
});