InstantChat.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('message');
  },
  actions: {
    skypeEmo: function() {
      this.get('controller').set('emoticons', 'skype');
      
      $.each(Ember.View.views, function(i, view){
        if(view.viewName == 'messages') view.rerender();
      });
    },
    yahooEmo: function() {
      this.get('controller').set('emoticons', 'yahoo');
      
      $.each(Ember.View.views, function(i, view){
        if(view.viewName == 'messages') view.rerender();
      });
    }
  }
});

