(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{125:function(t,n,s){},266:function(t,n,s){"use strict";var c=s(125);s.n(c).a},300:function(t,n,s){"use strict";s.r(n);var c=s(91),r={name:"grid-demo2",data:function(){return{content:'\n <l-row gutter="20">\n     <l-col class="col" span="12">12</l-col>\n     <l-col class="col" span="12">12</l-col>\n </l-row>\n\n <l-row gutter="20">\n     <l-col class="col" span="8">8</l-col>\n     <l-col class="col" span="8">8</l-col>\n     <l-col class="col" span="8">8</l-col>\n </l-row>\n\n <l-row gutter="20">\n     <l-col class="col" span="6">6</l-col>\n     <l-col class="col" span="6">6</l-col>\n     <l-col class="col" span="6">6</l-col>\n     <l-col class="col" span="6">6</l-col>\n </l-row>\n                '.trim()}},components:{"l-col":s(92).a,"l-row":c.a}},a=(s(266),s(1)),e=Object(a.a)(r,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("l-row",{attrs:{gutter:"20"}},[s("l-col",{staticClass:"col",attrs:{span:"12"}},[t._v("12")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"12"}},[t._v("12")])],1),t._v(" "),s("l-row",{attrs:{gutter:"20"}},[s("l-col",{staticClass:"col",attrs:{span:"8"}},[t._v("8")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"8"}},[t._v("8")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"8"}},[t._v("8")])],1),t._v(" "),s("l-row",{attrs:{gutter:"20"}},[s("l-col",{staticClass:"col",attrs:{span:"6"}},[t._v("6")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"6"}},[t._v("6")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"6"}},[t._v("6")]),t._v(" "),s("l-col",{staticClass:"col",attrs:{span:"6"}},[t._v("6")])],1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.content))])])],1)}),[],!1,null,"4deed117",null);n.default=e.exports},44:function(t,n,s){"use strict";var c=s(11),r=s(16),a=s(31),e=s(69),l=s(22),o=s(14),i=s(49).f,u=s(47).f,f=s(15).f,p=s(65).trim,v=c.Number,h=v,g=v.prototype,d="Number"==a(s(41)(g)),_="trim"in String.prototype,m=function(t){var n=l(t,!1);if("string"==typeof n&&n.length>2){var s,c,r,a=(n=_?n.trim():p(n,3)).charCodeAt(0);if(43===a||45===a){if(88===(s=n.charCodeAt(2))||120===s)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+n}for(var e,o=n.slice(2),i=0,u=o.length;i<u;i++)if((e=o.charCodeAt(i))<48||e>r)return NaN;return parseInt(o,c)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof v&&(d?o((function(){g.valueOf.call(s)})):"Number"!=a(s))?e(new h(m(n)),s,v):m(n)};for(var w,b=s(12)?i(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;b.length>N;N++)r(h,w=b[N])&&!r(v,w)&&f(v,w,u(h,w));v.prototype=g,g.constructor=v,s(20)(c,"Number",v)}},50:function(t,n,s){},51:function(t,n,s){},65:function(t,n,s){var c=s(26),r=s(23),a=s(14),e=s(66),l="["+e+"]",o=RegExp("^"+l+l+"*"),i=RegExp(l+l+"*$"),u=function(t,n,s){var r={},l=a((function(){return!!e[t]()||"​"!="​"[t]()})),o=r[t]=l?n(f):e[t];s&&(r[s]=o),c(c.P+c.F*l,"String",r)},f=u.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(i,"")),t};t.exports=u},66:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},89:function(t,n,s){"use strict";var c=s(50);s.n(c).a},90:function(t,n,s){"use strict";var c=s(51);s.n(c).a},91:function(t,n,s){"use strict";s(37),s(76),s(77),s(44);var c={name:"GuluRow",props:{gutter:[Number,String],align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.gutter&&this.$children.forEach((function(n){n.gutter=t.gutter}))}},r=(s(89),s(1)),a=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"4909ff07",null);n.a=a.exports},92:function(t,n,s){"use strict";var c=s(97),r=(s(44),s(76),s(77),s(37),s(86),function(t){var n=Object.keys(t),s=!0;return n.forEach((function(t){["span","offset"].includes(t)||(s=!1)})),s}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:r},npc:{type:Object,validator:r},pc:{type:Object,validator:r},wpc:{type:Object,validator:r}},data:function(){return{gutter:0}},methods:{createClass:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.ipad,r=this.npc,a=this.pc,e=this.wpc,l=this.createClass;return[].concat(Object(c.a)(l({span:t,offset:n})),Object(c.a)(l(s,"ipad-")),Object(c.a)(l(r,"npc-")),Object(c.a)(l(a,"pc-")),Object(c.a)(l(e,"wpc-")))},colStyle:function(){if(this.gutter)return{marginLeft:this.gutter/2+"px",marginRight:this.gutter/2+"px"}}}},e=(s(90),s(1)),l=Object(e.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"4b7c57ff",null);n.a=l.exports}}]);