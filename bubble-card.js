class BubbleCard extends HTMLElement{set hass(t){var e;function n(e){t.callService("homeassistant","toggle",{entity_id:e})}if(this.content||(this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='\n <ha-card style="background: none; border: none;">\n <div class="card-content" style="padding: 0;">\n </div>\n </ha-card>\n ',this.card=this.shadowRoot.querySelector("ha-card"),this.content=this.shadowRoot.querySelector("div")),e=this,"?edit=1"!==window.location.search?e.editor="false":e.editor="true","pop-up"!==this.config.card_type||this.getRootNode().host){if("pop-up"===this.config.card_type){this.popUp||(this.card.style.marginTop="0",this.popUp=this.getRootNode().querySelector("#root"));const i=this.config.hash,o=this.popUp,a=this.config.entity||"",r=this.config.icon||"",s=this.config.name||"",c=this.config.state_unit||"",d=this.config.state?t.states[this.config.state].state+c:"",l=this.config.margin_top||"0px",h=this.config.width_desktop||"600px",p=h.match(/(\d+)(\D+)/),u=this.config.entity?"flex":"none";if(!this.headerAdded){const f=document.createElement("div");f.setAttribute("id","header-container");const y=document.createElement("div");f.appendChild(y);const v=document.createElement("ha-icon");v.setAttribute("class","header-icon"),v.setAttribute("icon",r),y.appendChild(v);const x=document.createElement("h2");x.textContent=s,y.appendChild(x);const _=document.createElement("p");_.textContent=d,y.appendChild(_);const k=document.createElement("ha-icon");k.setAttribute("class","power-button"),k.setAttribute("icon","mdi:power"),k.setAttribute("style",`display: ${u};`),y.appendChild(k);const w=document.createElement("button");w.setAttribute("class","close-pop-up"),w.setAttribute("onclick","history.replaceState(null, null, location.href.split('#')[0]);"),f.appendChild(w);const $=document.createElement("ha-icon");$.setAttribute("icon","mdi:close"),w.appendChild($),this.content.appendChild(f),this.headerAdded=!0}if(this.headerAdded){this.content.querySelector("#header-container .header-icon").setAttribute("icon",r);this.content.querySelector("#header-container h2").textContent=s;this.content.querySelector("#header-container p").textContent=d;this.content.querySelector("#header-container .power-button").setAttribute("style",`display: ${u};`)}function g(t){location.hash===i?m():o.classList.contains("open-pop-up")&&b()}function m(){o.classList.remove("close-pop-up"),o.classList.add("open-pop-up")}function b(){o.classList.remove("open-pop-up"),o.classList.add("close-pop-up")}if(this.eventAdded||(["click","touchend","popstate"].forEach((t=>{window["checkHashRef_"+i]&&window.removeEventListener(t,window["checkHashRef_"+i]),window["checkHashRef_"+i]=g,window.addEventListener(t,window["checkHashRef_"+i])})),this.content.querySelector(".power-button").addEventListener("click",(()=>{n(a)})),this.eventAdded=!0),this.styleAdded||"true"===this.editor){if("true"===this.editor){const C=this.getRootNode().querySelector("#root").querySelector("style");C&&o.removeChild(C),o.style.backgroundColor="var(--ha-card-background,var(--card-background-color))",o.style.padding="16px",o.style.borderRadius="42px",o.style.gridGap="12px",o.style.gap="12px";const E=document.createElement("style"),A="\n #header-container {\n display: inline-flex;\n width: 100%;\n margin: 0;\n padding: 0;\n }\n #header-container > div {\n display: inline-flex;\n align-items: center;\n position: relative;\n padding: 6px;\n z-index: 2;\n flex-grow: 1;\n background-color: var(--background-color,var(--secondary-background-color));\n border-radius: 25px;\n margin-right: 14px;\n }\n .header-icon {\n display: inline-flex;\n width: 22px;\n height: 22px;\n padding: 8px;\n background-color: var(--card-background-color,var(--ha-card-background));\n border-radius: 100%;\n margin: 0 10px 0 0;\n }\n #header-container h2 {\n display: inline-flex;\n margin: 0 18px 0 0;\n line-height: 0px;\n z-index: 100;\n font-size: 20px;\n }\n #header-container p {\n display: inline-flex;\n line-height: 0px;\n font-size: 16px;\n }\n .power-button {\n cursor: pointer; \n flex-grow: inherit; \n width: 24px;\n height: 24px;\n border-radius: 12px;\n margin: 0 10px;\n background: none;\n justify-content: flex-end;\n background-color: var(--background-color,var(--secondary-background-color));\n }\n .close-pop-up {\n height: 50px;\n width: 50px;\n border: none;\n border-radius: 50%;\n z-index: 2;\n background-color: var(--background-color,var(--secondary-background-color));\n color: var(--primary-text-color);\n }\n ";E.innerHTML=A,this.content.appendChild(E),this.styleAdded=!1}}else{const S=document.createElement("style"),L=document.createElement("style"),z=`\n ha-card {\n margin-top: 0 !important;\n background: none !important;\n border: none !important;\n }\n .card-content {\n width: 100% !important;\n padding: 0 !important;\n }\n #root {\n position: fixed !important;\n margin: 0 -7px;\n width: calc(100% - 38px);\n background-color: var(--ha-card-background,var(--card-background-color));\n border-radius: 42px;\n top: calc(100% + ${l} - 2px); /*136px*/\n display: grid !important;\n grid-gap: 12px !important;\n gap: 12px !important;\n grid-auto-rows: min-content;\n padding: 18px 18px 200px 18px !important;\n height: calc(100% - 220px) !important;\n -ms-overflow-style: none; /* for Internet Explorer, Edge */\n scrollbar-width: none; /* for Firefox */\n overflow-y: auto; \n overflow-x: hidden; \n }\n #root > bubble-card:first-child::after {\n content: '';\n display: block;\n position: sticky;\n top: 0;\n left: -50px;\n margin: -70px 0 -35px 0;\n width: 200%;\n height: 100px;\n background: linear-gradient(0deg, rgba(79, 69, 87, 0) 0%, var(--ha-card-background,var(--card-background-color)) 80%);\n z-index: 0;\n }\n #root::-webkit-scrollbar {\n display: none; /* for Chrome, Safari, and Opera */\n }\n #root > bubble-card:first-child {\n position: sticky;\n top: 0;\n z-index: 5;\n background: none !important;\n }\n #root.open-pop-up {\n transform: translateY(-100%);\n transition: transform .4s !important;\n }\n #root.close-pop-up { \n transform: translateY(0%);\n transition: transform .4s !important;\n /* animation: hide 1s forwards; */\n }\n @media only screen and (min-width: 768px) {\n #root {\n top: calc(100% + ${l} + 54px);\n width: calc(${h} - 36px) !important;\n left: calc(50% - ${p[1]/2}${p[2]});\n margin: 0 !important;\n }\n } \n @media only screen and (min-width: 870px) {\n #root {\n top: calc(100% + ${l} + 54px);\n width: calc(${h} - 92px) !important; \n left: calc(50% - ${p[1]/2}${p[2]} + 56px);\n margin: 0 !important;\n }\n } \n `,V="\n #header-container {\n display: inline-flex;\n width: 100%;\n margin: 0;\n padding: 0;\n }\n #header-container > div {\n display: inline-flex;\n align-items: center;\n position: relative;\n padding: 6px;\n z-index: 2;\n flex-grow: 1;\n background-color: var(--background-color,var(--secondary-background-color));\n border-radius: 25px;\n margin-right: 14px;\n }\n .header-icon {\n display: inline-flex;\n width: 22px;\n height: 22px;\n padding: 8px;\n background-color: var(--card-background-color,var(--ha-card-background));\n border-radius: 100%;\n margin: 0 10px 0 0;\n }\n #header-container h2 {\n display: inline-flex;\n margin: 0 18px 0 0;\n line-height: 0px;\n z-index: 100;\n font-size: 20px;\n }\n #header-container p {\n display: inline-flex;\n line-height: 0px;\n font-size: 16px;\n }\n .power-button {\n cursor: pointer; \n flex-grow: inherit; \n width: 24px;\n height: 24px;\n border-radius: 12px;\n margin: 0 10px;\n background: none;\n justify-content: flex-end;\n background-color: var(--background-color,var(--secondary-background-color));\n }\n .close-pop-up {\n height: 50px;\n width: 50px;\n border: none;\n border-radius: 50%;\n z-index: 2;\n background: var(--background-color,var(--secondary-background-color));\n color: var(--primary-text-color);\n }\n ";S.innerHTML=z,L.innerHTML=V,o.appendChild(S),this.content.appendChild(L),this.styleAdded=!0}}}else"true"!==this.editor&&(this.card.style.marginTop="2000px");if("horizontal-buttons-stack"===this.config.card_type){const I=(t,e,n)=>{const i=document.createElement("button");return i.setAttribute("onclick",`window.location.href='${e}';`),i.setAttribute("class","button"),i.innerHTML=`\n <ha-icon icon="${n}" class="icon"></ha-icon><p>${t}</p>\n `,i},T=(e,n)=>{if(t.states[n].attributes.rgb_color){const i=t.states[n].attributes.rgb_color,o=`rgba(${i[0]}, ${i[1]}, ${i[2]}, 0.5)`;e.style.backgroundColor=o,e.style.border="1px solid rgba(0,0,0,0)"}else t.states[n].attributes.rgb_color||"on"!=t.states[n].state?(e.style.backgroundColor="rgba(0,0,0,0)",e.style.border="1px solid var(--primary-text-color)"):(e.style.backgroundColor="rgba(255,255,255,0.5)",e.style.border="1px solid rgba(0,0,0,0)")};if(!this.buttonsAdded){const q=document.createElement("div");q.setAttribute("class","horizontal-buttons-stack-container"),this.content.appendChild(q)}if((()=>{let e=[],n=1;for(;this.config[n+"_name"];){const t=n+"_",i=this.config[t+"name"],o=this.config[t+"pir_sensor"],a=this.config[t+"icon"],r=this.config[t+"link"],s=this.config[t+"entity"];e.push({button:i,pirSensor:o,icon:a,link:r,lightEntity:s}),n++}if(this.config.auto_order&&e.sort(((e,n)=>{if("on"===t.states[e.pirSensor].state&&"on"===t.states[n.pirSensor].state){return t.states[e.pirSensor].last_updated<t.states[n.pirSensor].last_updated?1:-1}if("on"===t.states[e.pirSensor].state)return-1;if("on"===t.states[n.pirSensor].state)return 1;return t.states[e.pirSensor].last_updated<t.states[n.pirSensor].last_updated?1:-1})),!this.buttonsAdded){const t=this.content.querySelector(".horizontal-buttons-stack-container"),n={};e.forEach((e=>{const i=I(e.button,e.link,e.icon);n[e.link]=i,t.appendChild(i)})),this.buttonsAdded=!0,this.buttons=n}let i=0;e.forEach(((t,e)=>{let n=this.buttons[t.link];if(n){let e=localStorage.getItem(`buttonWidth-${t.link}`),o=localStorage.getItem(`buttonContent-${t.link}`);e&&"0"!==e&&o===n.innerHTML&&"true"!==this.editor||(e=n.offsetWidth,localStorage.setItem(`buttonWidth-${t.link}`,e),localStorage.setItem(`buttonContent-${t.link}`,n.innerHTML)),n.style.transform=`translateX(${i}px)`,i+=parseInt(e)+12}t.lightEntity&&T(n,t.lightEntity)}))})(),!this.styleAdded){const H=document.createElement("style"),D="\n .horizontal-buttons-stack {\n width: 100%;\n margin-top: 0 !important;\n background: none !important;\n position: fixed;\n height: 51px;\n bottom: 16px;\n /* transform: translateY(200px); */\n /* animation: from-bottom 1.3s forwards; */\n }\n @keyframes from-bottom {\n 0% {transform: translateY(200px);}\n 20% {transform: translateY(200px);}\n 46% {transform: translateY(-8px);}\n 56% {transform: translateY(1px);}\n 62% {transform: translateY(-2px);}\n 70% {transform: translateY(0);}\n 100% {transform: translateY(0);}\n }\n .horizontal-buttons-stack-container {\n width: max-content;\n position: relative;\n height: 51px;\n }\n .button {\n display: flex;\n position: absolute;\n box-sizing: border-box;\n border: 1px solid var(--primary-text-color);\n align-items: center;\n height: 50px;\n white-space: nowrap;\n width: auto;\n border-radius: 25px;\n z-index: 2;\n padding: 16px;\n transition: background-color 1s, border 1s, transform 1s;\n color: var(--primary-text-color);\n }\n .icon {\n height: 24px;\n margin-right: 8px;\n }\n .card-content {\n width: 100%;\n box-sizing: border-box;\n margin: 0 -36px !important;\n padding: 0 36px !important;\n overflow: scroll !important;\n -ms-overflow-style: none;\n scrollbar-width: none;\n mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%);\n -webkit-mask-image: linear-gradient(90deg, transparent 2%, rgba(0, 0, 0, 1) 6%, rgba(0, 0, 0, 1) 96%, transparent 100%);\n }\n .horizontal-buttons-stack::before {\n content: '';\n position: absolute;\n top: -32px;\n left: -100%;\n display: block;\n background: linear-gradient(0deg, var(--background-color, var(--primary-background-color)) 50%, rgba(79, 69, 87, 0));\n width: 200%;\n height: 100px;\n }\n .card-content::-webkit-scrollbar {\n display: none;\n }\n @media only screen and (min-width: 768px) {\n .card-content {\n position: fixed;\n width: 538px !important;\n left: calc(50% - 246px);\n padding: 0 26px !important;\n }\n }\n @media only screen and (min-width: 870px) {\n .card-content {\n position: fixed;\n width: 538px !important;\n left: calc(50% - 218px);\n padding: 0 26px !important;\n }\n }\n ";H.innerHTML=D,this.card.classList.add("horizontal-buttons-stack"),this.content.querySelector(".horizontal-buttons-stack-container").appendChild(H),this.styleAdded=!0}if("true"===this.editor){if(!this.editorStyleAdded){const M=document.createElement("style"),B="\n .horizontal-buttons-stack {\n width: 100%;\n margin-top: 0 !important;\n background: none !important;\n position: relative;\n height: auto;\n bottom: 0px;\n overflow: hidden;\n }\n .horizontal-buttons-stack::before {\n content: '';\n position: absolute;\n top: 0;\n left: 0;\n display: block;\n background: none;\n width: 100%;\n height: 0;\n }\n .card-content {\n width: 100% !important;\n }\n ";M.innerHTML=B,this.card.appendChild(M),this.editorStyleAdded=!0}}else if(this.card.querySelector("ha-card > style")){const O=this.card.querySelector("ha-card > style");this.card.removeChild(O)}}if("button"===this.config.card_type){if(!this.buttonAdded){const st=document.createElement("div");st.setAttribute("class","button-container"),this.content.appendChild(st)}const Y=this.config.entity,j=this.config.icon?this.config.icon:t.states[Y].attributes.icon||"",R=this.config.name?this.config.name:t.states[Y].attributes.friendly_name||"",X=this.config.button_type||"switch",W=Y?t.states[Y].state:"";let F=Y?t.states[Y].attributes.brightness||0:"",N=Y?t.states[Y].attributes.volume_level||0:"";const P=document.createElement("div");P.setAttribute("class","icon-container");const U=document.createElement("div");U.setAttribute("class","nameContainer");const G=document.createElement("div");G.setAttribute("class","switch-button");const J=document.createElement("div");J.setAttribute("class","range-slider");const Z=document.createElement("div");Z.setAttribute("class","range-fill"),Y&&Y.startsWith("light.")&&"slider"===X?Z.style.transform=`translateX(${F/255*100}%)`:Y&&Y.startsWith("media_player.")&&"slider"===X&&(Z.style.transform=`translateX(${100*N}%)`),this.buttonAdded||(this.buttonContainer=this.content.querySelector(".button-container"),"slider"!==X||this.buttonAdded?"switch"===X&&(this.buttonContainer.appendChild(G),G.appendChild(P),G.appendChild(U),this.switchButton=this.content.querySelector(".switch-button")):(this.buttonContainer.appendChild(J),J.appendChild(P),J.appendChild(U),J.appendChild(Z),this.rangeFill=this.content.querySelector(".range-fill")),P.innerHTML=`<ha-icon icon="${j}" class="icon"></ha-icon>`,U.innerHTML=`<p>${R}</p>`,this.buttonAdded=!0);let K=!1,Q=F,tt=N;function et(t){let e=t.querySelector(".feedback-element");e||(e=document.createElement("div"),e.setAttribute("class","feedback-element"),t.appendChild(e)),e.style.animation="tap-feedback .5s",setTimeout((()=>{e.style.animation="none",t.removeChild(e)}),500)}function nt(t){t.target===P.querySelector("ha-icon")?P.addEventListener("mouseup",(t=>{fireEvent(this,"hass-more-info",{entityId:Y})})):(K=!0,rt(t.pageX||t.touches[0].pageX),document.addEventListener("mouseup",it),document.addEventListener("touchend",it),document.addEventListener("mousemove",ot),document.addEventListener("touchmove",ot))}function it(){K=!1,document.removeEventListener("mouseup",it),document.removeEventListener("touchend",it),document.removeEventListener("mousemove",ot),document.removeEventListener("touchmove",ot),F!==Q&&Y.startsWith("light.")?(F=Q,t.callService("light","turn_on",{entity_id:Y,brightness:F})):N!==tt&&Y.startsWith("media_player.")&&(N=tt,t.callService("media_player","volume_set",{entity_id:Y,volume_level:N}))}function ot(t){K&&rt(t.pageX||t.touches[0].pageX)}function at(t,e){if(e.buttonContainer.style.opacity="unavailable"!==t?"1":"0.5","switch"===X){const n="on"===t?"var(--accent-color)":"rgba(0,0,0,0)";e.switchButton.style.backgroundColor=n}}function rt(t){const e=J.getBoundingClientRect(),n=Math.min(Math.max(t-e.left,0),e.width)/e.width;Y.startsWith("light.")?Q=Math.round(255*n):Y.startsWith("media_player.")&&(tt=n),Z.style.transition="none",Z.style.transform=`translateX(${100*n}%)`}if(this.eventAdded||"switch"!==X?this.eventAdded||"slider"!==X||(J.addEventListener("mousedown",nt),J.addEventListener("touchstart",nt),this.eventAdded=!0):(G.addEventListener("click",(()=>et(this.switchButton))),G.addEventListener("click",(function(t){t.target.closest("ha-icon")?fireEvent(this,"hass-more-info",{entityId:Y}):n(Y)})),this.eventAdded=!0),K||"slider"!==X||(this.rangeFill.style.transition="all .2s",Y.startsWith("light.")?this.rangeFill.style.transform=`translateX(${F/255*100}%)`:Y.startsWith("media_player.")&&(this.rangeFill.style.transform=`translateX(${100*N}%)`)),at(W,this),"slider"===X){const ct=t.states[Y].attributes.rgb_color,dt=ct?`rgba(${ct[0]}, ${ct[1]}, ${ct[2]}, 0.5)`:"rgba(255, 255, 255, 0.5)";Z.style.backgroundColor=dt,this.rangeFill.style.backgroundColor=dt}if(!this.styleAdded){const lt=document.createElement("style"),ht="\n ha-card {\n margin-top: 0 !important;\n background: none !important;\n }\n \n .button-container {\n position: relative;\n width: 100%;\n height: 50px;\n z-index: 0;\n background-color: var(--background-color-2,var(--secondary-background-color));\n border-radius: 25px;\n mask-image: radial-gradient(white, black);\n -webkit-mask-image: radial-gradient(white, black);\n -webkit-backface-visibility: hidden;\n -moz-backface-visibility: hidden;\n -webkit-transform: translateZ(0);\n overflow: hidden;\n }\n \n .switch-button,\n .range-slider {\n position: absolute;\n height: 100%;\n width: 100%;\n transition: background-color 1.5s;\n }\n \n .range-fill {\n position: absolute;\n top: 0;\n bottom: 0;\n left: 0;\n }\n \n .switch-button {\n cursor: pointer !important;\n }\n \n .range-slider {\n cursor: ew-resize;\n }\n \n .range-fill {\n z-index: 1;\n width: 100%;\n left: -100%;\n }\n \n .icon-container {\n position: absolute;\n z-index: 2;\n width: 38px;\n height: 38px;\n margin: 6px;\n border-radius: 50%;\n background-color: var(--card-background-color,var(--ha-card-background));\n }\n \n ha-icon {\n display: flex;\n position: absolute;\n margin: inherit;\n padding: 2px;\n width: 22px; \n height: 22px;\n cursor: pointer !important;\n }\n \n .nameContainer {\n position: relative;\n margin-left: 58px;\n z-index: 2;\n font-weight: 600;\n }\n \n .feedback-element {\n position: absolute;\n top: 0;\n left: 0;\n opacity: 0;\n width: 100%;\n height: 100%;\n background-color: rgb(0,0,0);\n }\n \n @keyframes tap-feedback {\n 0% {transform: translateX(-100%); opacity: 0;}\n 64% {transform: translateX(0); opacity: 0.1;}\n 100% {transform: translateX(100%); opacity: 0;}\n }\n ";lt.innerHTML=ht,this.content.appendChild(lt),this.styleAdded=!0}"true"===this.editor&&(this.editorStyleAdded||(this.content.style.border="2px solid white !important",this.editorStyleAdded=!0))}if("separator"===this.config.card_type){const pt=this.config.icon?this.config.icon:"",ut=this.config.name?this.config.name:"";if(!this.separatorAdded){const gt=document.createElement("div");gt.setAttribute("class","separator-container"),gt.style.display="flex",gt.innerHTML=`\n <div>\n <ha-icon icon="${pt}" style="display: inline-block; height: 24px; width: 24px; margin: 0 20px 0 8px; transform: translateY(-2px);"></ha-icon>\n <h4 style="display: inline-block; margin: 3px 20px 0 0; font-size: 17px;">${ut}</h4>\n </div>\n <div style="display: flex; border-radius: 6px; opacity: 0.3; margin-left: 10px; flex-grow: 1; height: 6px; align-self: center; background-color: var(--background-color,var(--secondary-background-color));"></div>\n `,this.content.appendChild(gt),this.separatorAdded=!0}}if("cover"===this.config.card_type){const mt=this.config.entity,bt=this.config.icon_open?this.config.icon_open:"mdi:window-shutter-open",ft=this.config.icon_close?this.config.icon_close:"mdi:window-shutter",yt="open"===t.states[this.config.entity].state?bt:ft,vt=this.config.name?this.config.name:t.states[entityId].attributes.friendly_name||"",xt=this.config.open_service?this.config.open_service:"cover.open_cover",_t=this.config.close_service?this.config.close_service:"cover.close_cover",kt=this.config.stop_service?this.config.stop_service:"cover.stop_cover";if(!this.coverAdded){const wt=document.createElement("div");wt.setAttribute("class","cover-container"),wt.innerHTML=`\n <div class="header-container">\n <div class="icon-container">\n </div>\n <p class="name">${vt}</p>\n </div>\n <div class="buttons-container">\n <button class="button open">\n <ha-icon icon="mdi:arrow-up"></ha-icon>\n </button>\n <button class="button stop">\n <ha-icon icon="mdi:stop"></ha-icon>\n </button>\n <button class="button close">\n <ha-icon icon="mdi:arrow-down"></ha-icon>\n </button>\n </div>`,this.content.appendChild(wt);const $t=wt.querySelector(".open"),Ct=wt.querySelector(".stop"),Et=wt.querySelector(".close");$t.addEventListener("click",(()=>{t.callService(xt.split(".")[0],xt.split(".")[1],{entity_id:mt})})),Ct.addEventListener("click",(()=>{t.callService(kt.split(".")[0],kt.split(".")[1],{entity_id:mt})})),Et.addEventListener("click",(()=>{t.callService(_t.split(".")[0],_t.split(".")[1],{entity_id:mt})})),this.content.querySelector(".icon-container").addEventListener("mouseup",(t=>{fireEvent(this,"hass-more-info",{entityId:mt})})),this.coverAdded=!0}if(this.content.querySelector(".icon-container").innerHTML=`<ha-icon icon="${yt}" class="icon"></ha-icon>`,!this.styleAdded){const At=document.createElement("style"),St="\n ha-card {\n margin-top: 0 !important;\n background: none !important;\n }\n \n .header-container {\n display: flex;\n align-items: center;\n margin-bottom: 10px;\n }\n \n .name {\n display: inline-block; \n margin-left: 10px;\n font-weight: 600;\n }\n \n .cover-container {\n display: grid;\n }\n \n .icon-container {\n display: flex;\n margin: 0 !important;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n z-index: 2;\n width: 48px;\n height: 48px;\n margin: 6px;\n border-radius: 50%;\n background-color: var(--card-background-color,var(--ha-card-background));\n border: 6px solid var(--background-color-2,var(--secondary-background-color));\n box-sizing: border-box;\n }\n \n .buttons-container {\n display: grid;\n align-self: center;\n grid-auto-flow: column;\n grid-gap: 18px; \n }\n \n ha-icon {\n display: flex; \n height: 24px; \n width: 24px; \n color: var(--primary-text-color);\n }\n \n .button {\n display: flex;\n background: var(--background-color-2,var(--secondary-background-color));\n height: 42px;\n border-radius: 32px;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n border: none;\n }\n ";At.innerHTML=St,this.content.appendChild(At),this.styleAdded=!0}}if("empty-column"===this.config.card_type&&!this.emptyCollumnAdded){const Lt=document.createElement("div");Lt.setAttribute("class","empty-column"),Lt.innerHTML='\n <div style="display: flex; width: 100%;">\n </div>\n ',this.content.appendChild(Lt),this.emptyColumnAdded=!0}}setConfig(t){if("pop-up"===t.card_type){if(!t.hash)throw new Error("You need to define an hash");if(!t.icon)throw new Error("You need to define an icon");if(!t.name)throw new Error("You need to define a name")}this.config=t}getCardSize(){return 1}static getConfigElement(){return document.createElement("bubble-card-editor")}}console.info("%c Bubble Card %c 0.0.1 ","background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)"),customElements.define("bubble-card",BubbleCard);const fireEvent=(t,e,n,i)=>{i=i||{},n=null==n?{}:n;const o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,t.dispatchEvent(o),o};customElements.get("ha-switch");const LitElement=Object.getPrototypeOf(customElements.get("ha-panel-lovelace")),html=LitElement.prototype.html,css=LitElement.prototype.css;class BubbleCardEditor extends LitElement{setConfig(t){this._config={...t}}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config.card_type||""}get _button_type(){return this._config.button_type||"switch"}get _entity(){return this._config.entity||""}get _name(){return this._config.name||""}get _icon(){return this._config.icon||""}get _state(){return this._config.state||""}get _state_unit(){return this._config.state_unit||""}get _hash(){return this._config.hash||"#pop-up-name"}get _margin_top(){return this._config.margin_top||"0px"}get _width_desktop(){return this._config.width_desktop||"600px"}get _open_service(){return this._config.open_service||"cover.open_cover"}get _close_service(){return this._config.open_service||"cover.close_cover"}get _stop_service(){return this._config.open_service||"cover.stop_cover"}render(){if(!this.hass)return html``;const t=new CustomEvent("editor-event",{bubbles:!0});document.dispatchEvent(t);const e=["button","cover","empty-column","horizontal-buttons-stack","pop-up","separator"],n=["switch","slider"],i=Object.keys(this.hass.states),o=(Object.keys(this.hass.states).filter((t=>"light"===t.substr(0,t.indexOf(".")))),Object.keys(this.hass.states).filter((t=>"sensor"===t.substr(0,t.indexOf(".")))),Object.keys(this.hass.states).filter((t=>"cover"===t.substr(0,t.indexOf(".")))));if("pop-up"===this._config.card_type)return html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">This card allows you to convert any vertical-stack into a pop-up. Each pop-up can be opened by targeting its link (e.g. '#pop-up-name'), with navigation_path or with the horizontal buttons stack that is included.<br><br>It must be placed within a vertical-stack card at the top most position to function properly.</ha-alert> <ha-textfield label="Hash (e.g. #kitchen)" .value="${this._hash}" .configValue="${"hash"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Name" .value="${this._name}" .configValue="${"name"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> ${this.makeDropdown("Icon","icon")} ${this.makeDropdown("Entity to toggle (e.g. room light group)","entity",i)} ${this.makeDropdown("Entity state to display (e.g. room temperature)","state",i)} <ha-textfield label="Unit of measurement (e.g. °F, °C, %)" .value="${this._state_unit}" .configValue="${"state_unit"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Width on desktop (100% by default on mobile)" .value="${this._width_desktop}" .configValue="${"width_desktop"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Margin top (e.g. 50% for an half sized pop-up)" .value="${this._margin_top}" .configValue="${"margin_top"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> ${this.makeVersion()} </div> `;if("button"===this._config.card_type)return html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">This card can be a slider or a button, allowing you to toggle your entities, control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.</ha-alert> ${this.makeDropdown("Button type","button_type",n)} <ha-textfield label="Name" .value="${this._name}" .configValue="${"name"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> ${this.makeDropdown("Icon","icon")} ${this.makeDropdown("slider"!==this._button_type?"Entity (toggle)":"Entity (light or media_player)","entity",i)} ${this.makeVersion()} </div> `;if("separator"===this._config.card_type)return html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...</ha-alert> <ha-textfield label="Name" .value="${this._name}" .configValue="${"name"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> ${this.makeDropdown("Icon","icon")} ${this.makeVersion()} </div> `;if("horizontal-buttons-stack"===this._config.card_type){if(!this.buttonAdded&&this.shadowRoot.querySelector("#add-button")){const t=this.shadowRoot.querySelector("#add-button");for(this.buttonIndex=0;this._config[this.buttonIndex+1+"_name"];)this.buttonIndex++;t.addEventListener("click",(()=>{this.buttonIndex++,fireEvent(this,"config-changed",{config:this._config})})),this.buttonAdded=!0}return fireEvent(this,"config-changed",{config:this._config}),html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">This card is the companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.<br><br>Please note that this card may take some time to load in edit mode.</ha-alert> <ha-formfield .label="Auto order"> <ha-switch aria-label="Toggle auto order" .checked=${this._config.auto_order} .value=${this._config.auto_order}" .configValue="${"auto_order"}" @change=${this._valueChanged} ></ha-switch> <div class="mdc-form-field"> <label class="mdc-label">Auto order (Presence/occupancy sensors needed)</label> </div> </ha-formfield> <div id="buttons-container"> ${this.makeButton()} </div> <button id="add-button">Add Button</button> ${this.makeVersion()} </div> `}return"cover"===this._config.card_type?html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">This card allows you to...</ha-alert> ${this.makeDropdown("Entity","entity",o)} <ha-textfield label="Name" .value="${this._name||""}" .configValue="${"name"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Open service (cover.open_cover by default)" .value="${this._open_service}" .configValue="${"open_service"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Stop service (cover.stop_cover by default)" .value="${this._stop_service}" .configValue="${"stop_service"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-textfield label="Close service (cover.close_cover by default)" .value="${this._close_service}" .configValue="${"close_service"}" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> ${this.makeDropdown("Open icon","icon_open")} ${this.makeDropdown("Closed icon","icon_closed")} ${this.makeVersion()} </div> `:"empty-column"===this._config.card_type?html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">Just an empty card to fill any empty column.</ha-alert> ${this.makeVersion()} </div> `:this._config.card_type?void 0:html` <div class="card-config"> ${this.makeDropdown("Card type","card_type",e)} <ha-alert alert-type="info">You need to add a card type first.</ha-alert> ${this.makeVersion()} </div> `}makeDropdown(t,e,n){const i=t=>({icon:t,label:t,value:t});this.hass;return"Icon"===t||"Open icon"===t||"Closed icon"===t?html` <div> <ha-icon-picker label="${t}" .value="${this["_"+e]}" .configValue="${e}" item-label-path="label" item-value-path="value" @value-changed="${this._valueChanged}" > </ha-icon-picker> </div> `:html` <div> <ha-combo-box label="${t}" .value="${this["_"+e]}" .configValue="${e}" .items="${n.map(i)}" item-label-path="label" item-value-path="value" @value-changed="${this._valueChanged}" > </ha-combo-box> </div> `}makeButton(){let t=[];const e=Object.keys(this.hass.states),n=Object.keys(this.hass.states).filter((t=>"binary_sensor"===t.substr(0,t.indexOf(".")))),i=t=>({icon:t,label:t,value:t});for(let o=1;o<=this.buttonIndex;o++)t.push(html` <div class="${o}_button"> <div class="button-header"> <ha-icon class="remove-button" icon="mdi:close" @click=${()=>this.removeButton(o)}></ha-icon> <span class="button-number">Button ${o}</span> </div> <ha-textfield label="Name" .value="${this._config[o+"_name"]}" .configValue="${o}_name" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-icon-picker label="Icon" .value="${this._config[o+"_icon"]}" .configValue="${o}_icon" item-label-path="label" item-value-path="value" @value-changed="${this._valueChanged}" ></ha-icon-picker> <ha-textfield label="Link / Hash to pop-up (e.g. #kitchen)" .value="${this._config[o+"_link"]||""}" .configValue="${o}_link" @input="${this._valueChanged}" style="width: 100%;" ></ha-textfield> <ha-combo-box label="Light / Light group (For background color)" .value="${this._config[o+"_entity"]}" .configValue="${o}_entity" .items="${e.map(i)}" item-label-path="label" item-value-path="value" @value-changed="${this._valueChanged}" > </ha-combo-box> <ha-combo-box label="Presence / Occupancy sensor (For button auto order)" .value="${this._config[o+"_pir_sensor"]}" .configValue="${o}_pir_sensor" .disabled=${!this._config.auto_order} .items="${n.map(i)}" item-label-path="label" item-value-path="value" @value-changed="${this._valueChanged}" > </ha-combo-box> </div> `);return fireEvent(this,"config-changed",{config:this._config}),t}makeVersion(){return html` <h4>Bubble Card <span style="font-size: 10px;">0.0.1</span></h4> `}removeButton(t){delete this._config[t+"_name"],delete this._config[t+"_icon"],delete this._config[t+"_link"],delete this._config[t+"_entity"],delete this._config[t+"_pir_sensor"];for(let e=t;e<this.buttonIndex;e++)this._config[e+"_name"]=this._config[e+1+"_name"],this._config[e+"_icon"]=this._config[e+1+"_icon"],this._config[e+"_link"]=this._config[e+1+"_link"],this._config[e+"_entity"]=this._config[e+1+"_entity"],this._config[e+"_pir_sensor"]=this._config[e+1+"_pir_sensor"];delete this._config[this.buttonIndex+"_name"],delete this._config[this.buttonIndex+"_icon"],delete this._config[this.buttonIndex+"_link"],delete this._config[this.buttonIndex+"_entity"],delete this._config[this.buttonIndex+"_pir_sensor"],this.buttonIndex--,fireEvent(this,"config-changed",{config:this._config})}_valueChanged(t){if(console.log("Value changed"),!this._config||!this.hass)return;const e=t.target;e.configValue&&(console.log("Before update:",this._config),this._config={...this._config,[e.configValue]:void 0!==e.checked||t.detail.value?e.checked||t.detail.value:e.value||t.detail.value},console.log("After update:",this._config)),fireEvent(this,"config-changed",{config:this._config})}static get styles(){return css` div { display: grid; grid-gap: 12px; } #add-button { height: 32px; border-radius: 16px; border: none; background-color: var(--accent-color); } .button-header { height: auto; width: 100%; display: inline-flex; align-items: center; } .button-number { display: inline-flex; width: auto; } .remove-button { display: inline-flex; border-radius: 50%; width: 24px; height: 24px; text-align: center; line-height: 24px; vertical-align: middle; cursor: pointer; } `}}customElements.define("bubble-card-editor",BubbleCardEditor),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A cards collection for Home Assistant with a nice pop-up touch."});
