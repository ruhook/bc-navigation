(window.webpackJsonp=window.webpackJsonp||[]).push([["loginVip"],{1146:function(t,e,i){},"1b10":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,visibleItemCount:{type:Number,default:5},itemHeight:{type:Number,default:44}}},2373:function(t,e,i){},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),o=i("c31d"),r=i("a142"),a=i("ad06"),c=i("7744"),l=i("dfaf"),h=Object(r.h)("field"),u=h[0],d=h[1];e.a=u({inheritAttrs:!1,props:Object(o.a)({},l.a,{error:Boolean,leftIcon:String,rightIcon:String,readonly:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(r.c)(this.value)&&!this.readonly},listeners:function(){return Object(o.a)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){void 0===t&&(t=this.$refs.input);var e=t.value,i=this.$attrs.maxlength;return"number"===this.type&&Object(r.c)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),e},onInput:function(t){this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClickLeftIcon:function(){this.$emit("click-left-icon")},onClickRightIcon:function(){this.$emit("click-icon"),this.$emit("click-right-icon"),this.onIconClick&&this.onIconClick()},onClear:function(t){t.preventDefault(),this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf(".");48<=e&&e<=57||46===e&&i||45===e||t.preventDefault()}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(r.e)(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e={ref:"input",class:d("control",this.inputAlign),domProps:{value:this.value},attrs:Object(o.a)({},this.$attrs,{readonly:this.readonly}),on:this.listeners};return"textarea"===this.type?t("textarea",s()([{},e])):t("input",s()([{attrs:{type:this.type}},e]))},renderLeftIcon:function(){var t=this.$createElement;if(this.slots("left-icon")||this.leftIcon)return t("div",{class:d("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(a.a,{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots;if(e("right-icon")||e("icon")||this.rightIcon||this.icon)return t("div",{class:d("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||e("icon")||t(a.a,{attrs:{name:this.rightIcon||this.icon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return i("label")&&(s.title=function(){return i("label")}),t(c.a,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,titleClass:d("label",n)},class:d((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:s},[t("div",{class:d("body")},[this.renderInput(),this.showClear&&t(a.a,{attrs:{name:"clear"},class:d("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:d("button")},[i("button")])]),this.errorMessage&&t("div",{class:d("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"5f5f":function(t,e,i){"use strict";i("68ef"),i("a526")},"740b":function(t,e,i){"use strict";i.r(e);var n,s,o=(i("c3a6"),i("ad06")),r=(i("5f5f"),i("f253")),a=(i("8a58"),i("e41f")),c=(i("66b9"),i("b650")),l=(i("be7f"),i("565f")),h=i("cebc"),u=(i("7f7f"),i("96cf"),i("3b8d")),d={data:function(){return{accountNo:"",name:"",password:"",copypassword:"",addressDetails:"",mobile:"",code:"",province:"省",provinceList:[],provinceShow:!1,provinceCode:null,city:"市",cityList:[],cityShow:!1,cityCode:null,area:"区",areaList:[],areaShow:!1,orgId:null,orgType:3,codeSrc:"/api/member/nologin/getCodeImg",referrerId:""}},metaInfo:{title:"注册会员"},created:function(){this.referrerId="",this._getAddress()},methods:{_postRegister:(s=Object(u.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e={accountNo:this.accountNo,name:this.name,password:this.password,confirmPassword:this.copypassword,orgId:this.orgId,address:this.addressDetails,phone:this.mobile,code:this.code}).accountNo&&e.name&&e.password&&e.confirmPassword&&e.phone&&e.code){t.next=4;break}return this.$toast("请检查您的输入，红色星号项都为必填项！"),t.abrupt("return");case 4:return t.next=6,this.$api.postRegister(e);case 6:t.sent,this.$toast("注册成功！"),this.initDate();case 10:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)}),_getAddress:(n=Object(u.a)(regeneratorRuntime.mark(function t(){var e,i,n,s,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<o.length&&void 0!==o[0]?o[0]:3,i=1<o.length?o[1]:void 0,n={orgType:e,parentOrgCode:i},i||delete n.parentOrgCode,t.next=6,this.$api.getAddress(n);case 6:s=t.sent,this.resetAreaData(s.resParam,e);case 9:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),resetAreaData:function(t,e){var i=t.map(function(t){return Object(h.a)({},t,{code:t.orgCode,text:t.orgName})});3===e&&(this.provinceList=i),4===e&&(this.cityList=i),5===e&&(this.areaList=i)},changeCode:function(){this.codeSrc="/api/member/nologin/getCodeImg?".concat((new Date).getTime())},openAddress:function(t){if(3===(this.orgType=t)&&(this.provinceShow=!0),4===t){if(!this.provinceCode)return void this.$toast("请您先选择省份！");this._getAddress(4,this.provinceCode),this.cityShow=!0}if(5===t){if(!this.provinceCode)return void this.$toast("请您先选择城市！");this._getAddress(5,this.cityCode),this.areaShow=!0}},confirmArea:function(t){3===this.orgType?(this.province=t.orgName,this.provinceCode=t.code):4===this.orgType?(this.city=t.orgName,this.cityCode=t.code):5===this.orgType&&(this.area=t.orgName,this.orgId=t.code),this.cancelArea()},cancelArea:function(){this.provinceShow=this.cityShow=this.areaShow=!1},initDate:function(){this.accountNo="",this.name="",this.password="",this.copypassword="",this.addressDetails="",this.mobile="",this.code="",this.province="省",this.provinceList=[],this.provinceShow=!1,this.provinceCode=null,this.city="市",this.cityList=[],this.cityShow=!1,this.cityCode=null,this.area="区",this.areaList=[],this.areaShow=!1,this.orgId=null,this.orgType=3,this.changeCode()}},watch:{province:function(){this.city="市",this.area="区",this.cityCode=null,this.orgId=null},city:function(){this.area="区",this.orgId=null}},components:{Field:l.a,myButton:c.a,Popup:a.a,Picker:r.a,Icon:o.a}},f=(i("c3e4"),i("2877")),p=Object(f.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-vip child-warp"},[i("div",{staticClass:"input-warp"},[i("field",{attrs:{type:"text",label:"用户名：","label-align":"right",placeholder:"请输入用户名",required:"",clearable:""},model:{value:e.accountNo,callback:function(t){e.accountNo=t},expression:"accountNo"}}),i("field",{attrs:{type:"text",label:"姓名：","label-align":"right",placeholder:"请输入姓名",required:"",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("field",{attrs:{type:"password",label:"密码：","label-align":"right",placeholder:"请输入密码",required:"",clearable:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("field",{attrs:{type:"password",label:"确认密码：","label-align":"right",placeholder:"请确认密码",required:"",clearable:""},model:{value:e.copypassword,callback:function(t){e.copypassword=t},expression:"copypassword"}}),i("field",{staticClass:"type",attrs:{"label-align":"right",label:"地址："}},[i("div",{staticClass:"select",attrs:{slot:"button"},slot:"button"},[i("div",{on:{click:function(t){return e.openAddress(3)}}},[i("span",[e._v(e._s(e.province))]),i("icon",{staticClass:"icon",attrs:{name:"arrow-down"}})],1),i("div",{on:{click:function(t){return e.openAddress(4)}}},[i("span",[e._v(e._s(e.city))]),i("icon",{staticClass:"icon",attrs:{name:"arrow-down"}})],1),i("div",{on:{click:function(t){return e.openAddress(5)}}},[i("span",[e._v(e._s(e.area))]),i("icon",{staticClass:"icon",attrs:{name:"arrow-down"}})],1)])]),i("field",{attrs:{type:"text",label:"详细地址：","label-align":"right",placeholder:"请输入详细地址",clearable:""},model:{value:e.addressDetails,callback:function(t){e.addressDetails=t},expression:"addressDetails"}}),i("field",{attrs:{type:"number",label:"手机号：","label-align":"right",placeholder:"请输入手机号",required:"",clearable:"",maxlength:"11"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),i("field",{staticClass:"code-warp",attrs:{type:"text",label:"验证码：","label-align":"right",placeholder:"请输入验证码                ",required:"",clearable:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[i("div",{attrs:{slot:"button"},slot:"button"},[i("img",{attrs:{src:e.codeSrc},on:{click:e.changeCode}})])])],1),i("my-button",{staticClass:"button",attrs:{type:"info"},on:{click:e._postRegister}},[e._v("注册用户")]),i("popup",{attrs:{position:"bottom"},model:{value:e.provinceShow,callback:function(t){e.provinceShow=t},expression:"provinceShow"}},[i("picker",{attrs:{"show-toolbar":"",columns:e.provinceList},on:{confirm:e.confirmArea,cancel:e.cancelArea}})],1),i("popup",{attrs:{position:"bottom"},model:{value:e.cityShow,callback:function(t){e.cityShow=t},expression:"cityShow"}},[i("picker",{attrs:{"show-toolbar":"",columns:e.cityList},on:{confirm:e.confirmArea,cancel:e.cancelArea}})],1),i("popup",{attrs:{position:"bottom"},model:{value:e.areaShow,callback:function(t){e.areaShow=t},expression:"areaShow"}},[i("picker",{attrs:{"show-toolbar":"",columns:e.areaList},on:{confirm:e.confirmArea,cancel:e.cancelArea}})],1)],1)},[],!1,null,"7fc11f0f",null);e.default=p.exports},"8a58":function(t,e,i){"use strict";i("68ef"),i("4d75")},a526:function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("1146")},c3e4:function(t,e,i){"use strict";var n=i("2373");i.n(n).a},e41f:function(t,e,i){"use strict";var n=i("a142"),s=i("6605"),o=Object(n.h)("popup"),r=o[0],a=o[1];e.a=r({mixins:[s.a],props:{position:String,transition:String,overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},render:function(t){var e,i=this;if(this.shouldRender){var n=this.position,s=function(t){return function(){return i.$emit(t)}};return t("transition",{attrs:{name:this.transition||(n?"van-popup-slide-"+n:"van-fade")},on:{afterEnter:s("opened"),afterLeave:s("closed")}},[t("div",{directives:[{name:"show",value:this.value}],class:a((e={},e[n]=n,e))},[this.slots()])])}}})},f253:function(t,e,i){"use strict";var n=i("c31d"),s=i("a142"),a=i("db78"),o=i("1128");function r(t){return Array.isArray(t)?t.map(function(t){return r(t)}):"object"==typeof t?Object(o.a)({},t):t}var c=i("1b10"),l=i("543e"),h=Object(s.h)("picker-column"),u=h[0],d=h[1],f=u({props:{valueKey:String,className:String,itemHeight:Number,defaultIndex:Number,initialOptions:Array,visibleItemCount:Number},data:function(){return{startY:0,offset:0,duration:0,startOffset:0,options:r(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1)},watch:{defaultIndex:function(){this.setIndex(this.defaultIndex)}},computed:{count:function(){return this.options.length}},methods:{onTouchStart:function(t){this.startY=t.touches[0].clientY,this.startOffset=this.offset,this.duration=0},onTouchMove:function(t){t.preventDefault();var e=t.touches[0].clientY-this.startY;this.offset=Object(s.g)(this.startOffset+e,-this.count*this.itemHeight,this.itemHeight)},onTouchEnd:function(){if(this.offset!==this.startOffset){this.duration=200;var t=Object(s.g)(Math.round(-this.offset/this.itemHeight),0,this.count-1);this.setIndex(t,!0)}},adjustIndex:function(t){for(var e=t=Object(s.g)(t,0,this.count);e<this.count;e++)if(!this.isDisabled(this.options[e]))return e;for(var i=t-1;0<=i;i--)if(!this.isDisabled(this.options[i]))return i},isDisabled:function(t){return Object(s.e)(t)&&t.disabled},getOptionText:function(t){return Object(s.e)(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){t=this.adjustIndex(t)||0,this.offset=-t*this.itemHeight,t!==this.currentIndex&&(this.currentIndex=t,e&&this.$emit("change",t))},setValue:function(t){for(var e=this.options,i=0;i<e.length;i++)if(this.getOptionText(e[i])===t)return this.setIndex(i)},getValue:function(){return this.options[this.currentIndex]}},render:function(i){var n=this,t=this.itemHeight,e=this.visibleItemCount,s={height:t*e+"px"},o=t*(e-1)/2,r={transition:this.duration+"ms",transform:"translate3d(0, "+(this.offset+o)+"px, 0)",lineHeight:t+"px"},a={height:t+"px"};return i("div",{style:s,class:[d(),this.className],on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[i("ul",{style:r},[this.options.map(function(t,e){return i("li",{style:a,class:["van-ellipsis",d("item",{disabled:n.isDisabled(t),selected:e===n.currentIndex})],domProps:{innerHTML:n.getOptionText(t)},on:{click:function(){n.setIndex(e,!0)}}})})])])}}),p=Object(s.h)("picker"),m=p[0],g=p[1],v=p[2];e.a=m({props:Object(n.a)({},c.a,{columns:Array,defaultIndex:{type:Number,default:0},valueKey:{type:String,default:"text"}}),data:function(){return{children:[]}},computed:{simple:function(){return this.columns.length&&!this.columns[0].values}},watch:{columns:function(){this.setColumns()}},methods:{setColumns:function(){var i=this;(this.simple?[{values:this.columns}]:this.columns).forEach(function(t,e){i.setColumnValues(e,r(t.values))})},emit:function(t){this.simple?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onChange:function(t){this.simple?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var i=this.getColumn(t);i&&i.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var i=this.getColumn(t);i&&i.setIndex(e)},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var i=this.children[t];i&&JSON.stringify(i.options)!==JSON.stringify(e)&&(i.options=e,i.setIndex(0))},getValues:function(){return this.children.map(function(t){return t.getValue()})},setValues:function(t){var i=this;t.forEach(function(t,e){i.setColumnValue(e,t)})},getIndexes:function(){return this.children.map(function(t){return t.currentIndex})},setIndexes:function(t){var i=this;t.forEach(function(t,e){i.setColumnIndex(e,t)})},onConfirm:function(){this.emit("confirm")},onCancel:function(){this.emit("cancel")}},render:function(i){var n=this,t=this.itemHeight,e=this.simple?[this.columns]:this.columns,s={height:t+"px"},o={height:t*this.visibleItemCount+"px"},r=this.showToolbar&&i("div",{class:["van-hairline--top-bottom",g("toolbar")]},[this.slots()||[i("div",{class:g("cancel"),on:{click:this.onCancel}},[this.cancelButtonText||v("cancel")]),this.slots("title")||this.title&&i("div",{class:["van-ellipsis",g("title")]},[this.title]),i("div",{class:g("confirm"),on:{click:this.onConfirm}},[this.confirmButtonText||v("confirm")])]]);return i("div",{class:g()},[r,this.loading?i("div",{class:g("loading")},[i(l.a)]):i(),i("div",{class:g("columns"),style:o,on:{touchmove:a.c}},[e.map(function(t,e){return i(f,{attrs:{valueKey:n.valueKey,className:t.className,itemHeight:n.itemHeight,defaultIndex:t.defaultIndex||n.defaultIndex,visibleItemCount:n.visibleItemCount,initialOptions:n.simple?t:t.values},on:{change:function(){n.onChange(e)}}})}),i("div",{class:["van-hairline--top-bottom",g("frame")],style:s})])])}})}}]);