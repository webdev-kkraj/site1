import{_ as n,Z as W,ah as Y,o as m,c as x,Y as Q,B as l,J as P,K as B,aa as I,ac as q,a as c,v as r,G as y,C as d,L as O,r as p,t as k,E as T,x as X,u as N,F as j,D as E,A as D,y as $}from"./index.B-fNRxMl.js";import{a as ee,u as te,S as se,B as G}from"./Checkbox.kiRwhCyZ.js";import{_ as V}from"./dynamic-import-helper.BYS4eB6Y.js";import{C as oe}from"./Card.DOGX0YlA.js";import{_ as ne}from"./Button.B_i50r8c.js";import{S as ie}from"./Close.Dorc6RTZ.js";import{S as le}from"./External.BFxQabFj.js";import{C as K}from"./datetime.Gd0MR9my.js";import{G as R,a as U}from"./Row.KJXUnSIg.js";import{C as ae}from"./QuestionMark.B0JhcluI.js";import{C as re}from"./Index.CWt2wRE_.js";import"./debounce.DK1RwK91.js";import"./Caret.DoERFzmH.js";import"./Slide.BnAEsryh.js";import"./LicenseUpgrade.Dgq65s4z.js";import"./LicenseStore.Db5X-EXE.js";import"./SetupWizard.Cwr4f2FG.js";const v="aioseo-broken-link-checker",de={no:n("No",v),yes:n("Yes",v),off:n("Off",v),on:n("On",v),show:n("Show",v),hide:n("Hide",v),learnMore:n("Learn More",v),disabled:n("Disabled",v),enabled:n("Enabled",v),include:n("Include",v),remove:n("Remove",v)},ce={props:{modelValue:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data(){return{val:this.modelValue??null,maxHeightScroll:!1,height:"auto"}},watch:{modelValue(e){this.val=e},val(e){this.$nextTick(this.resize),this.$emit("update:modelValue",e)},minHeight(){this.$nextTick(this.resize)},maxHeight(){this.$nextTick(this.resize)},autosize(e){e&&this.resize()}},computed:{computedStyles(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{height:this.minHeight?this.minHeight+"px":""}},isResizeImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("resize")},isOverflowImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("overflow")},isHeightImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("height")}},methods:{resize(){const e=this.isHeightImportant?"important":"";return this.height=`auto${e?" !important":""}`,this.$nextTick(()=>{let t=this.$el.scrollHeight+1;this.minHeight&&(t=t<this.minHeight?this.minHeight:t),this.maxHeight&&(t>this.maxHeight?(t=this.maxHeight,this.maxHeightScroll=!0):this.maxHeightScroll=!1);const s=t+"px";this.height=`${s}${e?" !important":""}`}),this}},created(){this.val=this.modelValue},mounted(){this.resize()}};function ue(e,t,s,o,i,a){return W((m(),x("textarea",{class:"aioseo-textarea-autosize",style:Q(a.computedStyles),"onUpdate:modelValue":t[0]||(t[0]=u=>i.val=u),onFocus:t[1]||(t[1]=(...u)=>a.resize&&a.resize(...u))},null,36)),[[Y,i.val]])}const pe=V(ce,[["render",ue]]),ge={props:{modelValue:Boolean,disabled:{type:Boolean,default(){return!1}}},methods:{labelToggle(){this.$refs.input.click()}}},me={class:"toggle-content"},he=["disabled","checked"],_e=l("span",{class:"toggle-switch"},null,-1);function ye(e,t,s,o,i,a){return m(),x("label",{class:B(["aioseo-toggle",{disabled:s.disabled}]),tabindex:"0",onKeydown:[t[1]||(t[1]=I((...u)=>a.labelToggle&&a.labelToggle(...u),["enter"])),t[2]||(t[2]=I((...u)=>a.labelToggle&&a.labelToggle(...u),["space"]))]},[l("div",me,[l("input",{disabled:s.disabled,type:"checkbox",checked:s.modelValue,onInput:t[0]||(t[0]=u=>e.$emit("update:modelValue",u.target.checked)),ref:"input"},null,40,he),_e]),P(e.$slots,"default")],34)}const fe=V(ge,[["render",ye]]),ke={},be={viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-add-plus"},Se=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.66675 1.16669H11.6667C12.3084 1.16669 12.8334 1.69169 12.8334 2.33335V9.33335C12.8334 9.97502 12.3084 10.5 11.6667 10.5H4.66675C4.02508 10.5 3.50008 9.97502 3.50008 9.33335V2.33335C3.50008 1.69169 4.02508 1.16669 4.66675 1.16669ZM1.16675 3.50002H2.33341V11.6667H10.5001V12.8334H2.33341C1.69175 12.8334 1.16675 12.3084 1.16675 11.6667V3.50002ZM11.6667 9.33335H4.66675V2.33335H11.6667V9.33335ZM8.75008 8.75002H7.58341V6.41669H5.25008V5.25002H7.58341V2.91669H8.75008V5.25002H11.0834V6.41669H8.75008V8.75002Z",fill:"currentColor"},null,-1),xe=[Se];function ve(e,t){return m(),x("svg",be,xe)}const Te=V(ke,[["render",ve]]),H="aioseo-broken-link-checker",Ve={setup(){const{getJsonValues:e,setJsonValues:t}=te();return{getJsonValues:e,optionsStore:q(),setJsonValues:t}},components:{BaseButton:ne,BaseSelect:ee,SvgAddPlus:Te,SvgClose:ie,SvgExternal:le},props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{excludeOptions:[],strings:{typeToSearch:n("Type to search...",H),noOptionsPosts:n("Begin typing a post ID, title or slug to search...",H),noOptionsTerms:n("Begin typing a term ID or name to search...",H),noResult:n("No results found for your search. Try again!",H),clear:n("Clear",H),id:n("ID",H),type:n("Type",H)}}},computed:{optionName:{get(){return this.type==="posts"?this.options.excludePosts:this.options.excludeTerms},set(e){if(this.type==="posts"){this.options.excludePosts=e;return}this.options.excludeTerms=e}},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{processGetObjects(e){return this.optionsStore.getObjects({query:e,type:this.type}).then(t=>{this.excludeOptions=t.body.objects})},getOptionTitle(e,t){e=e.replace(/<\/?[^>]+(>|$)/g,""),t=t.replace(/<\/?[^>]+(>|$)/g,"");const s=new RegExp(`(${t})`,"gi");return e.replace(s,'<span class="search-term">$1</span>')},searchableLabel({value:e,label:t,slug:s}){return`${e} ${t} ${s}`}}},we={class:"aioseo-exclude-posts"},Ce={class:"option"},Pe=["innerHTML"],Be={class:"option-details"},He=["href"],De={class:"multiselect__tag"},Le={class:"multiselect__tag-value"},ze=["onClick"];function Ae(e,t,s,o,i,a){const u=p("svg-add-plus"),h=p("base-button"),b=p("svg-external"),C=p("svg-close"),S=p("base-select");return m(),x("div",we,[c(S,{options:i.excludeOptions,"ajax-search":a.processGetObjects,customLabel:a.searchableLabel,size:"medium",multiple:"",modelValue:o.getJsonValues(a.optionName),"onUpdate:modelValue":t[0]||(t[0]=g=>a.optionName=o.setJsonValues(g)),placeholder:i.strings.typeToSearch},{noOptions:r(()=>[y(d(a.noOptions),1)]),noResult:r(()=>[y(d(i.strings.noResult),1)]),caret:r(({toggle:g})=>[c(h,{class:"multiselect-toggle",style:{padding:"10px 13px",width:"40px",position:"absolute",height:"36px",right:"2px",top:"2px","text-align":"center",transition:"transform .2s ease"},type:"gray",onClick:g},{default:r(()=>[c(u,{style:{width:"14px",height:"14px",color:"black"}})]),_:2},1032,["onClick"])]),option:r(({option:g,search:w})=>[l("div",Ce,[l("div",{class:"option-title",innerHTML:a.getOptionTitle(g.label,w)},null,8,Pe),l("div",Be,[l("span",null,d(i.strings.id)+": #"+d(g.value),1),l("span",null,d(i.strings.type)+": "+d(g.type),1)])]),l("a",{class:"option-permalink",href:g.link,target:"_blank",onClick:O(()=>{},["stop"])},[c(b)],8,He)]),tag:r(({option:g,remove:w})=>[l("div",De,[l("div",Le,d(g.label)+" - #"+d(g.value),1),l("div",{class:"multiselect__tag-remove",onClick:O(A=>w(g),["stop"])},[c(C,{onClick:O(A=>w(g),["stop"])},null,8,["onClick"])],8,ze)])]),_:1},8,["options","ajax-search","customLabel","modelValue","placeholder"]),c(h,{type:"gray",size:"medium",onClick:t[1]||(t[1]=g=>a.optionName=[])},{default:r(()=>[y(d(i.strings.clear),1)]),_:1})])}const Me=V(Ve,[["render",Ae]]),Oe={components:{SvgCheckmark:se},props:{modelValue:[String,Boolean],name:String,labelClass:{type:String,default(){return""}},inputClass:{type:String,default(){return""}},id:String,size:String,disabled:Boolean,type:{type:Number,default(){return 1}}},computed:{typeClass(){return`type-${this.type}`}},methods:{labelToggle(){this.$refs.input.click()}}},Ie={class:"form-radio-wrapper"},Ne={class:"form-radio"},Re=["checked","disabled","name","id"],Ue={class:"fancy-radio"};function qe(e,t,s,o,i,a){const u=p("svg-checkmark");return m(),x("label",{class:B(["aioseo-radio",[s.labelClass,{[s.size]:s.size},a.typeClass,{disabled:s.disabled}]]),onKeydown:[t[1]||(t[1]=I((...h)=>a.labelToggle&&a.labelToggle(...h),["enter"])),t[2]||(t[2]=I((...h)=>a.labelToggle&&a.labelToggle(...h),["space"]))],onClick:O(()=>{},["stop"])},[P(e.$slots,"header"),l("span",Ie,[l("span",Ne,[l("input",{type:"radio",onInput:t[0]||(t[0]=h=>e.$emit("update:modelValue",h.target.checked)),checked:s.modelValue,disabled:s.disabled,name:s.name,id:s.id,class:B(s.inputClass),ref:"input"},null,42,Re),l("span",Ue,[s.type===1?(m(),k(u,{key:0})):T("",!0)])])]),P(e.$slots,"default")],34)}const je=V(Oe,[["render",qe]]),Ee={components:{BaseCheckbox:G,BaseRadio:je},props:{type:{type:String,required:!0},name:{type:String,required:!0},modelValue:{type:[Boolean,String,Event],required:!0},active:Boolean,size:String,round:Boolean},methods:{toggleCheckbox(){this.$refs.toggle.labelToggle()}}};function Ge(e,t,s,o,i,a){return m(),x("div",{class:B(["aioseo-highlight-toggle",[{active:s.active},{[s.size]:s.size}]]),onClick:t[1]||(t[1]=(...u)=>a.toggleCheckbox&&a.toggleCheckbox(...u))},[(m(),k(X(`base-${s.type}`),{ref:"toggle",name:s.name,modelValue:s.modelValue,size:s.size,round:s.round,"onUpdate:modelValue":t[0]||(t[0]=u=>e.$emit("update:modelValue",u))},{default:r(()=>[P(e.$slots,"default")]),_:3},8,["name","modelValue","size","round"]))],2)}const J=V(Ee,[["render",Ge]]),L="aioseo-broken-link-checker",Ke={setup(){return{rootStore:N()}},components:{BaseHighlightToggle:J,CoreAlert:K,GridColumn:R,GridRow:U},props:{type:{type:String,required:!0},options:{type:Object,required:!0},registeredPostStatuses:Object,excluded:{type:Array,default(){return[]}}},data(){return{strings:{label:n("Label:",L),name:n("Status:",L),noPostStatuses:n("No post statuses available.",L),noTaxonomies:n("No taxonomies available.",L),noPostStatusesDescription:n("All post statuses are set to noindex or your site does not have any post statuses registered that are supported by this feature.",L),noTaxonomiesDescription:n("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",L)}}},computed:{getRegisteredPostStatuses(){return this.registeredPostStatuses||this.rootStore.aioseo.postData},postStatuses(){return this.getRegisteredPostStatuses[this.type].filter(e=>!this.excluded.includes(e.status))}},methods:{emitInput(e){this.$emit("input",e)},updateValue(e,t){if(e){const o=this.options[this.type].included;o.push(t.status),this.options[this.type].included=o;return}const s=this.options[this.type].included.findIndex(o=>o===t.status);s!==-1&&this.options[this.type].included.splice(s,1)},getValue(e){return this.options[this.type].included.includes(e.status)},isActive(e){return this.options[this.type].included.findIndex(s=>s===e.status)!==-1}}},Je={class:"aioseo-post-status-options-toggle"},Ze={class:"post-status-options-settings"};function Fe(e,t,s,o,i,a){const u=p("core-alert"),h=p("base-highlight-toggle"),b=p("grid-column"),C=p("grid-row");return m(),x("div",Je,[l("div",Ze,[a.postStatuses.length===0&&s.type==="postStatuses"?(m(),k(u,{key:0,type:"blue"},{default:r(()=>[l("strong",null,d(i.strings.noPostStatuses),1),y(" "+d(i.strings.noPostStatusesDescription),1)]),_:1})):T("",!0),a.postStatuses.length===0&&s.type==="taxonomies"?(m(),k(u,{key:1,type:"blue"},{default:r(()=>[l("strong",null,d(i.strings.noTaxonomies),1),y(" "+d(i.strings.noTaxonomiesDescription),1)]),_:1})):T("",!0),0<a.postStatuses.length?(m(),k(C,{key:2},{default:r(()=>[(m(!0),x(j,null,E(a.postStatuses,(S,g)=>(m(),k(b,{md:"6",key:g},{default:r(()=>[c(h,{size:"medium",active:a.isActive(S),name:S.label,type:"checkbox",modelValue:a.getValue(S),"onUpdate:modelValue":w=>a.updateValue(w,S)},{default:r(()=>[y(d(S.label)+" ("+d(S.status)+") ",1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})):T("",!0)])])}const We=V(Ke,[["render",Fe]]),M="aioseo-broken-link-checker",Ye=()=>({editPost:o=>D(n("Edit %1$s",M),o||n("Post",M)),getPostIconClass:o=>{const i="dashicons-admin-post";return o!=null&&o.startsWith("dashicons-awb-")||o!=null&&o.includes("data:image/svg+xml;base64")?i:o||i},viewPost:o=>D(n("View %1$s",M),o||n("Post",M))}),z="aioseo-broken-link-checker",Qe={setup(){const{getPostIconClass:e}=Ye();return{getPostIconClass:e,rootStore:N()}},components:{BaseHighlightToggle:J,CoreAlert:K,CoreTooltip:ae,GridColumn:R,GridRow:U},props:{type:{type:String,required:!0},options:{type:Object,required:!0},registeredPostTypes:Object,excluded:{type:Array,default(){return[]}},supports:{type:Array,default(){return[]}}},data(){return{strings:{label:n("Label:",z),name:n("Slug:",z),noPostTypes:n("No post types available.",z),noTaxonomies:n("No taxonomies available.",z),noPostTypesDescription:n("All post types are set to noindex or your site does not have any post types registered that are supported by this feature.",z),noTaxonomiesDescription:n("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",z)}}},computed:{getRegisteredPostTypes(){return this.registeredPostTypes||this.rootStore.aioseo.postData},postTypes(){return this.getRegisteredPostTypes[this.type].filter(e=>{let t=!0;return this.supports.length&&e.supports.length&&(t=this.supports.every(s=>e.supports.includes(s))),t&&!this.excluded.includes(e.name)})}},methods:{emitInput(e){this.$emit("input",e)},updateValue(e,t){if(e){const o=this.options[this.type].included;o.push(t.name),this.options[this.type].included=o;return}const s=this.options[this.type].included.findIndex(o=>o===t.name);s!==-1&&this.options[this.type].included.splice(s,1)},getValue(e){return this.options[this.type].included.includes(e.name)},isActive(e){return this.options[this.type].included.findIndex(s=>s===e.name)!==-1}}},Xe={class:"aioseo-post-type-options-toggle"},$e={class:"post-type-options-settings"},et={class:"aioseo-description"},tt=l("br",null,null,-1);function st(e,t,s,o,i,a){const u=p("core-alert"),h=p("core-tooltip"),b=p("base-highlight-toggle"),C=p("grid-column"),S=p("grid-row");return m(),x("div",Xe,[l("div",$e,[a.postTypes.length===0&&s.type==="postTypes"?(m(),k(u,{key:0,type:"blue"},{default:r(()=>[l("strong",null,d(i.strings.noPostTypes),1),y(" "+d(i.strings.noPostTypesDescription),1)]),_:1})):T("",!0),a.postTypes.length===0&&s.type==="taxonomies"?(m(),k(u,{key:1,type:"blue"},{default:r(()=>[l("strong",null,d(i.strings.noTaxonomies),1),y(" "+d(i.strings.noTaxonomiesDescription),1)]),_:1})):T("",!0),0<a.postTypes.length?(m(),k(S,{key:2},{default:r(()=>[(m(!0),x(j,null,E(a.postTypes,(g,w)=>(m(),k(C,{md:"6",key:w},{default:r(()=>[c(b,{size:"medium",active:a.isActive(g),name:g.name,type:"checkbox",modelValue:a.getValue(g),"onUpdate:modelValue":A=>a.updateValue(A,g)},{default:r(()=>[c(h,null,{tooltip:r(()=>[l("div",et,[y(d(i.strings.label)+" ",1),l("strong",null,d(g.label),1),tt,y(" "+d(i.strings.name)+" ",1),l("strong",null,d(g.name),1)])]),default:r(()=>[l("span",{class:B(["icon dashicons",o.getPostIconClass(g.icon)])},null,2)]),_:2},1024),y(" "+d(g.label),1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})):T("",!0)])])}const ot=V(Qe,[["render",st]]),nt={components:{GridColumn:R,GridRow:U},props:{align:Boolean,alignSmall:Boolean,name:String,required:Boolean,noHorizontalMargin:{type:Boolean,default:!1},noVerticalMargin:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},noRightMaxWidth:{type:Boolean,default:!1},leftSize:{type:String,default(){return"3"}},rightSize:{type:String,default(){return"9"}}}},it={key:0,class:"required-field"},lt={key:0,class:"aioseo-description"},at={class:"settings-content"};function rt(e,t,s,o,i,a){const u=p("grid-column"),h=p("grid-row");return m(),k(h,{class:B(["aioseo-settings-row",{"no-horizontal-margin":s.noHorizontalMargin,"no-vertical-margin":s.noVerticalMargin,"no-border":s.noBorder,"no-right-max-width":s.noRightMaxWidth}])},{default:r(()=>[P(e.$slots,"header"),c(u,{md:s.leftSize},{default:r(()=>[l("div",{class:B(["settings-name",{"no-name":!s.name&&!e.$slots.name}])},[l("div",{class:B(["name",[{align:s.align},{"align-small":s.alignSmall}]])},[P(e.$slots,"name",{},()=>[y(d(s.name)+" ",1),s.required?(m(),x("span",it," * ")):T("",!0)])],2),e.$slots.description?(m(),x("div",lt,[P(e.$slots,"description")])):T("",!0)],2)]),_:3},8,["md"]),c(u,{md:s.rightSize},{default:r(()=>[l("div",at,[P(e.$slots,"content")])]),_:3},8,["md"])]),_:3},8,["class"])}const Z=V(nt,[["render",rt]]),dt="aioseo-broken-link-checker",ct={components:{CoreSettingsRow:Z,CommonLicense:re},data(){return{strings:{licenseKey:n("License Key",dt)}}}};function ut(e,t,s,o,i,a){const u=p("common-license"),h=p("core-settings-row");return m(),k(h,{name:i.strings.licenseKey},{content:r(()=>[c(u)]),_:1},8,["name"])}const pt=V(ct,[["render",ut]]),_="aioseo-broken-link-checker",gt={setup(){return{globalStrings:de,links:$,optionsStore:q(),rootStore:N()}},components:{BaseCheckbox:G,BaseTextarea:pe,BaseToggle:fe,CoreCard:oe,CoreExcludePosts:Me,CorePostStatusOptions:We,CorePostTypeOptions:ot,CoreSettingsRow:Z,LicenseKey:pt},data(){return{strings:{generalSettings:n("General Settings",_),advancedSettings:n("Advanced Settings",_),linkTweaks:n("Link Tweaks",_),linkTweaksDescription:n("Note: These settings only apply to the content of posts; not comments or custom fields.",_),highlightBrokenLinks:n("Highlight Broken Links",_),highlightBrokenLinksDescription:D(n("Choose whether broken links should be marked on the frontend when you are logged in. Broken links will be underlined in red like %1$sthis%2$s.",_),'<span class="aioseo-blc-broken-link">',"</span>"),nofollowBroken:n("Stop search engines from following broken links",_),limitModifiedDate:n("Limit Modified Date",_),limitModifiedDateDescription:n("Don't update the modified date for a page/post when a link is updated.",_),postTypes:n("Post Types",_),postStatuses:n("Post Statuses",_),includeAllPostTypes:n("Include All Post Types",_),excludePosts:n("Exclude Posts",_),excludeDomains:n("Exclude Domains",_),excludeDomainsDescription:n('Add any domains you want to exclude from being checked, one per line. Do not include the scheme or "www" part of the domain (e.g. enter "aioseo.com" instead of "https://aioseo.com" or "www.aioseo.com").',_),selectPostTypes:D(n("Select which Post Types you want to enable %1$s for.",_),"Broken Link Checker"),includeAllPostStatuses:n("Include All Post Statuses",_),selectPostStatuses:D(n("Select which Post Statuses you want to enable %1$s for.",_),"Broken Link Checker"),uninstall:D(n("Uninstall %1$s",_),"Broken Link Checker"),uninstallDescription:D(n("Check this if you would like to remove ALL %1$s data upon plugin deletion. All data will be unrecoverable.",_),"Broken Link Checker")}}}},mt={class:"aioseo-blc-settings"},ht={class:"toggle-group"},_t={class:"aioseo-description"},yt={class:"toggle-group"},ft={class:"aioseo-description"},kt={class:"aioseo-description link-tweaks-description"},bt={class:"toggle-group"},St=["innerHTML"],xt={class:"aioseo-description"},vt=["innerHTML"],Tt={class:"aioseo-description"},Vt=["innerHTML"],wt={class:"aioseo-description"},Ct={class:"aioseo-description"};function Pt(e,t,s,o,i,a){const u=p("license-key"),h=p("base-toggle"),b=p("core-settings-row"),C=p("core-card"),S=p("base-checkbox"),g=p("core-post-type-options"),w=p("core-post-status-options"),A=p("core-exclude-posts"),F=p("base-textarea");return m(),x("div",mt,[c(C,{slug:"generalSettings","header-text":i.strings.generalSettings},{default:r(()=>[c(u),c(b,{name:i.strings.linkTweaks,align:""},{content:r(()=>[l("div",ht,[c(h,{modelValue:o.optionsStore.options.general.linkTweaks.nofollowBroken,"onUpdate:modelValue":t[0]||(t[0]=f=>o.optionsStore.options.general.linkTweaks.nofollowBroken=f)},null,8,["modelValue"]),l("span",_t,d(i.strings.nofollowBroken),1)]),l("div",yt,[c(h,{modelValue:o.optionsStore.options.general.linkTweaks.limitModifiedDate,"onUpdate:modelValue":t[1]||(t[1]=f=>o.optionsStore.options.general.linkTweaks.limitModifiedDate=f)},null,8,["modelValue"]),l("span",ft,d(i.strings.limitModifiedDateDescription),1)]),l("div",kt,d(i.strings.linkTweaksDescription),1)]),_:1},8,["name"]),c(b,{name:i.strings.highlightBrokenLinks,align:""},{content:r(()=>[l("div",bt,[c(h,{modelValue:o.optionsStore.options.general.highlightBrokenLinks,"onUpdate:modelValue":t[2]||(t[2]=f=>o.optionsStore.options.general.highlightBrokenLinks=f)},null,8,["modelValue"]),l("span",{class:"aioseo-description",innerHTML:i.strings.highlightBrokenLinksDescription},null,8,St)])]),_:1},8,["name"])]),_:1},8,["header-text"]),c(C,{slug:"advancedSettings","header-text":i.strings.advancedSettings,toggles:o.optionsStore.options.advanced.enable},{header:r(()=>[c(h,{modelValue:o.optionsStore.options.advanced.enable,"onUpdate:modelValue":t[3]||(t[3]=f=>o.optionsStore.options.advanced.enable=f)},null,8,["modelValue"]),l("span",null,d(i.strings.advancedSettings),1)]),default:r(()=>[c(b,{name:i.strings.postTypes},{content:r(()=>[c(S,{size:"medium",modelValue:o.optionsStore.options.advanced.postTypes.all,"onUpdate:modelValue":t[4]||(t[4]=f=>o.optionsStore.options.advanced.postTypes.all=f)},{default:r(()=>[y(d(i.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),o.optionsStore.options.advanced.postTypes.all?T("",!0):(m(),k(g,{key:0,id:"postTypes",options:o.optionsStore.options.advanced,excluded:["attachment"],registeredPostTypes:o.rootStore.aioseoBrokenLinkChecker,type:"postTypes"},null,8,["options","registeredPostTypes"])),l("div",xt,[y(d(i.strings.selectPostTypes)+" ",1),l("span",{innerHTML:o.links.getDocLink(o.globalStrings.learnMore,"postTypes",!0)},null,8,vt)])]),_:1},8,["name"]),c(b,{name:i.strings.postStatuses},{content:r(()=>[c(S,{size:"medium",modelValue:o.optionsStore.options.advanced.postStatuses.all,"onUpdate:modelValue":t[5]||(t[5]=f=>o.optionsStore.options.advanced.postStatuses.all=f)},{default:r(()=>[y(d(i.strings.includeAllPostStatuses),1)]),_:1},8,["modelValue"]),o.optionsStore.options.advanced.postStatuses.all?T("",!0):(m(),k(w,{key:0,id:"postStatuses",options:o.optionsStore.options.advanced,registeredPostStatuses:o.rootStore.aioseoBrokenLinkChecker,type:"postStatuses"},null,8,["options","registeredPostStatuses"])),l("div",Tt,[y(d(i.strings.selectPostStatuses)+" ",1),l("span",{innerHTML:o.links.getDocLink(o.globalStrings.learnMore,"postStatuses",!0)},null,8,Vt)])]),_:1},8,["name"]),c(b,{name:i.strings.excludePosts,align:""},{content:r(()=>[c(A,{type:"posts",options:o.optionsStore.options.advanced},null,8,["options"])]),_:1},8,["name"]),c(b,{name:i.strings.excludeDomains},{content:r(()=>[c(F,{minHeight:120,autosize:!1,modelValue:o.optionsStore.options.advanced.excludeDomains,"onUpdate:modelValue":t[6]||(t[6]=f=>o.optionsStore.options.advanced.excludeDomains=f)},null,8,["modelValue"]),l("div",wt,d(i.strings.excludeDomainsDescription),1)]),_:1},8,["name"]),c(b,{name:i.strings.uninstall},{content:r(()=>[c(h,{modelValue:o.optionsStore.options.advanced.uninstall,"onUpdate:modelValue":t[7]||(t[7]=f=>o.optionsStore.options.advanced.uninstall=f)},null,8,["modelValue"]),l("div",Ct,d(i.strings.uninstallDescription),1)]),_:1},8,["name"])]),_:1},8,["header-text","toggles"])])}const Jt=V(gt,[["render",Pt]]);export{Jt as default};
