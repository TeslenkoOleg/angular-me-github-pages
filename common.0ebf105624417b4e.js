"use strict";(self.webpackChunkangular_me_github_pages=self.webpackChunkangular_me_github_pages||[]).push([[592],{860:(T,d,u)=>{u.d(d,{V:()=>m});var n=u(274),c=u(895);function x(i,r,t,e,o,a,p){try{var l=i[a](p),s=l.value}catch(C){return void t(C)}l.done?r(s):Promise.resolve(s).then(e,o)}function g(i){return function(){var r=this,t=arguments;return new Promise(function(e,o){var a=i.apply(r,t);function p(s){x(a,e,o,p,l,"next",s)}function l(s){x(a,e,o,p,l,"throw",s)}p(void 0)})}}let y=(()=>{class i{constructor(){this.currentText="",this.speed=50,this.lineBreakDelay=500,this.terminalCursorClass="terminal-cursor",this.onTypingEnd=new n.vpe}ngOnInit(){var t=this;return g(function*(){yield t.typeText()})()}typeText(){var t=this;return g(function*(){for(let e=0;e<t.text.length;e++)t.currentText+=t.text[e],"\n"===t.text[e]&&(yield t.timeout(t.lineBreakDelay)),yield t.timeout(t.speed);t.terminalCursorClass="",t.onTypingEnd.emit(!0)})()}timeout(t){return g(function*(){return new Promise(e=>setTimeout(e,t))})()}static#n=this.\u0275fac=function(e){return new(e||i)};static#t=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-type-effect"]],inputs:{text:"text",speed:"speed"},outputs:{onTypingEnd:"onTypingEnd"},standalone:!0,features:[n.jDz],decls:3,vars:2,consts:[[1,"text",3,"innerText"],[3,"ngClass"]],template:function(e,o){1&e&&(n.TgZ(0,"div"),n._UZ(1,"span",0)(2,"span",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("innerText",o.currentText),n.xp6(1),n.Q6J("ngClass",o.terminalCursorClass))},dependencies:[c.ez,c.mk],styles:['.content[_ngcontent-%COMP%]{padding:20px;white-space:pre-wrap}p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;overflow:hidden}.text-container[_ngcontent-%COMP%]{display:flex}.text-container[_ngcontent-%COMP%]   .text-prefix-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.terminal-cursor[_ngcontent-%COMP%]{position:relative}.terminal-cursor[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:-15px;display:inline-block;background-color:#606060;vertical-align:top;width:8px;height:14px;animation:_ngcontent-%COMP%_blink 1s step-end infinite}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}']})}return i})();function f(i,r){if(1&i){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",3)(2,"div",4)(3,"span"),n._uU(4),n.qZA(),n.TgZ(5,"span"),n._uU(6,"\xa0"),n.qZA()(),n.TgZ(7,"div")(8,"app-type-effect",5),n.NdJ("onTypingEnd",function(){n.CHM(t);const o=n.oxw().$implicit,a=n.oxw();return n.KtG(a.onEndTyping(o.id))}),n.qZA()()(),n.BQk()}if(2&i){const t=n.oxw().$implicit;n.xp6(4),n.Oqu(t.prefix),n.xp6(4),n.Q6J("text",t.text)}}function _(i,r){if(1&i&&(n.TgZ(0,"div"),n.YNc(1,f,9,2,"ng-container",2),n._UZ(2,"br"),n.qZA()),2&i){const t=r.$implicit,e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.indexesInTypingProcess.includes(t.id))}}let m=(()=>{class i{constructor(){this.indexesInTypingProcess=[1],this.onEndTyping$=new n.vpe}onEndTyping(t){this.indexesInTypingProcess.push(t+1),this.onEndTyping$.emit(t)}static#n=this.\u0275fac=function(e){return new(e||i)};static#t=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-text-container-layout"]],inputs:{textArray:"textArray"},outputs:{onEndTyping$:"onEndTyping$"},standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[[1,"typing-main-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"typing-container"],[1,"typing-prefix-container"],[3,"text","onTypingEnd"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.YNc(1,_,3,1,"div",1),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngForOf",o.textArray))},dependencies:[c.ez,c.sg,c.O5,y],styles:[".typing-main-container[_ngcontent-%COMP%]{margin:20px 0 0 20px}.typing-main-container[_ngcontent-%COMP%]   .typing-container[_ngcontent-%COMP%]{display:flex}.typing-main-container[_ngcontent-%COMP%]   .typing-container[_ngcontent-%COMP%]   .typing-prefix-container[_ngcontent-%COMP%]{display:flex;min-width:150px;justify-content:flex-end}"]})}return i})()}}]);