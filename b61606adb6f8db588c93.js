(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{164:function(e,t,n){},218:function(e,t,n){"use strict";var _=n(164);n.n(_).a},225:function(e,t,n){"use strict";n.r(t);var _={name:"EventItem",components:{TopicWrapper:function(){return n.e(3).then(n.bind(null,219))}},props:{event:{type:Object,required:!0}}},v=(n(218),n(17)),component=Object(v.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("topic-wrapper",{staticClass:"eventItem__link",attrs:{event:e.event}},[n("div",{staticClass:"card is-flex eventItem__card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content eventItem__content"},[n("p",{staticClass:"title is-6"},[e._v("\n            "+e._s(e.event.display)+"\n          ")]),e._v(" "),e.event.language||e.event.level||e.event.venue.name?n("p",{staticClass:"subtitle is-6"},[e.event.remote_presentation?n("span",{staticClass:"eventItem__content__info"},[n("span",{staticClass:"eventItem__content__info__type_remote"},[e._v("Remote Session")])]):e._e(),e._v(" "),1!=e.event.remote_presentation?n("span",{staticClass:"eventItem__content__info"},[n("span",{staticClass:"eventItem__content__info__type_in_person"},[e._v("In-person Session")])]):e._e(),e._v(" "),e.event.venue.name?n("span",{staticClass:"eventItem__content__info"},[e._v("\n              "+e._s(e.event.venue.name)+"\n            ")]):e._e(),e._v(" "),e.event.language?n("span",{staticClass:"eventItem__content__info"},[n("span",[e._v(e._s(e.event.language))]),e._v(" "),e._l(e.event.language_sym_interp,function(t){return n("span",{key:t,staticClass:"eventItem__content__info__remark"},[e._v("\n                ("+e._s(t)+" interpretation)\n              ")])})],2):e._e(),e._v(" "),e.event.level?n("span",{staticClass:"eventItem__content__info"},[e._v("\n              "+e._s(e.event.level)+"\n            ")]):e._e()]):e._e(),e._v(" "),n("p",[e._v("\n            "+e._s(e.event.time.startTime)+" - "+e._s(e.event.time.endTime)+"\n          ")])])])]),e._v(" "),e.event.speakers&&e.event.speakers.length>0?n("div",{staticClass:"card-footer eventItem__speakers"},e._l(e.event.speakers,function(t){return n("div",{key:t.name,staticClass:"eventItem__speaker"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:t.thumbnail}})])]),e._v(" "),n("div",{staticClass:"media-content eventItem__content"},[n("p",{staticClass:"title eventItem__speaker__name"},[e._v("\n              "+e._s(t.name)+"\n            ")]),e._v(" "),n("p",{staticClass:"subtitle eventItem__speaker__meta"},[t.community?n("span",{staticClass:"eventItem__speaker__info"},[e._v("\n                "+e._s(t.community)+"\n              ")]):e._e(),e._v(" "),t.country?n("span",{staticClass:"eventItem__speaker__info"},[e._v("\n                "+e._s(t.country)+"\n              ")]):e._e()])])])])}),0):e._e()])])},[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=b61606adb6f8db588c93.js.map