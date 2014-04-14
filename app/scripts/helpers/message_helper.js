Ember.Handlebars.helper('messageHelper', function(value, options) {
  var emoticons = options.data.view.get('controller').get('emoticons');
  emoticons = 'skype';
  
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
      .replace(/(\]:\))|(\>:\))|(\(grin\))/gi,                          '<img src="images/emoticons/skype/eg.gif" />')
      .replace(/(\(dance\))|(\\o\/)|(\\:d\/)/gi,                        '<img src="images/emoticons/skype/dance.gif" />')
      .replace(/(:\))|(:=\))|(:-\))/gi,                                 '<img src="images/emoticons/skype/smile.gif" />')
      .replace(/(:\()|(:=\()|(:-\()/gi,                                 '<img src="images/emoticons/skype/sad.gif" />')
      .replace(/(:d)|(:=d)|(:-d)/gi,                                    '<img src="images/emoticons/skype/laugh.gif" />')
      .replace(/(8=\))|(8-\))|(b=\))|(b-\))|(\(cool\))/gi,              '<img src="images/emoticons/skype/cool.gif" />')
      .replace(/(;\))|(;-\))|(;=\))/gi,                                 '<img src="images/emoticons/skype/wink.gif" />')
      .replace(/(:o)|(:=o)|(:-o)/gi,                                    '<img src="images/emoticons/skype/surprised.gif" />')
      .replace(/(;\()|(;-\()|(;=\()/gi,                                 '<img src="images/emoticons/skype/cry.gif" />')
      .replace(/(\(sweat\))|(\(:\|)/gi,                                 '<img src="images/emoticons/skype/sweat.gif" />')
      .replace(/(:\|)|(:=\|)|(:-\|)/gi,                                 '<img src="images/emoticons/skype/speechless.gif" />')
      .replace(/(:\*)|(:=\*)|(:-\*)/gi,                                 '<img src="images/emoticons/skype/kiss.gif" />')
      .replace(/(:p)|(:=p)|(:-p)/gi,                                    '<img src="images/emoticons/skype/tongueout.gif" />')
      .replace(/(\(yn\))/gi,                                            '<img src="images/emoticons/skype/fingerscrossed.gif" />')
      .replace(/(\(blush\))|(:\$)|(:-\$)|(:=\$)|(:">)/gi,               '<img src="images/emoticons/skype/blush.gif" />')
      .replace(/(:\^\))/gi,                                             '<img src="images/emoticons/skype/wonder.gif" />')
      .replace(/(\|-\))|(I-\))|(I=\))|\(snooze\)/gi,                    '<img src="images/emoticons/skype/sleepy.gif" />')
      .replace(/(\|\()|(\|-\()|(\|=\()/gi,                              '<img src="images/emoticons/skype/dull.gif" />')
      .replace(/(\(inlove\))/gi,                                        '<img src="images/emoticons/skype/inlove.gif" />')
      .replace(/(\(yawn\))/gi,                                          '<img src="images/emoticons/skype/yawn.gif" />')
      .replace(/(\(puke\))|(:&)|(:-&)|(:=&)/gi,                         '<img src="images/emoticons/skype/puke.gif" />')
      .replace(/(\(doh\))/gi,                                           '<img src="images/emoticons/skype/doh.gif" />')
      .replace(/(:@)|(:-@)|(:=@)|(x\()|(x-\()|(x=\()/gi,                '<img src="images/emoticons/skype/angry.gif" />')
      .replace(/(\(wasntme\))/gi,                                       '<img src="images/emoticons/skype/wasntme.gif" />')
      .replace(/(\(party\))/gi,                                         '<img src="images/emoticons/skype/party.gif" />')
      .replace(/(\(facepalm\))/gi,                                      '<img src="images/emoticons/skype/facepalm.gif" />')
      .replace(/(:s)|(:-s)|(:=s)/gi,                                    '<img src="images/emoticons/skype/worry.gif" />')
      .replace(/(\(mm\))/gi,                                            '<img src="images/emoticons/skype/mmm.gif" />')
      .replace(/(8-\|)|(b-\|)|(8\|)|(b\|)|(8=\|)|(b=\|)|(\(nerd\))/gi,  '<img src="images/emoticons/skype/nerdy.gif" />')
      .replace(/(:x)|(:-x)|(:=x)|(:#)|(:-#)|(:=#)/gi,                   '<img src="images/emoticons/skype/lipssealed.gif" />')
      .replace(/(\(hi\))/gi,                                            '<img src="images/emoticons/skype/hi.gif" />')
      .replace(/(\(devil\))/gi,                                         '<img src="images/emoticons/skype/devil.gif" />')
      .replace(/(\(angel\))/gi,                                         '<img src="images/emoticons/skype/angel.gif" />')
      .replace(/(\(envy\))/gi,                                          '<img src="images/emoticons/skype/envy.gif" />')
      .replace(/(\(wait\))/gi,                                          '<img src="images/emoticons/skype/wait.gif" />')
      .replace(/(\(bear\))|(\(hug\))/gi,                                '<img src="images/emoticons/skype/hug.gif" />')
      .replace(/(\(makeup\))|(\(kate\))/gi,                             '<img src="images/emoticons/skype/makeup.gif" />')
      .replace(/(\(giggle\))|(\(chuckle\))/gi,                          '<img src="images/emoticons/skype/giggle.gif" />')
      .replace(/(\(clap\))/gi,                                          '<img src="images/emoticons/skype/clap.gif" />')
      .replace(/(\(think\))|(:\?)|(:-\?)|(:=\?)/gi,                     '<img src="images/emoticons/skype/think.gif" />')
      .replace(/(\(bow\))/gi,                                           '<img src="images/emoticons/skype/bow.gif" />')
      .replace(/(\(rofl\))/gi,                                          '<img src="images/emoticons/skype/rofl.gif" />')
      .replace(/(\(whew\))/gi,                                          '<img src="images/emoticons/skype/whew.gif" />')
      .replace(/(\(happy\))/gi,                                         '<img src="images/emoticons/skype/happy.gif" />')
      .replace(/(\(smirk\))/gi,                                         '<img src="images/emoticons/skype/smirk.gif" />')
      .replace(/(\(nod\))/gi,                                           '<img src="images/emoticons/skype/nod.gif" />')
      .replace(/(\(shake\))/gi,                                         '<img src="images/emoticons/skype/shake.gif" />')
      .replace(/(\(emo\))/gi,                                           '<img src="images/emoticons/skype/emo.gif" />')
      .replace(/(\(y\))|(\(ok\))/gi,                                    '<img src="images/emoticons/skype/yes.gif" />')
      .replace(/(\(n\))/gi,                                             '<img src="images/emoticons/skype/no.gif" />')
      .replace(/(\(handshake\))/gi,                                     '<img src="images/emoticons/skype/handshake.gif" />')
      .replace(/(\(h\))|(\(l\))/gi,                                     '<img src="images/emoticons/skype/heart.gif" />')
      .replace(/(\(tmi\))/gi,                                           '<img src="images/emoticons/skype/tmi.gif" />')
      .replace(/(\(heidy\))/gi,                                         '<img src="images/emoticons/skype/heidy.gif" />')
      .replace(/(\(f\))/gi,                                             '<img src="images/emoticons/skype/flower.gif" />')
      .replace(/(\(rain\))|(\(london\))|(\(st\))/gi,                    '<img src="images/emoticons/skype/rain.gif" />')
      .replace(/(\(sun\))/gi,                                           '<img src="images/emoticons/skype/sun.gif" />')
      .replace(/(\(music\))/gi,                                         '<img src="images/emoticons/skype/music.gif" />')
      .replace(/(\(coffee\))/gi,                                        '<img src="images/emoticons/skype/coffee.gif" />')
      .replace(/(\(pizza\))|(\(pi\))/gi,                                '<img src="images/emoticons/skype/pizza.gif" />')
      .replace(/(\(cash\))|(\(mo\))|(\(\$\))/gi,                        '<img src="images/emoticons/skype/cash.gif" />')
      .replace(/(\(muscle\))|(\(flex\))/gi,                             '<img src="images/emoticons/skype/muscle.gif" />')
      .replace(/(\(\^\))|(\(cake\))/gi,                                 '<img src="images/emoticons/skype/cake.gif" />')
      .replace(/(\(beer\))/gi,                                          '<img src="images/emoticons/skype/beer.gif" />')
      .replace(/(\(d\))/gi,                                             '<img src="images/emoticons/skype/drink.gif" />')
      .replace(/(\(ninja\))/gi,                                         '<img src="images/emoticons/skype/ninja.gif" />')
      .replace(/(\(\*\))/gi,                                            '<img src="images/emoticons/skype/star.gif" />')
      .replace(/(\(tumbleweed\))/gi,                                    '<img src="images/emoticons/skype/tumbleweed.gif" />')
      .replace(/(\(bandit\))/gi,                                        '<img src="images/emoticons/skype/bandit.gif" />')
      .replace(/(\(call\))/gi,                                          '<img src="images/emoticons/skype/call.gif" />')
      .replace(/(\(talk\))/gi,                                          '<img src="images/emoticons/skype/talk.gif" />')
      .replace(/(\(u\))/gi,                                             '<img src="images/emoticons/skype/brokenheart.gif" />')
      .replace(/(\(o\))|(\(time\))/gi,                                  '<img src="images/emoticons/skype/time.gif" />')
      .replace(/(\(e\))|(\(m\))/gi,                                     '<img src="images/emoticons/skype/mail.gif" />')
      .replace(/(\(\~\))|(\(film\))|(\(movie\))/gi,                     '<img src="images/emoticons/skype/movie.gif" />')
      .replace(/(\(mp\))|(\(ph\))/gi,                                   '<img src="images/emoticons/skype/phone.gif" />')
      .replace(/(\(drunk\))/gi,                                         '<img src="images/emoticons/skype/drunk.gif" />')
      .replace(/(\(punch\))/gi,                                         '<img src="images/emoticons/skype/punch.gif" />')
      .replace(/(\(smoking\))|(\(smoke\))|(\(ci\))/gi,                  '<img src="images/emoticons/skype/smoke.gif" />')
      .replace(/(\(toivo\))/gi,                                         '<img src="images/emoticons/skype/toivo.gif" />')
      .replace(/(\(rock\))/gi,                                          '<img src="images/emoticons/skype/rock.gif" />')
      .replace(/(\(headbang\))|(\(banghead\))/gi,                       '<img src="images/emoticons/skype/headbang.gif" />')
      .replace(/(\(bug\))/gi,                                           '<img src="images/emoticons/skype/bug.gif" />')
      .replace(/(\(poolparty\))/gi,                                     '<img src="images/emoticons/skype/poolparty.gif" />')
      .replace(/(\(bertlett\))/gi,                                      '<img src="images/emoticons/skype/bertlett.gif" />')
      .replace(/(\(finger\))/gi,                                        '<img src="images/emoticons/skype/finger.gif" />')
      .replace(/(\(wfh\))/gi,                                           '<img src="images/emoticons/skype/wfh.gif" />')
      .replace(/(\(priidu\))/gi,                                        '<img src="images/emoticons/skype/priidu.gif" />')
      .replace(/(\(mooning\))/gi,                                       '<img src="images/emoticons/skype/mooning.gif" />')
      .replace(/(\(malthe\))/gi,                                        '<img src="images/emoticons/skype/malthe.gif" />')
      .replace(/(\(lalala\))/gi,                                        '<img src="images/emoticons/skype/lalala.gif" />')
      .replace(/(\(oliver\))/gi,                                        '<img src="images/emoticons/skype/oliver.gif" />')
      .replace(/(\(swear\))/gi,                                         '<img src="images/emoticons/skype/swear.gif" />')
      .replace(/(\(highfive\))/gi,                                      '<img src="images/emoticons/skype/highfive.gif" />')
      .replace(/(\(waiting\))/gi,                                       '<img src="images/emoticons/skype/waiting.gif" />')
      .replace(/(\(hollest\))/gi,                                       '<img src="images/emoticons/skype/hollest.gif" />')
      .replace(/(\(wtf\))/gi,                                           '<img src="images/emoticons/skype/wtf.gif" />')
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