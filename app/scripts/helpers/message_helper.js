Ember.Handlebars.helper('messageHelper', function(value, options) {
  var emoticons = options.data.view.get('controller').get('emoticons');
  
  // add emoticons
  if(!emoticons || emoticons == 'yahoo') {
    value = value
      .replace(/(:\))/gi,   '<img src="images/emoticons/yahoo/1.gif" />')
      .replace(/(:\()/gi,   '<img src="images/emoticons/yahoo/2.gif" />')
      .replace(/(;\))/gi,   '<img src="images/emoticons/yahoo/3.gif" />')
      .replace(/(:D)/gi,    '<img src="images/emoticons/yahoo/4.gif" />')
      .replace(/(;;\))/gi,  '<img src="images/emoticons/yahoo/5.gif" />')
      .replace(/(>:D<)/gi,  '<img src="images/emoticons/yahoo/6.gif" />')
      .replace(/(:-\/)/gi,  '<img src="images/emoticons/yahoo/7.gif" />')
      .replace(/(:x)/gi,    '<img src="images/emoticons/yahoo/8.gif" />')
      .replace(/(:">)/gi,   '<img src="images/emoticons/yahoo/9.gif" />')
      .replace(/(:P)/gi,    '<img src="images/emoticons/yahoo/10.gif" />')
      .replace(/(:-\*)/gi,  '<img src="images/emoticons/yahoo/11.gif" />')
      .replace(/(=\(\()/gi, '<img src="images/emoticons/yahoo/12.gif" />')
    ;
  } else {
    value = value
      .replace(/(:\))/gi,   '<img src="images/emoticons/skype/smile.gif" />')
      .replace(/(:\()/gi,   '<img src="images/emoticons/skype/sad.gif" />')
    ;
  }
  
  // remove bad words
  var filter = ['fuck', 'ass', 'shit'];
  filter.forEach(function(word) {
    value = value.replace(new RegExp('\\b' + word + '\\b', 'gi'), '*****');
  });
  
  // process something else
  
  return new Handlebars.SafeString(value);
});