Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push(' <div>\n  <div class="container">\n    <nav class="navbar navbar-default" role="navigation">\n      <div class="container-fluid">\n        <div class="navbar-header">\n          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <a class="navbar-brand" href="#">InstantChat</a>\n        </div>\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n          <ul class="nav navbar-nav navbar-right">\n            <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=39EEE83QU5KAW" target="_blank">Donate</a></li>\n            <li><a href="http://imphan.com" target="_blank">About</a></li>\n            <li><a href="https://github.com/pltchuong/InstantChat" target="_blank">Source Code</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n  \n  <div class="container" id="main">\n    <div class="row">\n      <div>\n        <div class="col-md-9 col-md-push-3">\n          '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('\n        </div>\n        <div class="col-md-3 col-md-pull-9">\n          <div class="well">\n            <h3>Main features:</h3>\n            <ul>\n              <li><b>Totally anonymous:</b> Nobody know each other, and you don\'t know who is watching your message.</li>\n              <li><b>Absolutely safe:</b> I don\'t store any data into server, not tracking your IP, your browser, anything.</li>\n              <li><b>For fun:</b> Since nothing stored, it\'s all gone if you try to refresh.</li>\n            </ul>\n            <h3>Additional features:</h3>\n            <ul>\n              <li>Support Skype and Yahoo emoticons</li>\n              <li>Bad word filtering</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return b.buffer.push('\n    <div class="messages" style="height: 200px; overflow: auto;">\n      <dl class="dl-horizontal">\n        '),e={},f={},d=c.each.call(a,"model",{hash:{},inverse:q.noop,fn:q.program(2,g,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n      </dl>\n    </div>\n  "),h}function g(a,b){var d,e,f,g,h="";return b.buffer.push('\n          <dt><small><span class="text-primary">'),e={},f={},b.buffer.push(o(c._triageMustache.call(a,"sender",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("</span></small></dt>\n          <dd>"),e={},f={},g={hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(o((d=c.messageHelper||a.messageHelper,d?d.call(a,"message",g):p.call(a,"messageHelper","message",g)))),b.buffer.push("</dd>\n        "),h}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n          "),e={type:a,id:a,name:a,"class":a,value:a},f={type:"STRING",id:"STRING",name:"STRING","class":"STRING",value:"ID"},g={hash:{type:"text",id:"sender",name:"sender","class":"form-control",value:"sender"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(o((d=c.input||a.input,d?d.call(a,g):p.call(a,"input",g)))),b.buffer.push("\n        "),h}function i(a,b){var d,e,f,g,h="";return b.buffer.push("\n          "),e={id:a,name:a,"class":a,rows:a,value:a},f={id:"STRING",name:"STRING","class":"STRING",rows:"STRING",value:"ID"},g={hash:{id:"message",name:"message","class":"form-control",rows:"3",value:"message"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(o((d=c.textarea||a.textarea,d?d.call(a,g):p.call(a,"textarea",g)))),b.buffer.push("\n        "),h}function j(a,b){var d,e,f="";return b.buffer.push("\n              <button "),d={},e={},b.buffer.push(o(c.action.call(a,"sendMessage",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' class="btn btn-primary">Send</button>\n            '),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var k,l,m,n="",o=this.escapeExpression,p=c.helperMissing,q=this;return e.buffer.push("<div>\n  "),l={viewName:b},m={viewName:"STRING"},k=c.view.call(b,"InstantChat.MessagesView",{hash:{viewName:"messages"},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n  \n  <br/>\n  \n  <form class="form-horizontal" role="form">\n    <div class="form-group">\n      <label for="sender" class="col-sm-2 control-label">Your name</label>\n      <div class="col-sm-10">\n        '),m={},l={},k=c.view.call(b,"InstantChat.SenderView",{hash:{},inverse:q.noop,fn:q.program(4,h,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="message" class="col-sm-2 control-label">Your message</label>\n      <div class="col-sm-10">\n        '),m={},l={},k=c.view.call(b,"InstantChat.MessageView",{hash:{},inverse:q.noop,fn:q.program(6,i,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n      </div>\n    </div>\n    <div class="form-group">\n      <div class="col-sm-offset-2 col-sm-10">\n        <div class="row">\n          <div class="col-sm-6 text-left">\n            '),m={},l={},k=c.view.call(b,"InstantChat.SendButtonView",{hash:{},inverse:q.noop,fn:q.program(8,j,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n          </div>\n          <div class="col-sm-6 text-right">\n            <button '),m={},l={},e.buffer.push(o(c.action.call(b,"skypeEmo",{hash:{},contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e}))),e.buffer.push(' class="btn btn-info">Skype</button>\n            <button '),m={},l={},e.buffer.push(o(c.action.call(b,"yahooEmo",{hash:{},contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e}))),e.buffer.push(' class="btn btn-info">Yahoo</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>'),n});