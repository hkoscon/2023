(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{143:function(n,e,t){"use strict";t.d(e,"a",function(){return C}),t.d(e,"b",function(){return _}),t.d(e,"d",function(){return w}),t.d(e,"c",function(){return T});var r=t(12),o=(t(45),t(61),t(147),t(90),t(23)),c=(t(24),t(148)),f=t.n(c),l=t(149),d=t.n(l),v=t(144),h=t.n(v),m=t(150),y=t.n(m);function C(){return f.a.get("/2023/data/timetable.json").then(function(n){return{days:n.data.days}})}function _(){return f.a.get("/2023/data/event_info.json").then(function(n){return{conference:n.data.conference}})}function w(){return C().then(function(n){var e=n.days,t=new Map;return y()(e,function(n){return y()(n.timeslots,function(n){return n.events})}).filter(function(n){return!(!n||!n.topic)&&(!t.has(n.internal)&&(t.set(n.internal,!0),!0))}).sort(function(n,e){return n.display.localeCompare(e.display)})})}function T(n){return C().then(function(e){var t=e.days,map=new Map;return t.forEach(function(n){var e=n.day,t=n.date;n.timeslots.forEach(function(n){n.events.forEach(function(n){if(n.topic){var c=n.time,f=c.startTime,l=c.endTime;map.set(function(n){if("object"!==Object(o.a)(n))return"";if("string"!=typeof n.internal)return n.replace(/[^_\W]+/g,"","").replace(" ","-").toLowerCase();var u=h.a.parse(n.internal);return d.a.basename(u.pathname)}(n),Object(r.a)({day:e,date:t,startTime:f,endTime:l},n))}})})}),map.get(n)})}},155:function(n,e,t){},206:function(n,e,t){"use strict";var r=t(155);t.n(r).a},239:function(n,e,t){"use strict";t.r(e);var r=t(143),o={name:"TopicsPage",head:{title:"Topics | Hong Kong Open Source Conference 2023",meta:[{hid:"og:title",property:"og:title",content:"Topics | Hong Kong Open Source Conference 2023"},{hid:"description",name:"description",content:"We are pleased to announce the CFP results. We have received 60 submissions before our deadline March 4..."}]},components:{PageBanner:function(){return t.e(3).then(t.bind(null,246))},TopicWrapper:function(){return t.e(4).then(t.bind(null,232))}},asyncData:function(){return Object(r.d)().then(function(n){return{topics:n}})}},c=(t(206),t(13)),component=Object(c.a)(o,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("main",{staticClass:"topicsPage"},[t("page-banner",{attrs:{title:"Topics"}}),n._v(" "),t("div",{staticClass:"section"},[t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("p",[n._v("\n          We are pleased to announce the CFP results. We have received 17 submissions before\n          our deadline.\n        ")]),n._v(" "),t("p",[n._v("\n          Here is the list of the accepted CFP topics, along with some invited sessions &\n          confirmed sponsor sessions:\n        ")]),n._v(" "),t("div",{staticClass:"topics"},[t("ul",n._l(n.topics,function(e){return t("li",{key:e.internal},[t("topic-wrapper",{attrs:{event:e}},[t("span",[n._v(n._s(e.display))])])],1)}),0)])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=cdc7bb59de4fb12ff766.js.map