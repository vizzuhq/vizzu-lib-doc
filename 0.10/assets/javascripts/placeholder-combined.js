///// No custom extra JS code exists /////
///// Plugin data /////
window.PlaceholderPluginConfigJson = {"placeholder_list": [{"name": "LIB_MINOR_VERSION", "description": "", "read_only": false, "allow_inner_html": false, "allow_nested": false, "type": "textbox", "validators": [], "default_value": "0.1"}, {"name": "LIB_PATCH_VERSION", "description": "", "read_only": false, "allow_inner_html": false, "allow_nested": false, "type": "textbox", "validators": [], "default_value": "0.10.1"}], "settings": {"apply_change_on_focus_change": true, "debug": false, "delay_millis": 0, "dynamic_prefix": "d", "dynamic_suffix": "d", "expand_auto_tables": true, "html_prefix": "i", "html_suffix": "i", "normal_prefix": "x", "normal_suffix": "x", "static_prefix": "s", "static_suffix": "s"}, "validators": []};


///// Normal plugin code /////
(()=>{"use strict";const e=()=>`${(new Date).toISOString().slice(11,23)} (TS)`;let t=!0;function n(...t){console.log.apply(console,[`${e()} |`,...arguments])}function o(...t){console.info.apply(console,[`${e()} |`,...arguments])}function a(...t){console.debug.apply(console,[`${e()} |`,...arguments])}function r(...e){}const l=()=>{t?window.location.reload():o("Page reload was triggered and blocked due to PlaceholderPlugin.debug_disable_reload")},s={log:r,info:r,debug:r};let i=s;const c=()=>{o("Page reload was disabled for debugging purposes"),t=!1};var d,u;!function(e){e.Warning="WARNING",e.Error="ERROR"}(d||(d={})),function(e){e.Good="GOOD",e.Warning="WARNING",e.Error="ERROR",e.NoValidator="NO_VALIDATOR"}(u||(u={}));const f=e=>{const t=F("rules","object",e);if(0==t.length)throw new Error(`Rules should not be an empty array.\nProblematic object: ${JSON.stringify(e)}`);const n=W("id",e);return{display_name:W("display_name",e),id:n,rules:t.map((e=>m(e,n)))}},p=(e,t)=>{for(const n of e.rules)if(n.is_match_function(t)!=n.should_match&&n.severity==d.Error)return!1;return!0},h=(e,t)=>{if(e.validators.length>0){for(const n of e.validators)if(p(n,t))return!0;return!1}return!0},_=(e,t)=>{const n=[],o=[];for(const a of e.rules)a.is_match_function(t)!=a.should_match&&(a.severity==d.Error?o.push(`[${e.display_name}] Error: ${a.error_message}`):a.severity==d.Warning?n.push(`[${e.display_name}] Warning: ${a.error_message}`):console.warn(`Unknown rule severity ${a.severity}`));return{errors:o,warnings:n}},g=e=>{let t;if(1==e.validators.length)t=`Expecting: ${e.validators[0].display_name}`;else{t="Expecting one of the following: ";for(const n of e.validators)t+=`\n - ${n.display_name}`}return{rating:u.Good,message:t}},m=(e,t)=>{const n=W("severity",e);let o,a;if("warning"==n||"warn"==n)o=d.Warning;else{if("error"!=n)throw new Error(`Unknown severity '${n}'`);o=d.Error}if(e.regex){const t=W("regex",e),n=new RegExp(t);a=e=>n.test(e)}else{const n=W("match_function",e),o=new Function("value",n);a=e=>{try{const a=o(e);if("boolean"!=typeof a)throw new Error(`Custom match_function '${n}' of validator ${t} should return a boolean, but it returned a ${typeof a}: ${a}`);return a}catch(e){throw new Error(`Failed to evaluate match_function '${n}' of validator ${t}: ${e}`)}}}return{severity:o,should_match:z("should_match",e),error_message:W("error_message",e),is_match_function:a}},v=(e,t)=>{const n=((e,t)=>{const n=[];let o=!1;if(e.validators.length>0){for(const a of e.validators){const r=_(a,t);if(n.push(r),0==r.errors.length&&(o=!0,0==r.warnings.length))return g(e)}return o?(e=>{const t=[];for(const n of e)0==n.errors.length&&t.push(...n.warnings);return{rating:u.Warning,message:t.join("\n")}})(n):(e=>{const t=[];for(const n of e)t.push(...n.errors);return{rating:u.Error,message:t.join("\n")}})(n)}return{rating:u.NoValidator,message:"No validators are specified for this placeholder"}})(e,t.value);return((e,t)=>{e.classList.remove("validation-error","validation-warn","validation-ok","validation-none"),t.rating==u.Good?e.classList.add("validation-ok"):t.rating==u.Warning?e.classList.add("validation-warn"):t.rating==u.Error?e.classList.add("validation-error"):t.rating==u.NoValidator?e.classList.add("validation-none"):console.warn(`Unknown placeholder validity: ${t.rating}`),e.title=t.message})(t,n),i.debug("Validation: name =",e.name,", value =",t.value,", results =",n.rating),n.rating!=u.Error},b="PLACEHOLDER_",w="PLACEHOLDER-SETTING_",x=(e,t)=>{localStorage.setItem(b+e,t)},y=e=>localStorage.getItem(b+e),$=(e,t)=>{const n=localStorage.getItem(`${w}${e}`);return i.info(`Reading boolean setting '${e}' with value ${n}`),null===n?t:"1"===n||"0"!==n&&(console.warn(`Unexpected state for boolean setting. Should be null, '0' or '1', but was '${n}'`),t)},k=()=>{L(b)},E=()=>{L(w)},L=e=>{console.warn(`Clearing all localStorage items starting with '${e}'`);let t=0;for(;t<localStorage.length;){const n=localStorage.key(t);(null==n?void 0:n.startsWith(e))?localStorage.removeItem(n):t++}l()},N=(e,t)=>{try{const n=e.options[t];return null!=n&&null!=n}catch(e){return!1}},T=(e,t)=>{const n=h(e,t);if(i.info(`Set textbox ${e.name} to '${t}'. Validation ok? ${n}`),!n)throw new Error(`Validation error: Value '${t}' is not valid for placeholder ${e.name}`);x(`${e.name}_TEXT`,t)},C=e=>{const t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},I=e=>{const t=document.createElement("span");return t.classList.add("placeholder-value"),t.dataset.placeholder=e.name,t.textContent=e.expanded_value,t},R=(e,t,n,o)=>{var a;const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let l;t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n.current_value}'`);let s=0;if(o){const e=document.querySelectorAll(".placeholder-value[data-placeholder]");for(const t of e)t.getAttribute("data-placeholder")===n.name&&s++;s>0&&i.debug(`${s} dynamic placeholder elements already exist for placeholder ${n.name}`)}const c=[];for(;l=r.nextNode();)l.nodeValue&&l.nodeValue.match(t)&&c.push(l);const d=`<span class="placeholder-value" data-placeholder="${C(n.name)}">TEMPORARY PLACEHOLDER</span>`;for(const e of c)if(e.nodeValue){const n=C(e.nodeValue).replace(t,d),o=document.createElement("span");o.innerHTML=n,null===(a=e.parentElement)||void 0===a||a.replaceChild(o,e)}return c.length+s},S=(e,t,n)=>{const o=R(e,t.regex_dynamic,t,!0);o>0&&(i.debug(`Replaced ${t.name} via dynamic method at least ${o} time(s)`),t.count_on_page+=o)},P=(e,t,n)=>{const o=R(e,t.regex_normal,t,!1);o>0&&(i.debug(`Replaced ${t.name} via normal (dynamic) method at least ${o} time(s)`),t.count_on_page+=o)},D=(e,t,n)=>{const o=((e,t,n)=>{const o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let a,r=0;for(t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n}'`);a=o.nextNode();)if(a.nodeValue){const e=a.nodeValue.replace(t,n);a.nodeValue!=e&&(a.nodeValue=e,r++)}return r})(e,t.regex_static,t.expanded_value);o>0&&(i.debug(`Replaced ${t.name} via static method at least ${o} time(s)`),t.count_on_page+=o,t.reload_page_on_change=!0)},O=(e,t,n)=>{const o=((e,t,n)=>{n=C(n),t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n}'`);const o=e.innerHTML.replace(t,n);return o!=e.innerHTML?(e.innerHTML=o,1):0})(e,t.regex_html,t.expanded_value);o>0&&(i.debug(`Replaced ${t.name} via innerHTML method at least ${o} time(s)`),t.count_on_page+=o,t.reload_page_on_change=!0)},A=(e,t,n)=>e.replace(t.regex_dynamic,n).replace(t.regex_html,n).replace(t.regex_normal,n).replace(t.regex_static,n),H=e=>{for(const t of e)for(const e of t.output_elements){e.innerHTML="";const n=document.createTextNode(t.expanded_value);e.appendChild(n)}};class j{constructor(e){this.nodes=new Map;for(const t of e.values())this.nodes.set(t.name,new U(t));for(const t of e.values())try{this.on_placeholder_value_change(t)}catch(e){console.error("Error while building dependency graph",e),console.warn("Placeholder values may be inconsistent. Clearing your localStorage should fix this problem."),confirm("We detected a problem with your placeholder values. Resetting them to the defaults should fix this. Should we reset your placeholders?")&&k()}for(const e of this.nodes.values())0==e.downlinks.length&&e.recalculate_expanded_value(!0)}debug_print_representation(){let e="Dependency graph nodes (DEBUG view):";for(const t of this.nodes.values()){const n=t.downlinks.map((e=>e.placeholder.name)).join(", ");0==n.length?e+=`\n${t.placeholder.name} (${t.placeholder.expanded_value}) has no dependencies`:e+=`\n${t.placeholder.name} (${t.placeholder.expanded_value}) depends on ${n}`}i.debug(e)}unmark_everything(){for(const e of this.nodes.values())e.marked=!1}get_node(e){const t=this.nodes.get(e.name);if(null==t)throw new Error(`Placeholder ${e.name} is not part of the dependency graph`);return t}on_placeholder_value_change(e){const t=this.get_node(e);if(this.update_placeholder_downlinks(e),this.has_loop())throw e.expanded_value=e.current_value,t.downlinks=[],new Error(`Placeholder ${e.name} was part of a loop and has temporarily been made non-recursive`);t.recalculate_expanded_value(!0)}get_all_marked(){const e=[];for(const t of this.nodes.values())t.marked&&e.push(t.placeholder);return e}get_all_upstream(e){return this.unmark_everything(),this.get_node(e).recursive_mark_upstream(),this.get_all_marked()}update_placeholder_downlinks(e){if(!e.allow_nested)return void i.debug(`${e.name} can not contain nested placeholders`);const t=this.get_node(e);for(const e of t.downlinks)e.remove_uplink(t);t.downlinks=[];for(const n of this.nodes.values())n!=t&&M(e.current_value,n.placeholder)&&(t.downlinks.push(n),n.uplinks.push(t))}get_all_used_placeholders(){this.unmark_everything();for(const e of this.nodes.values())e.placeholder.count_on_page>0&&e.recursive_mark_downstream();return this.get_all_marked()}has_loop(){this.unmark_everything();for(const e of this.nodes.values())if(!e.marked&&this._has_loop([],e))return!0;return!1}_has_loop(e,t){const n=[...e,t],o=e.indexOf(t);if(-1!=o){let e="Dependency cycle in placeholders detected:";for(let t=o;t<n.length;t++){const o=n[t].placeholder;e+=`\n$ -> ${o.name}: ${o.current_value}`}return console.warn(e),!0}if(t.marked)return!1;t.marked=!0;for(const e of t.downlinks)if(this._has_loop(n,e))return!0;return!1}}const M=(e,t)=>t.regex_dynamic.test(e)||t.regex_html.test(e)||t.regex_normal.test(e)||t.regex_static.test(e);class U{constructor(e){this.uplinks=[],this.downlinks=[],this.marked=!1,this.placeholder=e}remove_uplink(e){this.uplinks=this.uplinks.filter((t=>t!=e))}recalculate_expanded_value(e){let t=this.placeholder.current_value;if(this.placeholder.allow_nested&&(t=((e,t)=>{if(0==t.length)return e;if(1==t.length){const n=t[0];return A(e,n,n.expanded_value)}{const n=`${Date.now()}_${Math.random()}`;for(const o of t)e=A(e,o,`x${o.name}#${n}x`);for(const o of t){const t=new RegExp(`x${o.name}#${n}x`,"g");e=e.replace(t,o.expanded_value)}return e}})(t,this.downlinks.map((e=>e.placeholder)))),this.placeholder.expanded_value=t,e)for(const t of this.uplinks)t.recalculate_expanded_value(e)}recursive_mark_upstream(){this.marked=!0;for(const e of this.uplinks)e.recursive_mark_upstream()}recursive_mark_downstream(){this.marked=!0;for(const e of this.downlinks)e.recursive_mark_downstream()}}const V=(e,t,n)=>{const o=n[e],a=typeof o;if(a!=t)throw new Error(`Type mismatch: ${e} should be ${t}, but is ${a}.\nProblematic object: ${JSON.stringify(n)}`);return o},W=(e,t)=>V(e,"string",t),z=(e,t)=>V(e,"boolean",t),J=(e,t)=>V(e,"number",t),F=(e,t,n)=>{const o=n[e];if(Array.isArray(o)){for(const[a,r]of o.entries()){const o=typeof r;if(o!=t){const r=`Type mismatch: ${e}'s ${a+1}th element should be ${t}, but is ${o}.\nProblematic object: ${JSON.stringify(n)}`;throw new Error(r)}}return o}throw new Error(`Type mismatch: ${e} should be an array, but is not.\nProblematic object: ${JSON.stringify(n)}`)};var X;!function(e){e.Textbox="TEXTBOX",e.Checkbox="CHECKBOX",e.Dropdown="DROPDOWN"}(X||(X={}));const G=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),B=(e,t,n,o)=>{const a=W("type",e),r=W("name",e);let l={name:r,order_index:o,regex_dynamic:RegExp(G(n.dynamic_prefix)+r+G(n.dynamic_suffix),"g"),regex_html:RegExp(G(n.html_prefix)+r+G(n.html_suffix),"g"),regex_normal:RegExp(G(n.normal_prefix)+r+G(n.normal_suffix),"g"),regex_static:RegExp(G(n.static_prefix)+r+G(n.static_suffix),"g"),description:W("description",e),read_only:z("read_only",e),allow_inner_html:z("allow_inner_html",e),allow_nested:z("allow_nested",e),current_value:"UNINITIALIZED",expanded_value:"UNINITIALIZED",count_on_page:0,reload_page_on_change:!1,output_elements:[]};if("textbox"===a){const n=q(l,e,t);return(e=>{const t=y(`${e.name}_TEXT`);if(null!=t){if(h(e,t))return void(e.current_value=t);console.warn(`Stored value for placeholder ${e.name} is invalid: '${t}'. Will revert to default.`)}if(null!=e.default_value)e.current_value=e.default_value,h(e,e.default_value)||console.warn(`Default value for placeholder '${e.name}' is invalid: '${e.default_value}'`);else{if(!e.default_function)throw new Error(`Either 'default_value' or 'default_function' needs to be set for placeholder ${e.name}`);try{const t=e.default_function();e.current_value=t;try{T(e,t)}catch(n){console.warn(`Default function for placeholder '${e.name}' returned invalid value: '${t}'`)}}catch(t){console.error(`Error while loading default textbox state for placeholder ${e.name}:`,t),e.current_value="DEFAULT_FUNCTION_ERROR"}}})(n),n}if("checkbox"==a){const t=Y(l,e);return(e=>{const t=y(`${e.name}_IS_CHECKED`);null==t?e.current_is_checked=e.checked_by_default:"0"==t||"1"==t?e.current_is_checked="1"==t:(console.warn(`Unexpected state for checkbox. Should be '0' or '1', but was '${t}'`),e.current_is_checked=e.checked_by_default),e.current_value=e.current_is_checked?e.value_checked:e.value_unchecked})(t),t}if("dropdown"==a){const t=K(l,e);return(e=>{const t=y(`${e.name}_INDEX`);if(null==t)e.current_index=e.default_index;else{const n=Number(t);N(e,n)?e.current_index=n:(console.warn(`Unexpected state for dropdown. Should be a whole number N, where 0 <= N < ${e.options.length}. But it is ${t}`),e.current_index=e.default_index)}e.current_value=e.options[e.current_index].value})(t),t}throw new Error(`Unsupported placeholder type '${a}'`)},q=(e,t,n)=>{let o,a;if(null!=t.default_value)a=W("default_value",t);else{const n=W("default_function",t);o=()=>{try{const e=new Function(n)();if("string"!=typeof e)throw new Error(`Custom function '${n}' should return a string, but it returned a ${typeof e}: ${e}`);return e}catch(t){throw new Error(`Failed to evaluate default_function '${n}' of placeholder ${e.name}: ${t}`)}}}const r=F("validators","string",t),l=[];for(const e of r){const t=n.get(e);if(!t){const t=Array.from(n.keys()).join(", ");throw new Error(`No validator with id '${e}' was found. Known validators are ${t}`)}l.push(t)}return Object.assign(Object.assign({},e),{default_function:o,default_value:a,input_elements:[],type:X.Textbox,validators:l})},Y=(e,t)=>Object.assign(Object.assign({},e),{checked_by_default:z("checked_by_default",t),current_is_checked:!1,input_elements:[],value_checked:W("value_checked",t),value_unchecked:W("value_unchecked",t),type:X.Checkbox}),K=(e,t)=>{const n=F("options","object",t),o=[];for(const e of n)o.push({display_name:W("display_name",e),value:W("value",e)});const a=J("default_index",t);if(a<0)throw new Error(`Invalid value: "default_index" should not be negative, but is ${a}.\nProblematic object: ${JSON.stringify(t)}`);if(a>=o.length)throw new Error(`Invalid value: "default_index" should be smaller than the number of options (${o.length}), but is ${a}.\nProblematic object: ${JSON.stringify(t)}`);return Object.assign(Object.assign({},e),{current_index:0,default_index:a,input_elements:[],options:o,type:X.Dropdown})},Z=new Map;Z.set("name","Name"),Z.set("description","Description"),Z.set("value","Value"),Z.set("input","Input element"),Z.set("description-or-name","Description / name");const Q=(e,t)=>{e.appendChild(document.createTextNode(t))},ee=(e,t)=>{const n=document.createElement(t);return e.appendChild(n),n},te=(e,t,n,o,a=(e=>{}))=>{const r=ee(e,"label");r.textContent=`${o} `;const l=ee(r,"input");l.type="checkbox",l.checked=t,l.addEventListener("change",(()=>{((e,t)=>{i.info(`Storing boolean setting '${e}' with value ${t}`),localStorage.setItem(`${w}${e}`,t?"1":"0")})(n,l.checked),a(l.checked)}))},ne=(e,t,n,o,a)=>{o=oe(o);const r=document.createElement("div");if(0==o.length){if(!a)return void e.remove();r.textContent="No placeholders to be shown"}else{i.info("Creating automatic input table at",e,"with columns",t),r.classList.add("table-div"),ee(r,"b").innerHTML="Enter different values in the table below and press <code>Enter</code> to update this page.";const a=ee(r,"table"),l=ee(a,"thead"),s=ee(l,"tr"),c=ee(a,"tbody");for(const e of t){const t=ee(s,"th"),n=Z.get(e);n?Q(t,n):(Q(t,e),console.error(`Unknown column name: ${e}`))}const d=[];for(const e of o){if(e.read_only){i.debug(`auto_table: Skipping ${e.name} because it is read-only`);continue}const o=ee(c,"tr");ae(o,e,t,n),d.push({element:o,placeholder:e})}n.input_tables.push({columns:t,table_element:a,rows:d})}((e,t,n)=>{t.innerHTML="";const o=ee(t,"div"),a=ee(o,"div"),r=ee(o,"div"),l=ee(t,"div"),s=ee(l,"div");l.append(n);const i=e=>{l.style.display=e?"flex":"none",a.textContent="Placeholders: Click here to "+(e?"collapse":"expand")};o.classList.add("auto-table-title"),l.classList.add("expandable_contents"),s.classList.add("settings_contents");let c=e.settings.expand_auto_tables;i(c),a.addEventListener("click",(()=>{c=!c,i(c)})),a.classList.add("text"),((e,t,n)=>{let o=!1;e.onclick=e=>{e.preventDefault(),e.stopPropagation(),o=!o,t.style.display=o?"flex":"none",o&&n()},t.style.display=o?"flex":"none",e.classList.add("settings_button"),e.innerHTML='<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n <path id="svg_6" d="m7.79338,20.02127l0,0c0,-6.84327 5.74307,-12.39083 12.82751,-12.39083l0,0c3.40207,0 6.6648,1.30546 9.07042,3.62919c2.40563,2.32373 3.75709,5.47539 3.75709,8.76164l0,0c0,6.84327 -5.74307,12.39083 -12.82751,12.39083l0,0c-7.08444,0 -12.82751,-5.54757 -12.82751,-12.39083zm6.41376,0l0,0c0,3.42163 2.87154,6.19542 6.41376,6.19542c3.54222,0 6.41376,-2.77378 6.41376,-6.19542c0,-3.42163 -2.87154,-6.19542 -6.41376,-6.19542l0,0c-3.54222,0 -6.41376,2.77378 -6.41376,6.19542z" stroke="#fff" fill="#ffffff"/>\n <path id="svg_7" d="m17.46095,7.63098l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(180, 20.9544, 35.1419)" id="svg_11" d="m17.57012,37.76199l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(43, 31.5439, 9.59605)" id="svg_12" d="m28.15964,12.21614l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(90, 35.9107, 19.8581)" id="svg_13" d="m32.52645,22.47815l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(135, 31.7623, 30.2292)" id="svg_14" d="m28.37798,32.84933l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-45, 9.49152, 9.48688)" id="svg_15" d="m6.10724,12.10697l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-90, 5.01553, 19.9672)" id="svg_16" d="m1.63126,22.58732l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-135, 9.60069, 30.7751)" id="svg_17" d="m6.21641,33.39518l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n</svg>',e.title="Hide / show settings"})(r,s,(()=>{c||(c=!0,i(c))})),((e,t)=>{const n=t=>{for(const n of e.placeholders.values())for(const e of n.output_elements)t?e.classList.add("placeholder-value-highlighted"):e.classList.remove("placeholder-value-highlighted")};n(e.settings.highlight_placeholders),ee(t,"b").textContent="Settings",te(t,e.settings.expand_auto_tables,"expand_auto_tables","Expand placeholder tables by default*"),te(t,e.settings.apply_change_on_focus_change,"apply_change_on_focus_change","Apply value when focus changes away*"),te(t,e.settings.debug,"debug","Log JavaScript debug messages to console*"),te(t,e.settings.highlight_placeholders,"highlight_placeholders","Highlight placeholders (useful for debugging)",n),ee(t,"i").textContent="* You need to reload the page for these settings to take effect.";const o=ee(t,"div");o.classList.add("button-bar");const a=ee(o,"button");a.textContent="Reset settings",a.addEventListener("click",E);const r=ee(o,"button");r.textContent="Reset all placeholders",r.addEventListener("click",k)})(e,s)})(n,e,r)},oe=e=>[...new Set(e)].sort(((e,t)=>e.order_index-t.order_index)),ae=(e,t,n,o)=>{for(const a of n){const n=ee(e,"td");if("name"==a)Q(n,t.name);else if("description"==a)Q(n,t.description);else if("value"==a){const e=I(t);n.appendChild(e),t.output_elements.push(e)}else if("input"==a){const e=ee(n,"input");le(o,t,e)}else if("description-or-name"==a){const e=t.description||t.name;Q(n,e)}else console.error(`Unknown column name: ${a}`)}},re=(e,t,n)=>{n=oe(n);const o=[];for(const e of t.rows)n.includes(e.placeholder)?o.push(e):(i.debug(`Removed table row for ${e.placeholder.name}:`,e.element),e.element.remove());const a=[],r=[...o].reverse(),l=[...n].reverse();let s;for(;s=l.pop();){const n=r.slice(-1)[0];if(n&&n.placeholder===s)r.pop(),a.push(n);else{const n=document.createElement("tr");0==a.length?t.table_element.insertBefore(n,t.table_element.firstChild):a[a.length-1].element.insertAdjacentElement("afterend",n),ae(n,s,t.columns,e),a.push({element:n,placeholder:s}),i.debug(`Added table row for ${s.name}:`,n)}}t.rows=a},le=(e,t,n)=>{n.classList.add("input-for-variable"),t.type==X.Checkbox?se(e,t,n):t.type==X.Dropdown?ie(e,t,n):t.type==X.Textbox?ce(e,t,n):console.error(`Placeholder ${t.name} has unknown type '${t.type}'`)},se=(e,t,n)=>{"INPUT"==n.tagName?(n.type="checkbox",n.checked=t.current_is_checked,t.read_only?n.disabled=!0:(n.disabled=!1,n.addEventListener("change",(()=>{i.debug("Checkbox change",t.name,"- new value:",n.checked),((e,t)=>{e.current_is_checked=t,e.current_value=t?e.value_checked:e.value_unchecked,x(`${e.name}_IS_CHECKED`,t?"1":"0")})(t,n.checked),t.current_value=n.checked?t.value_checked:t.value_unchecked,de(e,t)}))),t.input_elements.push(n)):console.warn(`Input element/tag for placeholder '${t.name}' is expected to be INPUT, but is ${n.tagName}. Skipping`,n)},ie=(e,t,n)=>{const o=document.createElement("select");o.classList.add("placeholder-dropdown");for(const e of t.options){const t=document.createElement("option");t.text=e.display_name,o.appendChild(t)}n.parentNode?n.parentNode.replaceChild(o,n):console.error("Input element",n,`for placeholder ${t.name} has no parent!`),o.selectedIndex=t.current_index,t.read_only?o.disabled=!0:(o.disabled=!1,o.addEventListener("change",(()=>{i.debug("Dropdown change",t.name,"- new index:",o.selectedIndex),((e,t)=>{if(!N(e,t))throw new Error(`Index must a whole number N, where 0 <= N < ${e.options.length}. But it is ${t}`);x(`${e.name}_INDEX`,`${t}`),e.current_value=e.options[t].value,e.current_index=t})(t,o.selectedIndex),t.current_index=o.selectedIndex,t.current_value=t.options[o.selectedIndex].value,de(e,t)}))),t.input_elements.push(o)},ce=(e,t,n)=>{if("INPUT"==n.tagName){if(n.value=t.current_value,t.read_only)n.disabled=!0,n.style.cursor="not-allowed";else{n.disabled=!1,null!=t.default_value?n.placeholder=`Default: ${t.default_value}`:n.placeholder="Dynamic default value";const o=()=>{t.current_value==n.value?i.debug(`Value for placeholder ${t.name} was not changed`):v(t,n)&&(T(t,n.value),t.current_value=n.value,de(e,t),n.classList.remove("value-modified"))};v(t,n),n.addEventListener("input",(()=>{v(t,n),n.value==t.current_value?n.classList.remove("value-modified"):n.classList.add("value-modified")})),n.addEventListener("keypress",(e=>{"Enter"===e.key&&(i.debug("Textbox change confirmed with Enter key for",t.name,"- new value:",n.value),o())})),n.addEventListener("keydown",(e=>{"Escape"===e.key&&(i.debug("Resetting input field for ",t.name," to current placeholder value"),n.value=t.current_value)})),n.addEventListener("focusout",(()=>{e.settings.apply_change_on_focus_change&&(i.debug("Textbox change confirmed by changing focus",t.name,"- new value:",n.value),o())}))}t.input_elements.push(n)}else console.warn(`Input element/tag for placeholder '${t.name}' is expected to be INPUT, but is ${n.tagName}. Skipping`,n)},de=(e,t)=>{const n=e.dependency_graph.get_all_upstream(t);let o=!1;for(const e of n)o=o||e.reload_page_on_change;if(i.debug(`Change of ${t.name} requires updates for placeholders:\n${n.map((e=>` - ${e.name}\n`)).join("")}\nRequires reload: ${o}`),o)l();else{if(e.dependency_graph.on_placeholder_value_change(t),(e=>{if(i.debug(`Updating ${e.input_tables.length} automatic input tables`),e.input_tables.length>0){const t=e.dependency_graph.get_all_used_placeholders();for(const n of e.input_tables)re(e,n,t)}})(e),t.type==X.Checkbox){const e=t;for(const t of e.input_elements)t.checked=e.current_is_checked}else if(t.type==X.Dropdown){const e=t;for(const t of e.input_elements)t.selectedIndex=e.current_index}else if(t.type==X.Textbox){const e=t;for(const t of e.input_elements)t.value=e.current_value,v(e,t)}else console.warn(`Placeholder ${t.name} has unexpected type '${t.type}'`);H(n)}},ue=()=>{const e=(e=>{const t=new Map,n=new Map,o=new Map,a=new Map,r=new Map,l=F("validators","object",e);for(const e of l){const t=f(e);if(r.has(t.id))throw new Error(`Multiple validators with id '${t.id}'`);r.set(t.id,t)}const s=(e=>{const t=z("apply_change_on_focus_change",e),n=z("debug",e),o=z("expand_auto_tables",e);return{apply_change_on_focus_change:$("apply_change_on_focus_change",t),debug:$("debug",n),delay_millis:J("delay_millis",e),expand_auto_tables:$("expand_auto_tables",o),highlight_placeholders:$("highlight_placeholders",!1),normal_prefix:W("normal_prefix",e),normal_suffix:W("normal_suffix",e),html_prefix:W("html_prefix",e),html_suffix:W("html_suffix",e),static_prefix:W("static_prefix",e),static_suffix:W("static_suffix",e),dynamic_prefix:W("dynamic_prefix",e),dynamic_suffix:W("dynamic_suffix",e)}})(V("settings","object",e)),i=F("placeholder_list","object",e);for(let e=0;e<i.length;e++){const l=B(i[e],r,s,e);t.set(l.name,l),l.type==X.Textbox?n.set(l.name,l):l.type==X.Checkbox?o.set(l.name,l):l.type==X.Dropdown?a.set(l.name,l):console.warn("Unknown placeholder type:",l.type)}return{placeholders:t,textboxes:n,checkboxes:o,dropdowns:a,settings:s,dependency_graph:new j(t),input_tables:[]}})(window.PlaceholderPluginConfigJson);var t;t=e.settings.debug,i=t?{log:n,info:o,debug:a}:s,i.info("PluginConfig",e),(e=>{window.PlaceholderPlugin={settings:e.settings,placeholders:e.placeholders,debug_disable_reload:c,debug_print_dependency_graph:()=>e.dependency_graph.debug_print_representation()}})(e);const r=e.settings.delay_millis;r<0?fe(e):0==r?window.addEventListener("load",(()=>fe(e))):window.addEventListener("load",(()=>{setTimeout((()=>fe(e)),r)}))},fe=e=>{((e,t)=>{for(const n of t.placeholders.values())S(e,n),P(e,n),D(e,n),n.allow_inner_html&&O(e,n);(e=>{const t=document.querySelectorAll(".placeholder-value[data-placeholder]");for(const n of t){const t=n.getAttribute("data-placeholder");if(t){const o=e.placeholders.get(t);o?o.output_elements.push(n):console.warn(`No placeholder named '${t}', that is referenced by element:`,n)}else console.warn("Element has empty/no attribute 'data-placeholder':",n)}})(t),H([...t.placeholders.values()])})(document.body,e),e.dependency_graph.debug_print_representation(),(e=>{const t=document.querySelectorAll("input[data-input-for], select[data-input-for]");for(let n of t){const t=n.getAttribute("data-input-for");if(null==t)throw new Error("How can this be, the selector forces the 'data-input-for' attribute to exist");const o=e.placeholders.get(t);o?le(e,o,n):(console.warn(`Unknown placeholder referenced in input element: '${t}'`),n.classList.add("input-for-variable"),n.value=`ERROR_UNDEFINED_PLACEHOLDER: ${t}`)}})(e),(e=>{const t=document.querySelectorAll("div.auto-input-table");if(t.length>0){const n=e.dependency_graph.get_all_used_placeholders().filter((e=>!e.read_only));for(const o of t)if(o instanceof HTMLElement){const t=o.getAttribute("data-columns")||"name,input",a=t.includes(",")?t.split(","):[t],r=null===o.getAttribute("data-hide-empty");ne(o,a,e,n,r)}else console.warn("Element",o,"is expected to be an HTMLElement, but is not")}})(e)};window.PlaceholderPluginConfigJson?ue():document.addEventListener("PlaceholderPluginConfigJson",ue)})();



