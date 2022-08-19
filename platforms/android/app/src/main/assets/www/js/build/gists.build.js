"use strict";(self.webpackChunkcom_foxdebug_acode=self.webpackChunkcom_foxdebug_acode||[]).push([[235],{7223:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(89184),r=t.n(a),s=t(30011),i=t(37519),c=t(46677),o=t(71530),l=t(93101),d=t(12921),p=t(44596),u=t(6700),g=function(e){t.e(145).then(t.bind(t,70488)).then((function(n){(0,n.default)(e)}))},f=t(59661),m=t(64413),v=t(38972),h=function(e){var n=r()("span",{className:"icon search",attr:{action:"search"}}),t=(0,v.Z)("more_vert","toggle-menu"),a=(0,o.Z)("Gists"),h=i.Z.credentials,Z=null,b=u.Z.GitHub(),y=b.getUser(),k=cordova.file.externalDataDirectory+".gists",w=(0,l.Z)(s.Z.render("<li action='create'>\r\n  <span class='text'>new gist</span>\r\n  <span class='icon add'></span>\r\n</li>\r\n<li action='reload'>\r\n  <span class='text'>{{reload}}</span>\r\n  <span class='icon refresh'></span>\r\n</li>",strings),{top:"8px",right:"8px",toggle:t,transformOrigin:"top right"});function x(n){var t=a.querySelector("#gists");t&&t.remove(),(Z=e?e(n):n).map((function(e){var n=Object.values(e.files),t=n.length>0?n[0].filename:e.id;e.private=!e.public,e.name=t,e.files_count=n.length}));var c=r().parse(s.Z.render('<div class="main list" empty-msg="{{msg}}" id="gists">{{#gists}}\r\n  <div class="list-item" action="gist" data-url="{{html_url}}" owner="{{owner.login}}" name="{{name}}" id="{{id}}">\r\n    <span class="octicon main-icon" {{#private}}private{{/private}}></span>\r\n    <div class="container">\r\n      <div class="text">\r\n        <span>{{name}}</span>\r\n      </div>\r\n      <small class="value">\r\n        <div class="group">\r\n          <span class="octicon octicon-file-code"></span>\r\n          <span class="text">{{files_count}}</span>\r\n        </div>\r\n        <div class="group">\r\n          <span class="octicon octicon-comment"></span>\r\n          <span class="text">{{comments}}</span>\r\n        </div>\r\n      </small>\r\n    </div>\r\n    <span class="icon open_in_browser" action="open"></span>\r\n  </div>\r\n  {{/gists}}</div>',{gists:Z,msg:strings["empty folder message"]}));c.addEventListener("click",_),a.body=c,a.isConnected||(app.appendChild(a),i.Z.showAd(),actionStack.push({id:"repos",action:function(){i.Z.hideAd(),a.hide()}}))}function _(e){var n,t,a,r=e.target,s=r.getAttribute("action");switch(["reload","create"].includes(s)&&w.hide(),s){case"gist":t=r.id,(a=gistRecord.get(t))?g(a):(p.Z.loader.create("",strings.loading+"..."),b.getGist(t).read().then((function(e){var n=e.data;a=gistRecord.add(n),g(a)})).catch((function(e){e&&p.Z.alert(strings.error,e.toString())})).finally((function(){p.Z.loader.destroy()})));break;case"open":system.openInBrowser(r.parentElement.getAttribute("data-url"));break;case"reload":S(),gistRecord.reset();break;case"share":break;case"create":n={id:parseInt(Math.random()*(new Date).getTime()).toString(16),files:{},public:!1},p.Z.select("",["public","private"],{default:"priavate"}).then((function(e){return"public"===e&&(n.public=!0),p.Z.prompt(strings["enter file name"],strings["new file"],"text",{match:f.Z.FILE_NAME_REGEX,required:!0})})).then((function(e){var t={filename:e,content:""};n.files[e]=t;var a=gistRecord.add(n,!0);editorManager.addNewFile(e,{type:"gist",text:t.content,isUnsaved:!1,record:a,render:!0}),actionStack.pop(),actionStack.pop()}))}}function S(){p.Z.loader.create("Gists",strings.loading+"..."),y.listGists().then((function(e){var n=e.data,t=h.encrypt(JSON.stringify(n));d.Z.writeFile(k,t,!0,!1).catch((function(e){toast(strings.error),console.error(e)})),x(n)})).catch((function(e){e.response?(0,c.Z)():console.error(e)})).finally((function(){p.Z.loader.destroy()}))}w.addEventListener("click",_),a.header.append(n,t),n.onclick=function(){(0,m.Z)(a.querySelector(".list"))},d.Z.readFile(k).then((function(e){var n=h.decrypt(i.Z.decodeText(e.data));x(JSON.parse(n))})).catch((function(e){p.Z.loader.create("GitHub",strings.loading+"..."),S()}))}}}]);