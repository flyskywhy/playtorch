"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5922],{3905:(e,a,r)=>{r.r(a),r.d(a,{MDXContext:()=>o,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>p});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function m(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?m(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),p=function(e){return function(a){var r=s(a.components);return t.createElement(e,i({},a,{components:r}))}},s=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):d(d({},a),e)),r},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(r),c=n,f=p["".concat(m,".").concat(c)]||p[c]||u[c]||i;return r?t.createElement(f,d(d({ref:a},o),{},{components:r})):t.createElement(f,d({ref:a},o))}));function x(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,m=new Array(i);m[0]=f;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,m[1]=d;for(var o=2;o<i;o++)m[o]=r[o];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98105:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(83117),n=(r(67294),r(3905));const i={id:"cameraview.cameraprops",title:"Interface: CameraProps",sidebar_label:"CameraProps",custom_edit_url:null},m=void 0,d={unversionedId:"api/core/interfaces/cameraview.cameraprops",id:"version-0.1/api/core/interfaces/cameraview.cameraprops",title:"Interface: CameraProps",description:"CameraView.CameraProps",source:"@site/versioned_docs/version-0.1/api/core/interfaces/cameraview.cameraprops.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/cameraview.cameraprops",permalink:"/docs/0.1/api/core/interfaces/cameraview.cameraprops",draft:!1,editUrl:null,tags:[],version:"0.1",frontMatter:{id:"cameraview.cameraprops",title:"Interface: CameraProps",sidebar_label:"CameraProps",custom_edit_url:null},sidebar:"api",previous:{title:"Camera",permalink:"/docs/0.1/api/core/classes/cameraview.camera"},next:{title:"CanvasProps",permalink:"/docs/0.1/api/core/interfaces/canvasview.canvasprops"}},l={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"facing",id:"facing",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"hideCaptureButton",id:"hidecapturebutton",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"targetResolution",id:"targetresolution",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"onCapture",id:"oncapture",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"onFrame",id:"onframe",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:o};function s(e){let{components:a,...r}=e;return(0,n.mdx)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/modules/cameraview"},"CameraView"),".CameraProps"),(0,n.mdx)("p",null,"Properties for the camera."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"<Camera\n  onFrame={(image: Image) => {\n    image.release();\n  }}\n  hideCaptureButton={true}\n/>\n")),(0,n.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("inlineCode",{parentName:"p"},"ViewProps")),(0,n.mdx)("p",{parentName:"li"},"\u21b3 ",(0,n.mdx)("strong",{parentName:"p"},"CameraProps")))),(0,n.mdx)("h2",{id:"properties"},"Properties"),(0,n.mdx)("h3",{id:"facing"},"facing"),(0,n.mdx)("p",null,"\u2022 ",(0,n.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.mdx)("strong",{parentName:"p"},"facing"),": ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/enums/cameraview.camerafacing"},"CameraFacing")),(0,n.mdx)("p",null,"Direction the camera faces relative to the device's screen."),(0,n.mdx)("h4",{id:"defined-in"},"Defined in"),(0,n.mdx)("p",null,"CameraView.tsx:83"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"hidecapturebutton"},"hideCaptureButton"),(0,n.mdx)("p",null,"\u2022 ",(0,n.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.mdx)("strong",{parentName:"p"},"hideCaptureButton"),": ",(0,n.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,n.mdx)("p",null,"Hides the capture button if set to ",(0,n.mdx)("inlineCode",{parentName:"p"},"true"),", otherwise the camera will show\na capture button."),(0,n.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,n.mdx)("p",null,"CameraView.tsx:70"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"targetresolution"},"targetResolution"),(0,n.mdx)("p",null,"\u2022 ",(0,n.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.mdx)("strong",{parentName:"p"},"targetResolution"),": ",(0,n.mdx)("inlineCode",{parentName:"p"},"TargetResolution")),(0,n.mdx)("p",null,"Camera target resolution. It is not guaranteed that the camera runs at the\nset target resolution, and it might pick the closest available resolution."),(0,n.mdx)("p",null,"{@see ",(0,n.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/camera/core/ImageAnalysis.Builder#setTargetResolution(android.util.Size)%7D"},"https://developer.android.com/reference/androidx/camera/core/ImageAnalysis.Builder#setTargetResolution(android.util.Size)}")),(0,n.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,n.mdx)("p",null,"CameraView.tsx:78"),(0,n.mdx)("h2",{id:"methods"},"Methods"),(0,n.mdx)("h3",{id:"oncapture"},"onCapture"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.mdx)("strong",{parentName:"p"},"onCapture"),"(",(0,n.mdx)("inlineCode",{parentName:"p"},"image"),"): ",(0,n.mdx)("inlineCode",{parentName:"p"},"void")),(0,n.mdx)("p",null,"Callback with an ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")," after capture button was pressed."),(0,n.mdx)("h4",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"image")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"An ",(0,n.mdx)("a",{parentName:"td",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")," reference.")))),(0,n.mdx)("h4",{id:"returns"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"void")),(0,n.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,n.mdx)("p",null,"CameraView.tsx:90"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"onframe"},"onFrame"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.mdx)("strong",{parentName:"p"},"onFrame"),"(",(0,n.mdx)("inlineCode",{parentName:"p"},"image"),"): ",(0,n.mdx)("inlineCode",{parentName:"p"},"void")),(0,n.mdx)("p",null,"Callback when the camera delivers an ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image"),"."),(0,n.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,n.mdx)("h5",{parentName:"div"},(0,n.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,n.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.mdx)("div",{parentName:"div",className:"admonition-content"},(0,n.mdx)("p",{parentName:"div"},"Needs to call ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/interfaces/imagemodule.image#release"},"Image.release")," to receive the next frame. The camera\npreview will continue to render updates, but new ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")," frames will be\nomitted until ",(0,n.mdx)("a",{parentName:"p",href:"/docs/0.1/api/core/interfaces/imagemodule.image#release"},"Image.release")," is called."))),(0,n.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"image")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"An ",(0,n.mdx)("a",{parentName:"td",href:"/docs/0.1/api/core/interfaces/imagemodule.image"},"Image")," reference.")))),(0,n.mdx)("h4",{id:"returns-1"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"void")),(0,n.mdx)("h4",{id:"defined-in-4"},"Defined in"),(0,n.mdx)("p",null,"CameraView.tsx:105"))}s.isMDXComponent=!0}}]);