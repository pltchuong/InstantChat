Ember.Handlebars.helper('formatDate', function(timestamp, format) {
  if(typeof format != 'string') format = '';
  return moment(timestamp).format(format);
});