(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],p=0,f=[];p<o.length;p++)a=o[p],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={1:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="./";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([5,0]),n()})({5:function(t,e,n){t.exports=n("Vtdi")},EDI0:function(t,e,n){},N7OB:function(t,e,n){"use strict";var r=n("U974"),i=n.n(r);i.a},U974:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),i=n("P6ep"),s=n.n(i),a=(n("jgpq"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("brainfuck-header"),n("brainfuck-engine"),n("brainfuck-footer")],1)}),o=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-dark"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        Brainfuck Online Simulator\n      ")]),n("h2",{staticClass:"code"},[t._v("\n        ++++[++++>---<]>-.---[-----\x3e+<]>-.+++[->+++<]>++.++++++++.+++++.--------.-[---\x3e+<]>--.+[->+++<]>+.++++++++.-[++>---<]>+.[--\x3e+++++<]>-.--[---\x3e+<]>-.--.---.+++++\n        .---------.--[---\x3e+<]>-.>-[---\x3e+<]>--.+[----\x3e+++++<]>.++++.++++++++.---------.-----------.--[---\x3e+<]>-.-----.+++.\n      ")])])])])}],l={},p=l,f=n("KHd+"),h=Object(f["a"])(p,u,c,!1,null,null,null),d=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"engine",attrs:{height:"auto"}},[n("b-field",{attrs:{label:"Code:"}},[n("b-input",{attrs:{type:"textarea"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),n("b-collapse",{staticClass:"card",attrs:{open:t.visualizingMemory},on:{open:function(e){t.visualizingMemory=!0},close:function(e){t.visualizingMemory=!1}},scopedSlots:t._u([{key:"trigger",fn:function(e){return n("div",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("\n        Memory:\n      ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{pack:"fas",icon:e.open?"caret-up":"caret-down"}})],1)])}}])},[n("div",{staticClass:"card-content"},[t.visualizingMemory?n("div",{staticClass:"content",staticStyle:{height:"150px","overflow-y":"scroll"}},t._l(t.memory,function(e,r){return n("div",{key:r,staticClass:"is-cell code",class:r==t.pointer?"is-current":"is-not-current"},[t._v("\n          "+t._s(t.showValue(e))+"\n        ")])})):t._e()]),n("div",{staticClass:"card-footer"},[n("nav",{staticClass:"breadcrumb is-centered card-footer-item",attrs:{"aria-label":"breadcrumbs"}},[n("ul",[n("li",{class:0==t.memoryShowMode?"is-active":""},[n("a",{on:{click:function(e){t.memoryShowMode=0}}},[t._v("dec")])]),n("li",{class:1==t.memoryShowMode?"is-active":""},[n("a",{on:{click:function(e){t.memoryShowMode=1}}},[t._v("hex")])]),n("li",{class:2==t.memoryShowMode?"is-active":""},[n("a",{on:{click:function(e){t.memoryShowMode=2}}},[t._v("char")])])])])])]),n("div",{staticClass:"level is-mobile",staticStyle:{margin:"12px 0px"}},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{disabled:t.isRunning&&!t.isPausing},on:{click:function(e){t.isPausing?t.resume():t.run()}}},[n("b-icon",{attrs:{pack:"fas",icon:"play"}})],1)]),n("div",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{disabled:!t.isRunning||t.isPausing},on:{click:t.pause}},[n("b-icon",{attrs:{pack:"fas",icon:"pause"}})],1)]),n("div",{staticClass:"control"},[n("button",{staticClass:"button",attrs:{disabled:!t.isRunning},on:{click:t.stop}},[n("b-icon",{attrs:{pack:"fas",icon:"stop"}})],1)])])]),n("div",{staticClass:"level-item"},[n("b-tooltip",{staticClass:"is-fullwidth",attrs:{type:"is-dark",label:"Interval: "+t.interval+" ms",position:"is-right",always:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],staticClass:"slider",staticStyle:{"margin-right":"0.5em"},attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:t.interval},on:{__r:function(e){t.interval=e.target.value}}})])],1)])]),n("form",{staticStyle:{margin:"12px 0px"},on:{submit:function(e){return e.preventDefault(),t.input(e)}}},[n("b-field",[n("b-input",{attrs:{disabled:!t.isRunning},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-dark",attrs:{disabled:!t.isRunning}},[t._v("Input")])])],1)],1),n("b-field",{attrs:{label:"Input history:"}},[n("div",{staticClass:"field"},[n("b-input",{ref:"inputHistory",attrs:{type:"textarea",rows:3,readonly:"",disabled:""},on:{input:function(e){t.autoScrollBottom("inputHistory",e)}},model:{value:t.inputHistory,callback:function(e){t.inputHistory=e},expression:"inputHistory"}}),n("div",{staticClass:"control has-addons-right"},[n("button",{staticClass:"button is-dark is-small",on:{click:t.clearInputHistory}},[n("b-icon",{attrs:{pack:"fas",icon:"times"}})],1)])],1)]),n("b-field",{attrs:{label:"Output:",type:t.hasError?"is-danger":""}},[n("div",{staticClass:"field"},[n("b-input",{ref:"output",attrs:{type:"textarea",rows:10,value:t.hasError?t.errorMessage:t.outputMessage,readonly:"",disabled:""},on:{input:function(e){t.autoScrollBottom("output",e)}}}),n("div",{staticClass:"control has-addons-right"},[n("button",{staticClass:"button is-dark is-small",on:{click:t.clearOutput}},[n("b-icon",{attrs:{pack:"fas",icon:"times"}})],1)])],1)])],1)},v=[],m=(n("VpUO"),n("a1Th"),n("f3/d"),n("rE2o"),n("ioFf"),n("rGqo"),n("HEwt"),n("ls82"),n("MECJ")),y=(n("yt8O"),n("9AAn"),n("xmWZ")),k=n("qpph"),x=n("rArP"),g=n.n(x),w=1e3,C=256,_=function(t){return new Promise(function(e){return setTimeout(e,t)})},M=function(){function t(){Object(y["a"])(this,t),this.interval=0,this.shouldPause=!1,this.shouldStop=!1,this.execListener=function(){},this.outputListener=function(){},this.errorListener=function(){},this.finishListener=function(){},this.inputQueue=new g.a.Queue,this.parenMap=new Map}return Object(k["a"])(t,[{key:"run",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._init(e);case 2:return t.next=4,this._run(e);case 4:this.finishListener();case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_init",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.shouldPause=!1,this.shouldStop=!1,this.inputQueue.clear(),this.parenMap.clear(),n=new g.a.Stack,r=0;case 6:if(!(r<e.length)){t.next=17;break}t.t0=e[r],t.next="["===t.t0?10:"]"===t.t0?12:14;break;case 10:return n.push(r),t.abrupt("break",14);case 12:return n.isEmpty()||(i=n.pop(),s=r,this.parenMap.set(i,s),this.parenMap.set(s,i)),t.abrupt("break",14);case 14:r++,t.next=6;break;case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_run",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(n=Array.from({length:w},function(){return 0}),r=0,i=0,s=0;s<w;s++)this.execListener(s,n);case 4:if(!(i<e.length)){t.next=59;break}if(!this.shouldStop){t.next=7;break}return t.abrupt("return");case 7:if(!this.shouldPause){t.next=12;break}return t.next=10,_(100);case 10:t.next=7;break;case 12:if(!(r<0||r>=w)){t.next=15;break}return this.errorListener("Error: out of memory"),t.abrupt("return");case 15:t.t0=e[i],t.next=">"===t.t0?18:"<"===t.t0?20:"+"===t.t0?22:"-"===t.t0?24:"."===t.t0?26:","===t.t0?30:"["===t.t0?39:"]"===t.t0?45:51;break;case 18:return r++,t.abrupt("break",52);case 20:return r--,t.abrupt("break",52);case 22:return n[r]=(n[r]+1)%C,t.abrupt("break",52);case 24:return n[r]=(n[r]-1+C)%C,t.abrupt("break",52);case 26:return this.outputListener(String.fromCharCode(n[r])),t.next=29,_(0);case 29:return t.abrupt("break",52);case 30:if(!this.inputQueue.isEmpty()){t.next=37;break}return t.next=33,_(100);case 33:if(!this.shouldStop){t.next=35;break}return t.abrupt("return");case 35:t.next=30;break;case 37:return n[r]=this.inputQueue.dequeue(),t.abrupt("break",52);case 39:if(0!=n[r]){t.next=44;break}if(i=this.parenMap.get(i),"undefined"!==typeof i){t.next=44;break}return this.errorListener("Error: matching `]` command is not found"),t.abrupt("return");case 44:return t.abrupt("break",52);case 45:if(0==n[r]){t.next=50;break}if(i=this.parenMap.get(i),"undefined"!==typeof i){t.next=50;break}return this.errorListener("Error: matching `[` command is not found"),t.abrupt("return");case 50:return t.abrupt("break",52);case 51:return t.abrupt("continue",56);case 52:if(this.execListener(r,n),!(this.interval>0)){t.next=56;break}return t.next=56,_(this.interval);case 56:i++,t.next=4;break;case 59:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"pause",value:function(){this.shouldPause=!0}},{key:"resume",value:function(){this.shouldPause=!1}},{key:"stop",value:function(){this.shouldStop=!0}},{key:"setInterval",value:function(t){this.interval=t}},{key:"setExecListener",value:function(t){this.execListener=t}},{key:"setOutputListener",value:function(t){this.outputListener=t}},{key:"setErrorListener",value:function(t){this.errorListener=t}},{key:"setFinishListener",value:function(t){this.finishListener=t}},{key:"addInput",value:function(t){this.inputQueue.add((t%C+C)%C)}},{key:"bufferSize",get:function(){return w}}]),t}(),S=(n("/BFf"),{data:function(){return{code:"+++++++++[>++++++++>+++++++++++>+++++<<<-]>.>++.+++++++..+++.>-.------------.<++++++++.--------.+++.------.--------.>+.",inputText:"",inputHistory:"",interpreter:new M,outputMessage:"",errorMessage:"",isRunning:!1,isPausing:!1,interval:0,pointer:0,memory:[],memoryShowMode:0,visualizingMemory:!1}},computed:{hasError:function(){return 0!=this.errorMessage.length}},watch:{interval:function(t){this.interpreter.setInterval(t)}},mounted:function(){var t=this;this.interpreter.setOutputListener(function(e){return t.outputMessage+=e}),this.interpreter.setExecListener(function(e,n){t.pointer=e,t.$set(t.memory,e,n[e])}),this.interpreter.setErrorListener(function(e){return t.errorMessage=e}),this.interpreter.setFinishListener(function(){t.isRunning=!1,t.isPausing=!1}),this.memory=Array.from({length:this.interpreter.bufferSize},function(){return 0})},methods:{run:function(){this.isRunning=!0,this.inputHistory="",this.outputMessage="",this.errorMessage="",this.interpreter.run(this.code)},stop:function(){this.resume(),this.interpreter.stop()},pause:function(){this.isPausing=!0,this.interpreter.pause()},resume:function(){this.interpreter.resume(),this.isPausing=!1},input:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=this.inputText[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;this.interpreter.addInput(s.charCodeAt(0))}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.inputHistory+=this.inputText+"\n",this.inputText=""},autoScrollBottom:function(t,e){var n=this.$refs[t].$refs.textarea;n.value=e,n.scrollTop=n.scrollHeight},clearInputHistory:function(){this.inputHistory=""},clearOutput:function(){this.outputMessage=""},showValue:function(t){switch(this.memoryShowMode){case 0:return t;case 1:return"0x"+("00"+t.toString(16)).slice(-2);case 2:return 32<=t&&t<=126?String.fromCodePoint(t):"0x"+("00"+t.toString(16)).slice(-2)}}}}),O=S,L=(n("wJlY"),Object(f["a"])(O,b,v,!1,null,null,null)),E=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",[t._v("\n        Brainfuck online editor, interpreter, and simulator :)\n      ")]),t._m(0),n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control"},[n("a",{staticClass:"button",attrs:{href:"https://github.com/ArkArk/brainfuck-online-simulator",target:"_blank"}},[n("b-icon",{attrs:{pack:"fab",icon:"github"}}),n("span",[t._v("GitHub")])],1)]),n("div",{staticClass:"control"},[n("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/arkark_",target:"_blank"}},[n("b-icon",{attrs:{pack:"fab",icon:"twitter"}}),n("span",[t._v("Twitter")])],1)]),n("span",{staticStyle:{"font-size":"xx-small",color:"#fff"}},[t._v("\n          -[-------\x3e+<]>---.++++++.-----------.++++++.>--[--\x3e+++++<]>.-[->+++++<]>.[---\x3e+<]>----.[--\x3e+<]>-----.---.-[-----\x3e+<]>--.--------.-[---\x3e+<]>--.+[->+++<]>+.++++++++.------------.++++++++++.+[--\x3e+<]>.-----[->++<]>-.+++++++.-[---\x3e+<]>--.-------.[---\x3e+<]>+++.\n        ")])])])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        The source code is licensed under "),n("a",{attrs:{href:"https://opensource.org/licenses/MIT"}},[t._v("MIT")]),n("br"),t._v("© 2018 - Ark\n      ")])}],T={data:function(){return{}}},H=T,R=(n("N7OB"),Object(f["a"])(H,P,j,!1,null,"210187b5",null)),I=R.exports,B={name:"app",components:{BrainfuckHeader:d,BrainfuckEngine:E,BrainfuckFooter:I}},$=B,z=(n("ZL7j"),Object(f["a"])($,a,o,!1,null,null,null)),A=z.exports;r["a"].config.productionTip=!1,r["a"].use(s.a),new r["a"]({render:function(t){return t(A)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var r=n("EDI0"),i=n.n(r);i.a},nNW1:function(t,e,n){},wJlY:function(t,e,n){"use strict";var r=n("nNW1"),i=n.n(r);i.a}});
//# sourceMappingURL=app.1905c88f.js.map