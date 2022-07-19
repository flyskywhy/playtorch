"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3745],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),m=function(e){return function(n){var t=s(n.components);return a.createElement(e,l({},n,{components:t}))}},s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(t),p=i,v=m["".concat(o,".").concat(p)]||m[p]||u[p]||l;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=v;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(38011);const l="tableOfContentsInline_prmo";function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return a.createElement("div",{className:l},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},38011:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(83117),i=t(67294),l=t(86668),o=t(39665),r=t(96841);function d(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const c=i.memo(d);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:s,maxHeadingLevel:p,...u}=e;const v=(0,l.L)(),h=null!=s?s:v.tableOfContents.minHeadingLevel,x=null!=p?p:v.tableOfContents.maxHeadingLevel,N=(0,o.b)({toc:n,minHeadingLevel:h,maxHeadingLevel:x}),f=(0,i.useMemo)((()=>{if(d&&m)return{linkClassName:d,linkActiveClassName:m,minHeadingLevel:h,maxHeadingLevel:x}}),[d,m,h,x]);return(0,r.S)(f),i.createElement(c,(0,a.Z)({toc:N,className:t,linkClassName:d},u))}},96841:(e,n,t)=>{t.d(n,{S:()=>d});var a=t(67294),i=t(86668);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){var t;let{anchorTopOffset:a}=n;const i=e.find((e=>l(e).top>=a));if(i){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(o=e[e.indexOf(i)-1])?o:null}return null!=(t=e[e.length-1])?t:null}function r(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=r();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:r}=e;function d(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),d=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=o(d,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===m)}))}return document.addEventListener("scroll",d),document.addEventListener("resize",d),d(),()=>{document.removeEventListener("scroll",d),document.removeEventListener("resize",d)}}),[e,t])}},39665:(e,n,t)=>{t.d(n,{a:()=>l,b:()=>r});var a=t(67294);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){return(0,a.useMemo)((()=>i(e)),[e])}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}},90287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=t(83117),i=(t(67294),t(3905)),l=t(3901);const o={id:"cli"},r="CLI",d={unversionedId:"api/cli",id:"version-0.2.0/api/cli",title:"CLI",description:"The PyTorch Live CLI (i.e., torchlive-cli) provides a set of commands to help you install build dependencies, initialize new PyTorch Live projects, build and deploy them to emulator or physical devices.",source:"@site/versioned_docs/version-0.2.0/api/cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/docs/api/cli",draft:!1,editUrl:"https://github.com/facebookresearch/playtorch/edit/main/website/versioned_docs/version-0.2.0/api/cli.md",tags:[],version:"0.2.0",frontMatter:{id:"cli"},sidebar:"api",previous:{title:"Transforms",permalink:"/docs/api/core/interfaces/torchlive_torchvision.transforms"},next:{title:"Model Specification (Deprecated)",permalink:"/docs/api/model-spec"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Index",id:"index",level:2},{value:"PyTorch Live CLI commands",id:"torchlive-cli-commands",level:2},{value:"Options",id:"options",level:4},{value:"<code>npx torchlive-cli setup-dev</code>",id:"torchlive-cli-setup-dev",level:3},{value:"<code>npx-torchlive-cli init [options] [name]</code>",id:"torchlive-cli-init",level:3},{value:"Options",id:"torchlive-cli-init-options",level:4},{value:"<code>npx torchlive-cli run-android [options]</code>",id:"torchlive-cli-run-android",level:3},{value:"Options",id:"torchlive-cli-run-android-options",level:4},{value:"<code>npx torchlive-cli run-ios</code>",id:"torchlive-cli-run-ios",level:3},{value:"<code>npx torchlive-cli emulator [options]</code>",id:"torchlive-cli-emulator",level:3},{value:"<code>npx torchlive-cli clean</code>",id:"torchlive-cli-clean",level:3},{value:"<code>npx torchlive-cli emulator</code>",id:"torchlive-cli-emulator",level:3},{value:"<code>npx torchlive-cli doctor</code>",id:"torchlive-cli-doctor",level:3},{value:"<code>npx torchlive-cli log</code>",id:"torchlive-cli-log",level:3},{value:"<code>npx torchlive-cli help [command]</code>",id:"torchlive-cli-help",level:3}],s={toc:m};function p(e){let{components:n,...t}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"cli"},"CLI"),(0,i.mdx)("div",{className:"tutorial-page"},(0,i.mdx)("p",null,"The PyTorch Live CLI (i.e., ",(0,i.mdx)("inlineCode",{parentName:"p"},"torchlive-cli"),") provides a set of commands to help you install build dependencies, initialize new PyTorch Live projects, build and deploy them to emulator or physical devices."),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Node.js"),": If you don't have it already, you can download Node.js LTS ",(0,i.mdx)("a",{parentName:"li",href:"https://nodejs.org/"},"from its website")," or install via ",(0,i.mdx)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")," (ie, ",(0,i.mdx)("inlineCode",{parentName:"li"},"brew install node"),").")),(0,i.mdx)("h2",{id:"index"},"Index"),(0,i.mdx)(l.Z,{toc:m,mdxType:"TOCInline"}),(0,i.mdx)("h2",{id:"torchlive-cli-commands"},"PyTorch Live CLI commands"),(0,i.mdx)("p",null,"Below is a list of PyTorch Live CLI commands and their usages:"),(0,i.mdx)("h4",{id:"options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--version")),(0,i.mdx)("td",{parentName:"tr",align:null},"Prints the CLI version")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--help")),(0,i.mdx)("td",{parentName:"tr",align:null},"Shows the CLI help")))),(0,i.mdx)("h3",{id:"torchlive-cli-setup-dev"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli setup-dev")),(0,i.mdx)("p",null,"The PyTorch Live CLI provides a setup routine to install all required build dependencies including tooling like Yarn, Watchman, and CocoaPods, SDKs like OpenJDK, Android SDK, Android SDK Manager, Android Virtual Device Manager, and an Android Emulator, and it installs a default emulator device ready to be used with PyTorch Live projects."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli setup-dev\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"The command may require ",(0,i.mdx)("inlineCode",{parentName:"p"},"sudo")," access for installing the different dependencies and can take approximately 20 minutes to complete. This depends on your laptop configuration, internet speed, and what dependencies have been installed previously."))),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"You only need to run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"npx torchlive-cli setup-dev")," command once and it is not necessary to run the command every time before you start a new project. However, it is recommended to re-run this command once in a while to update development dependencies over time."))),(0,i.mdx)("p",null,"If everything goes well, the terminal will looks similar to the following output."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\u279c  npx torchlive-cli setup-dev\n  _                 _     _ _\n | |_ ___  _ __ ___| |__ | (_)_   _____\n | __/ _ \\| '__/ __| '_ \\| | \\ \\ / / _ \\\n | || (_) | | | (__| | | | | |\\ V /  __/\n  \\__\\___/|_|  \\___|_| |_|_|_| \\_/ \\___|\n\ntorchlive version 0.0.2-alpha.19\n\u2714 Homebrew (3.3.3)\n\u2714 OpenJDK (1.8.0)\n\u2714 Watchman (null)\n\u2193 Node (16.13.0) [SKIPPED]\n\u2714 Yarn (1.22.15)\n\u2714 Android SDK\n\u2714 Android SDK Manager\n\u2714 Android Emulator\n\u2714 CocoaPods (1.11.2)\n")),(0,i.mdx)("h3",{id:"torchlive-cli-init"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx-torchlive-cli init [options] [name]")),(0,i.mdx)("p",null,"Initialize a new PyTorch Live project."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli init MyFirstProject\n")),(0,i.mdx)("h4",{id:"torchlive-cli-init-options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--template")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"react-native-template-pytorch-live")),(0,i.mdx)("td",{parentName:"tr",align:null},"Specifies the template used to generate a new project")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--skip-install")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Skips dependencies installation step")))),(0,i.mdx)("h3",{id:"torchlive-cli-run-android"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli run-android [options]")),(0,i.mdx)("p",null,"Runs the PyTorch Live project on an Android emulator. It will run the project on a physical device if it is connected."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli run-android\n")),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"If you want to deploy the app on your own device, you have to put it into developer mode."),(0,i.mdx)("blockquote",{parentName:"div"},(0,i.mdx)("p",{parentName:"blockquote"},"On Android 4.1 and lower, the Developer options screen is available by default. On Android 4.2 and higher, you must enable this screen. To enable developer options follow the instructions from the Android Developers docs: ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"Enable developer options and USB debugging"),".")))),(0,i.mdx)("h4",{id:"torchlive-cli-run-android-options"},"Options"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"--name"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"-n")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'"pytorch_live"')),(0,i.mdx)("td",{parentName:"tr",align:null},"Run PyTorch Live project on a specific Android Virtual Device (AVD)")))),(0,i.mdx)("h3",{id:"torchlive-cli-run-ios"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli run-ios")),(0,i.mdx)("p",null,"Runs the PyTorch Live project on an iOS simulator."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"In order to run a PyTorch Live project on an iOS simulator or a physical iOS device, you need to install Xcode from the Apple App Store on your macOS device. PyTorch Live currently supports Xcode version 12.5 or later."))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli run-ios\n")),(0,i.mdx)("h3",{id:"torchlive-cli-emulator"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli emulator [options]")),(0,i.mdx)("p",null,'Starts the "pytorch_live" Android Virtual Device emulator.'),(0,i.mdx)("h3",{id:"torchlive-cli-clean"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli clean")),(0,i.mdx)("p",null,"Cleans the build files and directories."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli clean\n")),(0,i.mdx)("h3",{id:"torchlive-cli-emulator"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli emulator")),(0,i.mdx)("p",null,"Starts the emulator without building, deploying, and running the PyTorch Live project."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli emulator\n")),(0,i.mdx)("h3",{id:"torchlive-cli-doctor"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli doctor")),(0,i.mdx)("p",null,"Runs health checks to verify if all necessary dependencies are installed."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli doctor\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"npx torchlive-cli setup-dev")," command if any of the health checks fail."))),(0,i.mdx)("h3",{id:"torchlive-cli-log"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli log")),(0,i.mdx)("p",null,"Prints the PyTorch Live CLI logs to the terminal."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli log\n")),(0,i.mdx)("h3",{id:"torchlive-cli-help"},(0,i.mdx)("inlineCode",{parentName:"h3"},"npx torchlive-cli help [command]")),(0,i.mdx)("p",null,"Shows additional help for a command."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli help init\n"))))}p.isMDXComponent=!0}}]);