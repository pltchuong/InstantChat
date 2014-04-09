InstantChat.ApplicationAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(fixtures, query, type) {
    return fixtures.filter(function(item) {
      for(var prop in query) {
        if(item[prop] !== query[prop]) return false;
      }
      return true;
    });
  }
});
