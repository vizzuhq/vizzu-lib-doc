///// No custom extra JS code exists /////
///// Plugin data /////
window.PlaceholderPluginConfigJson = {"placeholder_list": [{"name": "LIB_MINOR_VERSION", "description": "", "read_only": false, "allow_inner_html": false, "allow_nested": false, "type": "textbox", "validators": [], "default_value": "0.16"}, {"name": "LIB_PATCH_VERSION", "description": "", "read_only": false, "allow_inner_html": false, "allow_nested": false, "type": "textbox", "validators": [], "default_value": "0.16.0"}], "settings": {"apply_change_on_focus_change": true, "debug": false, "delay_millis": 0, "dynamic_prefix": "d", "dynamic_suffix": "d", "editable_prefix": "e", "editable_suffix": "e", "expand_auto_tables": true, "html_prefix": "i", "html_suffix": "i", "inline_editors": true, "inline_editor_style": "simple", "normal_is_alias_for": "editable", "normal_prefix": "x", "normal_suffix": "x", "static_prefix": "s", "static_suffix": "s"}, "validators": []};


///// Normal plugin code /////
(()=>{"use strict";const e=()=>`${(new Date).toISOString().slice(11,23)} (TS)`;let t=!0;function n(...t){console.log.apply(console,[`${e()} |`,...t])}function o(...t){console.info.apply(console,[`${e()} |`,...t])}function l(...t){console.debug.apply(console,[`${e()} |`,...t])}function a(...e){}const r=()=>{t?window.location.reload():o("Page reload was triggered and blocked due to PlaceholderPlugin.debug_disable_reload")},s={log:a,info:a,debug:a};let i=s;const c=()=>{o("Page reload was disabled for debugging purposes"),t=!1};var d,u;!function(e){e.Warning="WARNING",e.Error="ERROR"}(d||(d={})),function(e){e.Good="GOOD",e.Warning="WARNING",e.Error="ERROR",e.NoValidator="NO_VALIDATOR"}(u||(u={}));const p=e=>{const t=Se("rules","object",e);if(0==t.length)throw new Error(`Rules should not be an empty array.\nProblematic object: ${JSON.stringify(e)}`);const n=Te("id",e);return{display_name:Te("display_name",e),id:n,rules:t.map((e=>w(e,n)))}},h=(e,t)=>{for(const n of e.rules)if(n.is_match_function(t)!=n.should_match&&n.severity==d.Error)return!1;return!0},f=(e,t)=>{if(e.validators.length>0){for(const n of e.validators)if(h(n,t))return!0;return!1}return!0},_=(e,t)=>{const n=[],o=[];for(const l of e.rules)l.is_match_function(t)!=l.should_match&&(l.severity==d.Error?o.push(`[${e.display_name}] Error: ${l.error_message}`):l.severity==d.Warning?n.push(`[${e.display_name}] Warning: ${l.error_message}`):console.warn(`Unknown rule severity ${l.severity}`));return{errors:o,warnings:n}},g=(e,t)=>{const n=[];let o=!1;if(e.validators.length>0){for(const l of e.validators){const a=_(l,t);if(n.push(a),0==a.errors.length&&(o=!0,0==a.warnings.length))return b(e)}return o?v(n):m(n)}return{rating:u.NoValidator,message:"No validators are specified for this placeholder"}},m=e=>{const t=[];for(const n of e)t.push(...n.errors);return{rating:u.Error,message:t.join("\n")}},v=e=>{const t=[];for(const n of e)0==n.errors.length&&t.push(...n.warnings);return{rating:u.Warning,message:t.join("\n")}},b=e=>{let t;if(1==e.validators.length)t=`Expecting: ${e.validators[0].display_name}`;else{t="Expecting one of the following: ";for(const n of e.validators)t+=`\n - ${n.display_name}`}return{rating:u.Good,message:t}},w=(e,t)=>{const n=Te("severity",e);let o,l;if("warning"==n||"warn"==n)o=d.Warning;else{if("error"!=n)throw new Error(`Unknown severity '${n}'`);o=d.Error}if(e.regex){const t=Te("regex",e),n=new RegExp(t);l=e=>n.test(e)}else{const n=Te("match_function",e),o=new Function("value",n);l=e=>{try{const l=o(e);if("boolean"!=typeof l)throw new Error(`Custom match_function '${n}' of validator ${t} should return a boolean, but it returned a ${typeof l}: ${l}`);return l}catch(e){throw new Error(`Failed to evaluate match_function '${n}' of validator ${t}: ${e}`)}}}return{severity:o,should_match:Ce("should_match",e),error_message:Te("error_message",e),is_match_function:l}},x=(e,t)=>{e.classList.remove("validation-error","validation-warn","validation-ok","validation-none"),t.rating==u.Good?e.classList.add("validation-ok"):t.rating==u.Warning?e.classList.add("validation-warn"):t.rating==u.Error?e.classList.add("validation-error"):t.rating==u.NoValidator?e.classList.add("validation-none"):console.warn(`Unknown placeholder validity: ${t.rating}`),e.title=t.message},y=(e,t)=>{const n=g(e,t.value);return x(t,n),i.debug("Validation: name =",e.name,", value =",t.value,", results =",n.rating),n.rating!=u.Error},$=(e,t)=>{const n=g(e,t.innerText);return x(t,n),i.debug("Validation: name =",e.name,", value =",t.innerText,", results =",n.rating),n.rating!=u.Error},k="PLACEHOLDER_",E="PLACEHOLDER-SETTING_",L=(e,t)=>{localStorage.setItem(k+e,t)},T=e=>localStorage.getItem(k+e),C=(e,t)=>{const n=localStorage.getItem(`${E}${e}`);return i.info(`Reading boolean setting '${e}' with value ${n}`),null===n?t:"1"===n||"0"!==n&&(console.warn(`Unexpected state for boolean setting. Should be null, '0' or '1', but was '${n}'`),t)},N=(e,t,n)=>{n.includes(t)||console.warn(`Default value '${t}' for multiple choice setting ${e} is not in the list of allowed values. Allowed are: ${n}`);const o=localStorage.getItem(`${E}${e}`);return i.info(`Reading multiple choice setting '${e}' with value ${o}`),null===o?t:n.includes(o)?o:(console.warn(`Unexpected state for multiple choice setting. Should be null or one of ${n}, but was '${o}'`),t)},S=(e,t)=>{e.current_is_checked=t,e.current_value=t?e.value_checked:e.value_unchecked,L(`${e.name}_IS_CHECKED`,t?"1":"0")},D=()=>{R(k)},A=()=>{R(E)},R=e=>{console.warn(`Clearing all localStorage items starting with '${e}'`);let t=0;for(;t<localStorage.length;){const n=localStorage.key(t);(null==n?void 0:n.startsWith(e))?localStorage.removeItem(n):t++}r()},I=(e,t)=>{try{const n=e.options[t];return null!=n&&null!=n}catch(e){return!1}},P=(e,t)=>{if(!I(e,t))throw new Error(`Index must a whole number N, where 0 <= N < ${e.options.length}. But it is ${t}`);L(`${e.name}_INDEX`,`${t}`),e.current_value=e.options[t].value,e.current_index=t},H=(e,t)=>{const n=f(e,t);if(i.info(`Set textbox ${e.name} to '${t}'. Validation ok? ${n}`),!n)throw new Error(`Validation error: Value '${t}' is not valid for placeholder ${e.name}`);L(`${e.name}_TEXT`,t)},V=(e,t,n)=>{t.classList.add("placeholder-value-dropdown"),t.querySelectorAll(".inline-editor-icon-span").forEach((e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg>'})),t.setAttribute("tabindex","0");const o={signal:e.event_listener_abort_controller.signal},l=n.description?`\nDescription: ${n.description}`:"";let a=`Placeholder name: ${n.name}${l}\nDefault option: ${n.options[n.default_index].value}\nUsage: (left-)click to cycle forward through the values, right-click to cycle through backwards. You can also use the Enter, Up, and Down keys if the placeholder is selected.\nPossible values:`;for(const e of n.options)a+=`\n- ${e.value}`;t.title=a;const r=t=>{let o=(n.current_index+t)%n.options.length;o<0&&(o+=n.options.length),P(n,o),n.current_index=o,n.current_value=n.options[o].value,oe(e,n)};t.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),r(1)}),o),t.addEventListener("contextmenu",(e=>{e.preventDefault(),e.stopPropagation(),r(-1)}),o),t.addEventListener("keydown",(e=>{"Enter"===e.key||"ArrowDown"===e.key?(r(1),e.preventDefault()):"ArrowUp"===e.key&&(r(-1),e.preventDefault())}),o)},O=(e,t,n)=>{t.tabIndex=0,t.spellcheck=!1,t.translate=!1,t.autocapitalize="off",t.classList.add("placeholder-value-editable"),t.querySelectorAll(".inline-editor-icon-span").forEach((e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'}));const o={signal:e.event_listener_abort_controller.signal},l=()=>{n.current_value==t.innerText?i.debug(`Value for placeholder ${n.name} was not changed`):$(n,t)&&(H(n,t.innerText),n.current_value=t.innerText,oe(e,n),t.classList.remove("value-modified"))};$(n,t),t.title=n.default_tooltip,t.addEventListener("input",(()=>{$(n,t),t.innerText==n.current_value?t.classList.remove("value-modified"):t.classList.add("value-modified")}),o),t.addEventListener("keypress",(e=>{"Enter"===e.key&&(e.preventDefault(),i.debug("Textbox change confirmed with Enter key for",n.name,"- new value:",t.innerText),l(),U(t))}),o),t.addEventListener("keydown",(e=>{"Escape"===e.key&&(i.debug("Resetting input field for ",n.name," to current placeholder value"),xe(t,n.current_value),$(n,t),t.classList.remove("value-modified"),U(t))}),o),t.addEventListener("focusout",(()=>{var o;i.debug("Focus lost"),e.settings.apply_change_on_focus_change&&(i.debug("Textbox change confirmed by changing focus",n.name,"- new value:",t.innerText),l());const a=g(n,t.innerText);if(a.rating==u.Good||a.rating==u.NoValidator)for(const e of n.output_elements)e.classList.contains("placeholder-value-editable")&&(e.title=n.default_tooltip);t.contentEditable="false",null===(o=window.getSelection())||void 0===o||o.removeAllRanges()}),o),t.addEventListener("focusin",(()=>{i.debug("Focus gained");try{t.contentEditable="plaintext-only"}catch(e){t.contentEditable="true"}$(n,t),setTimeout((()=>U(t)),5)}),o)};let M=!1;const U=e=>{if(window.getSelection&&document.createRange){const t=window.getSelection();if(t){t.removeAllRanges();const n=document.createRange();n.selectNodeContents(e.firstChild||e),t.addRange(n)}else M||(M=!0,console.warn("getSelection returned null"))}else M||(M=!0,console.warn("Can not set selection, because window.getSelection or document.createRange are not supported"))},j=e=>{W(e.settings.inline_editor_style);const t=document.querySelectorAll("span.placeholder-value.inline-editor-requested[data-placeholder]");for(const n of t){const t=n.getAttribute("data-placeholder");if(t){const o=e.placeholders.get(t);if(o){if(!o.read_only){n.classList.add("placeholder-value-any");const t=document.createElement("span");t.classList.add("inline-editor-icon-span"),t.contentEditable="false",n.appendChild(t),o.type==Ae.Textbox?O(e,n,o):o.type==Ae.Checkbox?ae(e,n,o):o.type==Ae.Dropdown&&V(e,n,o)}}else console.warn(`Unknown placeholder referenced in input element: '${t}'`,n)}}},W=e=>{if(Ee.includes(e)){for(const e of Ee)document.body.classList.remove(`inline-editor-${e}`);document.body.classList.add(`inline-editor-${e}`)}else console.error(`Tried to set inline editor style '${e}', but only ${Ee} are allowed`)},q=new Map;q.set("name","Name"),q.set("description","Description"),q.set("value","Value"),q.set("input","Input element"),q.set("description-or-name","Description / name");const z=(e,t)=>{e.appendChild(document.createTextNode(t))},B=(e,t)=>{const n=document.createElement(t);return e.appendChild(n),n},F=(e,t,n)=>{const o=t=>{for(const n of e.placeholders.values())for(const e of n.output_elements)t?e.classList.add("placeholder-value-highlighted"):e.classList.remove("placeholder-value-highlighted")};o(e.settings.highlight_placeholders),n&&(B(t,"b").textContent="Settings");const l=e=>{};J(t,e.settings.expand_auto_tables,"expand_auto_tables","Expand placeholder tables by default*",l),J(t,e.settings.apply_change_on_focus_change,"apply_change_on_focus_change","Apply value when focus changes away*",l),J(t,e.settings.debug,"debug","Log JavaScript debug messages to console*",l),J(t,e.settings.highlight_placeholders,"highlight_placeholders","Highlight placeholders (useful for debugging)",o),J(t,e.settings.inline_editors,"inline_editors","Allow editing placeholders directly in the page",(t=>{t?j(e):(e=>{const t=document.querySelectorAll("span.placeholder-value-editable, span.placeholder-value-checkbox, span.placeholder-value-dropdown");e.event_listener_abort_controller.abort(),e.event_listener_abort_controller=new AbortController;for(const e of t){const t=e;t.classList.remove("placeholder-value-editable","placeholder-value-checkbox","placeholder-value-dropdown","placeholder-value-any","validation-error","validation-warn","validation-ok","validation-none"),t.contentEditable="false",t.title="",t.removeAttribute("tabindex"),t.querySelectorAll(".inline-editor-icon-span").forEach((e=>e.remove()))}})(e)})),X(t,e.settings.inline_editor_style,Ee,"inline_editor_style","Style to apply to inline placeholder editors",W),B(t,"i").textContent="* You need to reload the page for these settings to take effect.";const a=B(t,"div");a.classList.add("button-bar");const r=B(a,"button");r.textContent="Reset settings",r.addEventListener("click",A);const s=B(a,"button");s.textContent="Reset all placeholders",s.addEventListener("click",D)},J=(e,t,n,o,l)=>{const a=B(e,"label");a.textContent=`${o} `;const r=B(a,"input");r.type="checkbox",r.checked=t,r.addEventListener("change",(()=>{((e,t)=>{i.info(`Storing boolean setting '${e}' with value ${t}`),localStorage.setItem(`${E}${e}`,t?"1":"0")})(n,r.checked),l(r.checked)}))},X=(e,t,n,o,l,a)=>{const r=B(e,"label");r.textContent=`${l} `;const s=B(r,"select");for(const e of n){const t=document.createElement("option");t.text=e,t.value=e,s.appendChild(t)}s.value=t,s.addEventListener("change",(()=>{((e,t,n)=>{n.includes(t)?localStorage.setItem(`${E}${e}`,t):console.error(`Tried to store value '${t}' for setting '${e}', but only ${n} are allowed`)})(o,s.value,n),a(s.value)}))},G=(e,t,n,o,l)=>{o=Y(o);const a=document.createElement("div");if(0==o.length){if(!l)return void e.remove();a.textContent="No placeholders to be shown"}else{i.info("Creating automatic input table at",e,"with columns",t),a.classList.add("table-div"),B(a,"b").innerHTML="Enter different values in the table below and press <code>Enter</code> to update this page.";const l=B(a,"table"),r=B(l,"thead"),s=B(r,"tr"),c=B(l,"tbody");for(const e of t){const t=B(s,"th"),n=q.get(e);n?z(t,n):(z(t,e),console.error(`Unknown column name: ${e}`))}const d=[];for(const e of o){if(e.read_only){i.debug(`auto_table: Skipping ${e.name} because it is read-only`);continue}const o=B(c,"tr");Z(o,e,t,n),d.push({element:o,placeholder:e})}n.input_tables.push({columns:t,table_element:l,rows:d})}((e,t,n)=>{t.innerHTML="";const o=B(t,"div"),l=B(o,"div"),a=B(o,"div"),r=B(t,"div"),s=B(r,"div");r.append(n);const i=e=>{r.style.display=e?"flex":"none",l.textContent="Placeholders: Click here to "+(e?"collapse":"expand")};o.classList.add("auto-table-title"),r.classList.add("expandable_contents"),s.classList.add("settings_contents");let c=e.settings.expand_auto_tables;i(c),l.addEventListener("click",(()=>{c=!c,i(c)})),l.classList.add("text"),((e,t,n)=>{let o=!1;e.onclick=e=>{e.preventDefault(),e.stopPropagation(),o=!o,t.style.display=o?"flex":"none",o&&n()},t.style.display=o?"flex":"none",e.classList.add("settings_button"),e.innerHTML='<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">\n <path id="svg_6" d="m7.79338,20.02127l0,0c0,-6.84327 5.74307,-12.39083 12.82751,-12.39083l0,0c3.40207,0 6.6648,1.30546 9.07042,3.62919c2.40563,2.32373 3.75709,5.47539 3.75709,8.76164l0,0c0,6.84327 -5.74307,12.39083 -12.82751,12.39083l0,0c-7.08444,0 -12.82751,-5.54757 -12.82751,-12.39083zm6.41376,0l0,0c0,3.42163 2.87154,6.19542 6.41376,6.19542c3.54222,0 6.41376,-2.77378 6.41376,-6.19542c0,-3.42163 -2.87154,-6.19542 -6.41376,-6.19542l0,0c-3.54222,0 -6.41376,2.77378 -6.41376,6.19542z" stroke="#fff" fill="#ffffff"/>\n <path id="svg_7" d="m17.46095,7.63098l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(180, 20.9544, 35.1419)" id="svg_11" d="m17.57012,37.76199l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(43, 31.5439, 9.59605)" id="svg_12" d="m28.15964,12.21614l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(90, 35.9107, 19.8581)" id="svg_13" d="m32.52645,22.47815l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(135, 31.7623, 30.2292)" id="svg_14" d="m28.37798,32.84933l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-45, 9.49152, 9.48688)" id="svg_15" d="m6.10724,12.10697l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-90, 5.01553, 19.9672)" id="svg_16" d="m1.63126,22.58732l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n <path transform="rotate(-135, 9.60069, 30.7751)" id="svg_17" d="m6.21641,33.39518l1.2691,-5.24017l4.23035,0l1.2691,5.24017l-6.76856,0z" stroke="#fff" fill="#ffffff"/>\n</svg>',e.title="Hide / show settings"})(a,s,(()=>{c||(c=!0,i(c))})),F(e,s,!0)})(n,e,a)},Y=e=>[...new Set(e)].sort(((e,t)=>e.order_index-t.order_index)),Z=(e,t,n,o)=>{for(const l of n){const n=B(e,"td");if("name"==l)z(n,t.name);else if("description"==l)z(n,t.description);else if("value"==l){const e=ce(t);n.appendChild(e),t.output_elements.push(e)}else if("input"==l){const e=B(n,"input");Q(o,t,e)}else if("description-or-name"==l){const e=t.description||t.name;z(n,e)}else console.error(`Unknown column name: ${l}`)}},K=(e,t,n)=>{n=Y(n);const o=[];for(const e of t.rows)n.includes(e.placeholder)?o.push(e):(i.debug(`Removed table row for ${e.placeholder.name}:`,e.element),e.element.remove());const l=[],a=[...o].reverse(),r=[...n].reverse();let s;for(;s=r.pop();){const n=a.slice(-1)[0];if(n&&n.placeholder===s)a.pop(),l.push(n);else{const n=document.createElement("tr");0==l.length?t.table_element.insertBefore(n,t.table_element.firstChild):l[l.length-1].element.insertAdjacentElement("afterend",n),Z(n,s,t.columns,e),l.push({element:n,placeholder:s}),i.debug(`Added table row for ${s.name}:`,n)}}t.rows=l},Q=(e,t,n)=>{n.classList.add("input-for-variable"),t.type==Ae.Checkbox?ee(e,t,n):t.type==Ae.Dropdown?te(e,t,n):t.type==Ae.Textbox?ne(e,t,n):console.error(`Placeholder ${t.name} has unknown type '${t.type}'`)},ee=(e,t,n)=>{"INPUT"==n.tagName?(n.type="checkbox",n.checked=t.current_is_checked,t.read_only?n.disabled=!0:(n.disabled=!1,n.addEventListener("change",(()=>{i.debug("Checkbox change",t.name,"- new value:",n.checked),S(t,n.checked),t.current_value=n.checked?t.value_checked:t.value_unchecked,oe(e,t)}))),t.input_elements.push(n)):console.warn(`Input element/tag for placeholder '${t.name}' is expected to be INPUT, but is ${n.tagName}. Skipping`,n)},te=(e,t,n)=>{const o=document.createElement("select");o.classList.add("placeholder-dropdown");for(const e of t.options){const t=document.createElement("option");t.text=e.display_name,o.appendChild(t)}n.parentNode?n.parentNode.replaceChild(o,n):console.error("Input element",n,`for placeholder ${t.name} has no parent!`),o.selectedIndex=t.current_index,t.read_only?o.disabled=!0:(o.disabled=!1,o.addEventListener("change",(()=>{i.debug("Dropdown change",t.name,"- new index:",o.selectedIndex),P(t,o.selectedIndex),t.current_index=o.selectedIndex,t.current_value=t.options[o.selectedIndex].value,oe(e,t)}))),t.input_elements.push(o)},ne=(e,t,n)=>{if("INPUT"==n.tagName){if(n.value=t.current_value,t.read_only)n.disabled=!0,n.style.cursor="not-allowed";else{n.disabled=!1,null!=t.default_value?n.placeholder=`Default: ${t.default_value}`:n.placeholder="Dynamic default value";const o=()=>{t.current_value==n.value?i.debug(`Value for placeholder ${t.name} was not changed`):y(t,n)&&(H(t,n.value),t.current_value=n.value,oe(e,t),n.classList.remove("value-modified"))};y(t,n),n.addEventListener("input",(()=>{y(t,n),n.value==t.current_value?n.classList.remove("value-modified"):n.classList.add("value-modified")})),n.addEventListener("keypress",(e=>{"Enter"===e.key&&(i.debug("Textbox change confirmed with Enter key for",t.name,"- new value:",n.value),o())})),n.addEventListener("keydown",(e=>{"Escape"===e.key&&(i.debug("Resetting input field for ",t.name," to current placeholder value"),n.value=t.current_value,y(t,n),n.classList.remove("value-modified"))})),n.addEventListener("focusout",(()=>{e.settings.apply_change_on_focus_change&&(i.debug("Textbox change confirmed by changing focus",t.name,"- new value:",n.value),o())}))}t.input_elements.push(n)}else console.warn(`Input element/tag for placeholder '${t.name}' is expected to be INPUT, but is ${n.tagName}. Skipping`,n)},oe=(e,t)=>{const n=e.dependency_graph.get_all_upstream(t);let o=!1;for(const e of n)o=o||e.reload_page_on_change;if(i.debug(`Change of ${t.name} requires updates for placeholders:\n${n.map((e=>` - ${e.name}\n`)).join("")}\nRequires reload: ${o}`),o)r();else{if(e.dependency_graph.on_placeholder_value_change(t),(e=>{if(i.debug(`Updating ${e.input_tables.length} automatic input tables`),e.input_tables.length>0){const t=e.dependency_graph.get_all_used_placeholders();for(const n of e.input_tables)K(e,n,t)}})(e),t.type==Ae.Checkbox){const e=t;for(const t of e.input_elements)t.checked=e.current_is_checked}else if(t.type==Ae.Dropdown){const e=t;for(const t of e.input_elements)t.selectedIndex=e.current_index}else if(t.type==Ae.Textbox){const e=t;for(const t of e.input_elements)t.value=e.current_value,y(e,t)}else console.warn(`Placeholder ${t.name} has unexpected type '${t.type}'`);we(n)}},le=(e,t)=>{t.current_is_checked?(e.classList.add("checked"),e.classList.remove("unchecked")):(e.classList.add("unchecked"),e.classList.remove("checked"))},ae=(e,t,n)=>{t.classList.add("placeholder-value-checkbox"),t.querySelectorAll(".inline-editor-icon-span").forEach((e=>{e.innerHTML='<svg class="checkbox-checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9" /></svg><svg class="checkbox-unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>'})),t.setAttribute("tabindex","0");const o={signal:e.event_listener_abort_controller.signal},l=n.description?`\nDescription: ${n.description}`:"";t.title=`Placeholder name: ${n.name}${l}\nUsage: Click to toggle the value. You can also press Enter if the placeholder is focused.`;const a=()=>{const t=!n.current_is_checked;n.current_value=t?n.value_checked:n.value_unchecked,i.debug("Checkbox change",n.name,"- new value:",t),S(n,t),oe(e,n)};t.addEventListener("click",a,o),t.addEventListener("keydown",(e=>{"Enter"===e.key&&(a(),e.preventDefault())}),o),le(t,n)},re=(e,t,n)=>{const o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let l,a=0;for(t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n}'`);l=o.nextNode();)if(l.nodeValue){const e=l.nodeValue.replace(t,n);l.nodeValue!=e&&(l.nodeValue=e,a++)}return a},se=e=>{const t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},ie=(e,t,n)=>{n=se(n),t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n}'`);const o=e.innerHTML.replace(t,n);return o!=e.innerHTML?(e.innerHTML=o,1):0},ce=e=>{const t=document.createElement("span");return t.classList.add("placeholder-value"),t.dataset.placeholder=e.name,t.textContent=e.expanded_value,t},de=(e,t,n,o)=>pe(e,t,n,o,"placeholder-value-static"),ue=(e,t,n,o)=>pe(e,t,n,o,"inline-editor-requested"),pe=(e,t,n,o,l)=>{var a;const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let s;t.global||console.warn(`You should set the global flag for the regex. Context: replacing '${t.source}' with '${n.current_value}'`);let c=0;if(o){const e=l?`.${l}`:"",t=document.querySelectorAll(`${e}.placeholder-value[data-placeholder]`);for(const e of t)e.getAttribute("data-placeholder")===n.name&&c++;if(c>0){const e=l?"editable":"dynamic";i.debug(`${c} ${e} placeholder elements already exist for placeholder ${n.name}`)}}const d=[];for(;s=r.nextNode();)s.nodeValue&&s.nodeValue.match(t)&&d.push(s);if(d){const e=`<span class="placeholder-value${l?` ${l}`:""}" data-placeholder="${se(n.name)}">TEMPORARY PLACEHOLDER</span>`;for(const n of d)if(n.nodeValue){const o=se(n.nodeValue).replace(t,e),l=document.createElement("span");l.innerHTML=o,null===(a=n.parentElement)||void 0===a||a.replaceChild(l,n)}}return d.length+c},he=(e,t)=>{const n=de(e,t.regex_dynamic,t,!0);n>0&&(i.debug(`Replaced ${t.name} via dynamic method at least ${n} time(s)`),t.count_on_page+=n)},fe=(e,t)=>{const n=ue(e,t.regex_editable,t,!0);n>0&&(i.debug(`Replaced ${t.name} via editable method at least ${n} time(s)`),t.count_on_page+=n)},_e=(e,t,n)=>{const o=ge(e,t,n);o>0&&(i.debug(`Replaced ${t.name} via normal (${n.settings.normal_is_alias_for}) method at least ${o} time(s)`),t.count_on_page+=o)},ge=(e,t,n)=>{switch(n.settings.normal_is_alias_for){case"dynamic":return de(e,t.regex_normal,t,!1);case"editable":return ue(e,t.regex_normal,t,!1);case"html":return ie(e,t.regex_html,t.expanded_value);case"static":return re(e,t.regex_static,t.expanded_value);default:return console.warn(`Unknown replace type mapped in 'settings.normal_is_alias_for': ${n.settings.normal_is_alias_for}. Skipping replacing normal placeholders`),0}},me=(e,t)=>{const n=re(e,t.regex_static,t.expanded_value);n>0&&(i.debug(`Replaced ${t.name} via static method at least ${n} time(s)`),t.count_on_page+=n,t.reload_page_on_change=!0)},ve=(e,t)=>{const n=ie(e,t.regex_html,t.expanded_value);n>0&&(i.debug(`Replaced ${t.name} via innerHTML method at least ${n} time(s)`),t.count_on_page+=n,t.reload_page_on_change=!0)},be=(e,t,n)=>e.replace(t.regex_dynamic,n).replace(t.regex_editable,n).replace(t.regex_html,n).replace(t.regex_normal,n).replace(t.regex_static,n),we=e=>{for(const t of e)if(t.output_elements.length>0){for(const e of t.output_elements)xe(e,t.expanded_value);if(t.type==Ae.Textbox){const e=g(t,t.expanded_value);for(const n of t.output_elements)n.classList.contains("placeholder-value-editable")&&x(n,e)}else if(t.type==Ae.Checkbox)for(const e of t.output_elements)e.classList.contains("placeholder-value-checkbox")&&le(e,t)}},xe=(e,t)=>{t?e.classList.remove("value-empty"):e.classList.add("value-empty");for(const n of e.childNodes)if(n.nodeType===Node.TEXT_NODE)return void(n.textContent=t);e.insertAdjacentText("afterbegin",t)};class ye{constructor(e){this.placeholders=e,this.nodes=new Map,this.reset()}reset(){this.nodes.clear();for(const e of this.placeholders.values())this.nodes.set(e.name,new ke(e));for(const e of this.placeholders.values())try{this.on_placeholder_value_change(e)}catch(e){console.error("Error while building dependency graph",e),console.warn("Placeholder values may be inconsistent. Clearing your localStorage should fix this problem."),confirm("We detected a problem with your placeholder values. Resetting them to the defaults should fix this. Should we reset your placeholders?")&&D()}for(const e of this.nodes.values())0==e.downlinks.length&&e.recalculate_expanded_value(!0)}debug_print_representation(){let e="Dependency graph nodes (DEBUG view):";for(const t of this.nodes.values()){const n=t.downlinks.map((e=>e.placeholder.name)).join(", ");0==n.length?e+=`\n${t.placeholder.name} (${t.placeholder.expanded_value}) has no dependencies`:e+=`\n${t.placeholder.name} (${t.placeholder.expanded_value}) depends on ${n}`}i.debug(e)}unmark_everything(){for(const e of this.nodes.values())e.marked=!1}get_node(e){const t=this.nodes.get(e.name);if(null==t)throw new Error(`Placeholder ${e.name} is not part of the dependency graph`);return t}on_placeholder_value_change(e){const t=this.get_node(e);if(this.update_placeholder_downlinks(e),this.has_loop())throw e.expanded_value=e.current_value,t.downlinks=[],new Error(`Placeholder ${e.name} was part of a loop and has temporarily been made non-recursive`);t.recalculate_expanded_value(!0)}get_all_marked(){const e=[];for(const t of this.nodes.values())t.marked&&e.push(t.placeholder);return e}get_all_upstream(e){return this.unmark_everything(),this.get_node(e).recursive_mark_upstream(),this.get_all_marked()}update_placeholder_downlinks(e){if(!e.allow_nested)return void i.debug(`${e.name} can not contain nested placeholders`);const t=this.get_node(e);for(const e of t.downlinks)e.remove_uplink(t);t.downlinks=[];for(const n of this.nodes.values())n!=t&&$e(e.current_value,n.placeholder)&&(t.downlinks.push(n),n.uplinks.push(t))}get_all_used_placeholders(){this.unmark_everything();for(const e of this.nodes.values())e.placeholder.count_on_page>0&&e.recursive_mark_downstream();return this.get_all_marked()}has_loop(){this.unmark_everything();for(const e of this.nodes.values())if(!e.marked&&this._has_loop([],e))return!0;return!1}_has_loop(e,t){const n=[...e,t],o=e.indexOf(t);if(-1!=o){let e="Dependency cycle in placeholders detected:";for(let t=o;t<n.length;t++){const o=n[t].placeholder;e+=`\n$ -> ${o.name}: ${o.current_value}`}return console.warn(e),!0}if(t.marked)return!1;t.marked=!0;for(const e of t.downlinks)if(this._has_loop(n,e))return!0;return!1}}const $e=(e,t)=>t.regex_dynamic.test(e)||t.regex_editable.test(e)||t.regex_html.test(e)||t.regex_normal.test(e)||t.regex_static.test(e);class ke{constructor(e){this.uplinks=[],this.downlinks=[],this.marked=!1,this.placeholder=e}remove_uplink(e){this.uplinks=this.uplinks.filter((t=>t!=e))}recalculate_expanded_value(e){let t=this.placeholder.current_value;if(this.placeholder.allow_nested&&(t=((e,t)=>{if(0==t.length)return e;if(1==t.length){const n=t[0];return be(e,n,n.expanded_value)}{const n=`${Date.now()}_${Math.random()}`;for(const o of t)e=be(e,o,`x${o.name}#${n}x`);for(const o of t){const t=new RegExp(`x${o.name}#${n}x`,"g");e=e.replace(t,o.expanded_value)}return e}})(t,this.downlinks.map((e=>e.placeholder)))),this.placeholder.expanded_value=t,e)for(const t of this.uplinks)t.recalculate_expanded_value(e)}recursive_mark_upstream(){this.marked=!0;for(const e of this.uplinks)e.recursive_mark_upstream()}recursive_mark_downstream(){this.marked=!0;for(const e of this.downlinks)e.recursive_mark_downstream()}}const Ee=["simple","icons","custom"],Le=(e,t,n)=>{const o=n[e],l=typeof o;if(l!=t)throw new Error(`Type mismatch: ${e} should be ${t}, but is ${l}.\nProblematic object: ${JSON.stringify(n)}`);return o},Te=(e,t)=>Le(e,"string",t),Ce=(e,t)=>Le(e,"boolean",t),Ne=(e,t)=>Le(e,"number",t),Se=(e,t,n)=>{const o=n[e];if(Array.isArray(o)){for(const[l,a]of o.entries()){const o=typeof a;if(o!=t){const a=`Type mismatch: ${e}'s ${l+1}th element should be ${t}, but is ${o}.\nProblematic object: ${JSON.stringify(n)}`;throw new Error(a)}}return o}throw new Error(`Type mismatch: ${e} should be an array, but is not.\nProblematic object: ${JSON.stringify(n)}`)};var De,Ae;!function(e){e.Editable="editable"}(De||(De={})),function(e){e.Textbox="TEXTBOX",e.Checkbox="CHECKBOX",e.Dropdown="DROPDOWN"}(Ae||(Ae={}));const Re=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Ie=(e,t,n,o)=>{const l=Te("type",e),a=Te("name",e),r={name:a,order_index:o,regex_dynamic:RegExp(Re(n.dynamic_prefix)+a+Re(n.dynamic_suffix),"g"),regex_editable:RegExp(Re(n.editable_prefix)+a+Re(n.editable_suffix),"g"),regex_html:RegExp(Re(n.html_prefix)+a+Re(n.html_suffix),"g"),regex_normal:RegExp(Re(n.normal_prefix)+a+Re(n.normal_suffix),"g"),regex_static:RegExp(Re(n.static_prefix)+a+Re(n.static_suffix),"g"),default_tooltip:"",description:Te("description",e),read_only:Ce("read_only",e),allow_inner_html:Ce("allow_inner_html",e),allow_nested:Ce("allow_nested",e),current_value:"UNINITIALIZED",expanded_value:"UNINITIALIZED",count_on_page:0,reload_page_on_change:!1,output_elements:[]};if("textbox"===l){const n=Pe(r,e,t);return(e=>{const t=T(`${e.name}_TEXT`);if(null!=t){if(f(e,t))return void(e.current_value=t);console.warn(`Stored value for placeholder ${e.name} is invalid: '${t}'. Will revert to default.`)}if(null!=e.default_value)e.current_value=e.default_value,f(e,e.default_value)||console.warn(`Default value for placeholder '${e.name}' is invalid: '${e.default_value}'`);else{if(!e.default_function)throw new Error(`Either 'default_value' or 'default_function' needs to be set for placeholder ${e.name}`);try{const t=e.default_function();e.current_value=t;try{H(e,t)}catch(n){console.warn(`Default function for placeholder '${e.name}' returned invalid value: '${t}'`)}}catch(t){console.error(`Error while loading default textbox state for placeholder ${e.name}:`,t),e.current_value="DEFAULT_FUNCTION_ERROR"}}})(n),n}if("checkbox"==l){const t=He(r,e);return(e=>{const t=T(`${e.name}_IS_CHECKED`);null==t?e.current_is_checked=e.checked_by_default:"0"==t||"1"==t?e.current_is_checked="1"==t:(console.warn(`Unexpected state for checkbox. Should be '0' or '1', but was '${t}'`),e.current_is_checked=e.checked_by_default),e.current_value=e.current_is_checked?e.value_checked:e.value_unchecked})(t),t}if("dropdown"==l){const t=Ve(r,e);return(e=>{const t=T(`${e.name}_INDEX`);if(null==t)e.current_index=e.default_index;else{const n=Number(t);I(e,n)?e.current_index=n:(console.warn(`Unexpected state for dropdown. Should be a whole number N, where 0 <= N < ${e.options.length}. But it is ${t}`),e.current_index=e.default_index)}e.current_value=e.options[e.current_index].value})(t),t}throw new Error(`Unsupported placeholder type '${l}'`)},Pe=(e,t,n)=>{let o,l;if(null!=t.default_value)l=Te("default_value",t);else{const n=Te("default_function",t);o=()=>{try{const e=new Function(n)();if("string"!=typeof e)throw new Error(`Custom function '${n}' should return a string, but it returned a ${typeof e}: ${e}`);return e}catch(t){throw new Error(`Failed to evaluate default_function '${n}' of placeholder ${e.name}: ${t}`)}}}const a=Se("validators","string",t),r=[];for(const e of a){const t=n.get(e);if(!t){const t=Array.from(n.keys()).join(", ");throw new Error(`No validator with id '${e}' was found. Known validators are ${t}`)}r.push(t)}const s=e.description?`\nDescription: ${e.description}`:"",i=l?`\nDefault value: ${l}`:"\nDefault value generated by function",c=`Placeholder name: ${e.name}${s}${i}\nUsage: Click to edit the value. Leaving the text field or pressing enter will store the new value, pressing Escape will revert current changes. While editing the field, the tooltip will show warnings/errors if your value is not what is expected`;return Object.assign(Object.assign({},e),{default_tooltip:c,default_function:o,default_value:l,input_elements:[],type:Ae.Textbox,validators:r})},He=(e,t)=>Object.assign(Object.assign({},e),{checked_by_default:Ce("checked_by_default",t),current_is_checked:!1,input_elements:[],value_checked:Te("value_checked",t),value_unchecked:Te("value_unchecked",t),type:Ae.Checkbox}),Ve=(e,t)=>{const n=Se("options","object",t),o=[];for(const e of n)o.push({display_name:Te("display_name",e),value:Te("value",e)});const l=Ne("default_index",t);if(l<0)throw new Error(`Invalid value: "default_index" should not be negative, but is ${l}.\nProblematic object: ${JSON.stringify(t)}`);if(l>=o.length)throw new Error(`Invalid value: "default_index" should be smaller than the number of options (${o.length}), but is ${l}.\nProblematic object: ${JSON.stringify(t)}`);const a=e.description?`\nDescription: ${e.description}`:"";let r=`Placeholder name: ${e.name}${a}\nDefault option: ${o[l].value}\nUsage: (left-)click to cycle forward through the values, right-click to cycle through backwards. You can also use the Enter, Up, and Down keys if the placeholder is selected.\nPossible values:`;for(const e of o)r+=`\n- ${e.value}`;return Object.assign(Object.assign({},e),{default_tooltip:r,current_index:0,default_index:l,input_elements:[],options:o,type:Ae.Dropdown})},Oe=()=>{const e=(e=>{const t=new Map,n=new Map,o=new Map,l=new Map,a=new Map,r=Se("validators","object",e);for(const e of r){const t=p(e);if(a.has(t.id))throw new Error(`Multiple validators with id '${t.id}'`);a.set(t.id,t)}const s=(e=>{const t=Ce("apply_change_on_focus_change",e),n=Ce("debug",e),o=Ce("expand_auto_tables",e),l=Ce("inline_editors",e),a=Te("inline_editor_style",e);return{apply_change_on_focus_change:C("apply_change_on_focus_change",t),debug:C("debug",n),delay_millis:Ne("delay_millis",e),expand_auto_tables:C("expand_auto_tables",o),highlight_placeholders:C("highlight_placeholders",!1),inline_editors:C("inline_editors",l),inline_editor_style:N("inline_editor_style",a,Ee),normal_is_alias_for:Te("normal_is_alias_for",e),normal_prefix:Te("normal_prefix",e),normal_suffix:Te("normal_suffix",e),editable_prefix:Te("editable_prefix",e),editable_suffix:Te("editable_suffix",e),html_prefix:Te("html_prefix",e),html_suffix:Te("html_suffix",e),static_prefix:Te("static_prefix",e),static_suffix:Te("static_suffix",e),dynamic_prefix:Te("dynamic_prefix",e),dynamic_suffix:Te("dynamic_suffix",e)}})(Le("settings","object",e)),i=Se("placeholder_list","object",e);for(let e=0;e<i.length;e++){const r=Ie(i[e],a,s,e);t.set(r.name,r),r.type==Ae.Textbox?n.set(r.name,r):r.type==Ae.Checkbox?o.set(r.name,r):r.type==Ae.Dropdown?l.set(r.name,r):console.warn("Unknown placeholder type:",r.type)}return{placeholders:t,textboxes:n,checkboxes:o,dropdowns:l,settings:s,dependency_graph:new ye(t),input_tables:[],event_listener_abort_controller:new AbortController}})(window.PlaceholderPluginConfigJson);var t;t=e.settings.debug,i=t?{log:n,info:o,debug:l}:s,i.info("PluginConfig",e),(e=>{window.PlaceholderPlugin={version:"0.5.0+head",settings:e.settings,placeholders:e.placeholders,debug_disable_reload:c,debug_print_dependency_graph:()=>e.dependency_graph.debug_print_representation()}})(e);const a=e.settings.delay_millis,r=window.document$;r?r.subscribe((()=>{a>0?setTimeout((()=>Me(e)),a):Me(e)})):a<0?Me(e):0==a?window.addEventListener("load",(()=>Me(e))):window.addEventListener("load",(()=>{setTimeout((()=>Me(e)),a)}))},Me=e=>{i.info("Called do_plugin_stuff (function for parsing and modifying the page)"),e.placeholders.forEach(((e,t,n)=>{e.count_on_page=0,e.input_elements=[]})),((e,t)=>{for(const n of t.placeholders.values())he(e,n),fe(e,n),_e(e,n,t),me(e,n),n.allow_inner_html&&ve(e,n);(e=>{const t=document.querySelectorAll(".placeholder-value[data-placeholder]");for(const n of t){const t=n.getAttribute("data-placeholder");if(t){const o=e.placeholders.get(t);o?o.output_elements.push(n):console.warn(`No placeholder named '${t}', that is referenced by element:`,n)}else console.warn("Element has empty/no attribute 'data-placeholder':",n)}})(t),we([...t.placeholders.values()])})(document.body,e),e.dependency_graph.debug_print_representation(),(e=>{const t=document.querySelectorAll("input[data-input-for], select[data-input-for]");for(const n of t){const t=n.getAttribute("data-input-for");if(null==t)throw new Error("How can this be, the selector forces the 'data-input-for' attribute to exist");const o=e.placeholders.get(t);o?Q(e,o,n):(console.warn(`Unknown placeholder referenced in input element: '${t}'`),n.classList.add("input-for-variable"),n.value=`ERROR_UNDEFINED_PLACEHOLDER: ${t}`)}})(e),(e=>{const t=document.querySelectorAll("div.auto-input-table");if(t.length>0){const n=e.dependency_graph.get_all_used_placeholders().filter((e=>!e.read_only));for(const o of t)if(o instanceof HTMLElement){const t=o.getAttribute("data-columns")||"name,input",l=t.includes(",")?t.split(","):[t],a=null===o.getAttribute("data-hide-empty");G(o,l,e,n,a)}else console.warn("Element",o,"is expected to be an HTMLElement, but is not")}})(e),(e=>{const t=document.querySelectorAll("div.placeholder-settings-panel");for(const n of t)F(e,n,!1)})(e),e.settings.inline_editors&&j(e),document.body.classList.add("placeholder-plugin-init-done")};window.PlaceholderPluginConfigJson?Oe():document.addEventListener("PlaceholderPluginConfigJson",Oe)})();



