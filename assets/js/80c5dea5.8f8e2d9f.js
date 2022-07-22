"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[604],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>h,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){return function(t){var n=c(t.components);return a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(r,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27436:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010),o=n(86668);const r="expoSnack_M4rn";function l(e){let{snackPreview:t=!0,snackId:n,snackStyle:l}=e;const{isDarkTheme:s}=(0,o.L)(),m=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=m.current;null!==e&&null!=window.ExpoSnack&&(window.ExpoSnack.remove(e),window.ExpoSnack.append(e))}),[s]),a.createElement("div",{ref:m,className:(0,i.default)([r,l]),"data-snack-id":n,"data-snack-loading":"lazy","data-snack-platform":"mydevice","data-snack-preview":t,"data-snack-supported-platforms":"mydevice","data-snack-theme":s?"dark":"light"})}},65876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),o=n(27436);const r={id:"image-classification",title:"Image Classification"},l=void 0,s={unversionedId:"tutorials/snacks/image-classification",id:"tutorials/snacks/image-classification",title:"Image Classification",description:"In this tutorial, you will build an app that can take pictures and classify",source:"@site/docs/tutorials/snacks/image-classification.mdx",sourceDirName:"tutorials/snacks",slug:"/tutorials/snacks/image-classification",permalink:"/docs/next/tutorials/snacks/image-classification",draft:!1,editUrl:"https://github.com/facebookresearch/playtorch/edit/main/website/docs/tutorials/snacks/image-classification.mdx",tags:[],version:"current",frontMatter:{id:"image-classification",title:"Image Classification"},sidebar:"docs",previous:{title:"Add PlayTorch to Existing App",permalink:"/docs/next/tutorials/add-package"},next:{title:"Question Answering",permalink:"/docs/next/tutorials/snacks/nlp-qa"}},m={},d=[{value:"Viewing this Demo",id:"viewing-this-demo",level:2},{value:"Preview",id:"preview",level:2},{value:"Overview",id:"overview",level:2},{value:"Starting a New Project",id:"starting-a-new-project",level:2},{value:"Run the New Project",id:"run-the-new-project",level:2},{value:"Add PlayTorch Dependencies",id:"add-playtorch-dependencies",level:2},{value:"Add a Camera View",id:"add-a-camera-view",level:2},{value:"Process an Image",id:"process-an-image",level:2},{value:"Run the Model",id:"run-the-model",level:2},{value:"Display the Result",id:"display-the-result",level:2}],c={toc:d};function h(e){let{components:t,...r}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"tutorial-page"},(0,i.mdx)("div",{className:"tutorial-oneliner"},"In this tutorial, you will build an app that can take pictures and classify objects in each image using an on-device image classification model."),(0,i.mdx)("h2",{id:"viewing-this-demo"},"Viewing this Demo"),(0,i.mdx)("p",null,"In order to view this demo ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/tutorials/get-started#download-the-playtorch-app"},"download the PlayTorch app"),"."),(0,i.mdx)("h2",{id:"preview"},"Preview"),(0,i.mdx)("p",null,"If you want a sneak peek at what you'll be building, run this Snack by scanning the QR code in the PlayTorch app!"),(0,i.mdx)(o.Z,{snackId:"@playtorch/image-classification",mdxType:"ExpoSnack"}),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"We'll go through the following steps:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Create a new project with Snack by Expo"),(0,i.mdx)("li",{parentName:"ol"},"Run the project in the PlayTorch app"),(0,i.mdx)("li",{parentName:"ol"},"Add PlayTorch dependencies"),(0,i.mdx)("li",{parentName:"ol"},"Add a camera view"),(0,i.mdx)("li",{parentName:"ol"},"Process an image"),(0,i.mdx)("li",{parentName:"ol"},"Run a model"),(0,i.mdx)("li",{parentName:"ol"},"Display results")),(0,i.mdx)("h2",{id:"starting-a-new-project"},"Starting a New Project"),(0,i.mdx)("p",null,"We will be using a tool called Snack by Expo to write our code in the browser and then run it on our device. To learn more about Snack, visit ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.expo.dev/workflow/snack/"},"this link"),"."),(0,i.mdx)("p",null,"Open a new tab in your web browser and navigate to ",(0,i.mdx)("a",{parentName:"p",href:"https://snack.expo.dev"},"snack.expo.dev"),"."),(0,i.mdx)("p",null,"You will see a code editor with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js"),' file open. On the right side of the window, you will see several options for running your code. It defaults to "Web", but let\'s select "My Device" so we can use the PlayTorch app to enable ML in our app.'),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:n(7857).Z,width:"3006",height:"1593"})),(0,i.mdx)("h2",{id:"run-the-new-project"},"Run the New Project"),(0,i.mdx)("p",null,'Open the PlayTorch app and from the home screen, tap "Scan QR Code".'),(0,i.mdx)("p",null,"If you have never done this before, it will ask for camera permissions. Grant the app camera permissions and scan the QR code from the right side of the Snack window."),(0,i.mdx)("p",null,"If you haven't made any changes to the snack, you should see a screen that looks like this:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:n(81742).Z,width:"300",height:"650"})),(0,i.mdx)("p",null,"Try changing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"backgroundColor")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"#800080")," on line 29 and you will see that your app screen changes in real time to match it."),(0,i.mdx)("h2",{id:"add-playtorch-dependencies"},"Add PlayTorch Dependencies"),(0,i.mdx)("p",null,"In order to add ML to this simple demo, we first need to add the PlayTorch dependencies."),(0,i.mdx)("p",null,"In the left side of the Snack window, you will see a list of the files being used in your Snack. Open the one called ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," and replace the contents with the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "react-native-pytorch-core": "0.2.0",\n    "react-native-safe-area-context": "3.3.2"\n  }\n}\n')),(0,i.mdx)("p",null,"This is a list of external libraries that we will be using to build our ML powered demo."),(0,i.mdx)("h2",{id:"add-a-camera-view"},"Add a Camera View"),(0,i.mdx)("p",null,"Now that we have the extra dependencies loaded, we can use them to prepare our user interface for collecting images to classify."),(0,i.mdx)("p",null,"Go ahead and replace the contents of ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js")," with the following. Let's walk through what changes are included:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Import dependencies. It's worth noting we import the Camera component from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"react-native-pytorch-core")," package. That is the core PlayTorch SDK"),(0,i.mdx)("li",{parentName:"ol"},"Update the App function to render our new UI",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},'Get the "safe area insets" which let us know how much of the screen we can actually use to render avoiding camera notches and bottom bars.'),(0,i.mdx)("li",{parentName:"ol"},"Make the Camera view fill the whole screen except for the unsafe areas on the bottom so the capture button doesn't get obscured"),(0,i.mdx)("li",{parentName:"ol"},"Create a label container for when we begin classifying images that floats near the top"))),(0,i.mdx)("li",{parentName:"ol"},"Create a styles object that is used to set the styles for or label container")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="App.js"',title:'"App.js"'},"// 1. Import dependencies\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Camera} from 'react-native-pytorch-core';\nimport {useSafeAreaInsets} from 'react-native-safe-area-context';\n\n// 2. App function to render a camera and a text\nexport default function App() {\n  // 2.i. Safe area insets to compensate for notches and bottom bars\n  const insets = useSafeAreaInsets();\n  return (\n    <View style={StyleSheet.absoluteFill}>\n      {/* 2.ii. Render camara and make it parent filling */}\n      <Camera style={[StyleSheet.absoluteFill, {bottom: insets.bottom}]} />\n      {/* 2.iii. Label container with custom render style and a text */}\n      <View style={styles.labelContainer}>\n        <Text>Label will go here</Text>\n      </View>\n    </View>\n  );\n}\n\n// 3. Custom render style for label container\nconst styles = StyleSheet.create({\n  labelContainer: {\n    padding: 20,\n    margin: 20,\n    marginTop: 40,\n    borderRadius: 10,\n    backgroundColor: 'white',\n  },\n});\n")),(0,i.mdx)("p",null,"Once you make these changes, open the Snack back up in the PlayTorch app and you will see the camera view filling the screen and our label container with a placeholder label."),(0,i.mdx)("p",null,"Notice clicking the capture button doesn't do anything yet. Let's fix that."),(0,i.mdx)("p",null,"The added lines below do the following:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Create an async (runs in the background) function called ",(0,i.mdx)("inlineCode",{parentName:"li"},"handleImage")," that simply:",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Logs the image object passed to it"),(0,i.mdx)("li",{parentName:"ol"},"Releases the image from memory. Not calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"image.release()")," will result in the camera not providing an image on consecutive presses of the capture button. The only way to fix this is to force close the PlayTorch app and reopen it."))),(0,i.mdx)("li",{parentName:"ol"},"Set the ",(0,i.mdx)("inlineCode",{parentName:"li"},"handleImage")," function to be called everytime an image is captured by the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Camera")," component")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'{12-18,25-26} title="App.js"',"{12-18,25-26}":!0,title:'"App.js"'},"// Import dependencies\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Camera} from 'react-native-pytorch-core';\nimport {useSafeAreaInsets} from 'react-native-safe-area-context';\n\n// App function to render a camera and a text\nexport default function App() {\n  // Safe area insets to compensate for notches and bottom bars\n  const insets = useSafeAreaInsets();\n\n  // 1. Function to handle images whenever the user presses the capture button\n  async function handleImage(image) {\n    // 1.i. Log the image object to the console\n    console.log(image);\n    // 1.ii. Release the image from memory\n    image.release();\n  }\n\n  return (\n    <View style={StyleSheet.absoluteFill}>\n      {/* Render camara and make it parent filling */}\n      <Camera\n        style={[StyleSheet.absoluteFill, {bottom: insets.bottom}]}\n        // 2. Add handle image callback on the camera component\n        onCapture={handleImage}\n      />\n      {/* Label container with custom render style and a text */}\n      <View style={styles.labelContainer}>\n        <Text>Label will go here</Text>\n      </View>\n    </View>\n  );\n}\n\n// Custom render style for label container\nconst styles = StyleSheet.create({\n  labelContainer: {\n    padding: 20,\n    margin: 20,\n    marginTop: 40,\n    borderRadius: 10,\n    backgroundColor: 'white',\n  },\n});\n")),(0,i.mdx)("p",null,"Open the logs in the Snack window by clicking the settings gear icon at the bottom of the window, enabling the Panel, and clicking the logs tab of the newly opened panel."),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:n(4145).Z,width:"3006",height:"1653"})),(0,i.mdx)("p",null,"After taking a picture, you should see a logged object with an ",(0,i.mdx)("inlineCode",{parentName:"p"},"ID")," field."),(0,i.mdx)("p",null,"Now that we can capture images, let's write some code to prepare them for machine learning!"),(0,i.mdx)("h2",{id:"process-an-image"},"Process an Image"),(0,i.mdx)("p",null,"In order for us to run machine learning on our image to classify it, we first need to translate it to a format that the ML model understands."),(0,i.mdx)("p",null,"ML models don't work with images, but with tensors (multi dimensional matrices) with their own specific data format."),(0,i.mdx)("p",null,"The MobileNet model that we will be using only needs its image data in its tensors to be exactly 224 by 224 with normalized data and a specific shape."),(0,i.mdx)("p",null,"Let's create a new file by clicking the new file button in the left pane of the Snack window. We'll call it ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageClassifier.js")),(0,i.mdx)("p",null,"Let's walk through the code below to see how we get our image converted to a proper tensor:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Import ",(0,i.mdx)("inlineCode",{parentName:"li"},"torch"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"torchvision"),", and ",(0,i.mdx)("inlineCode",{parentName:"li"},"media")," from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"react-native-pytorch-core")," package (the PlayTorch SDK)"),(0,i.mdx)("li",{parentName:"ol"},"Create an alias called ",(0,i.mdx)("inlineCode",{parentName:"li"},"T")," for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"transforms")," object from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"torchvision")," to make it shorter to access the transform functions"),(0,i.mdx)("li",{parentName:"ol"},"Create an async function called ",(0,i.mdx)("inlineCode",{parentName:"li"},"classifyImage")," that takes in an image and does the following:",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Grab the ",(0,i.mdx)("inlineCode",{parentName:"li"},"width")," and the ",(0,i.mdx)("inlineCode",{parentName:"li"},"height")," of the image"),(0,i.mdx)("li",{parentName:"ol"},"Create a ",(0,i.mdx)("inlineCode",{parentName:"li"},"blob")," of the image (a blob is just a raw data representation of something). In this case, the blob holds a byte representation of the image in the format height, width, and channels, or HWC for short."),(0,i.mdx)("li",{parentName:"ol"},"Create a ",(0,i.mdx)("inlineCode",{parentName:"li"},"tensor")," from the blob with the shape height by width by channels (RGB). It is important that the order of HWC is aligned with the byte representation of the image."),(0,i.mdx)("li",{parentName:"ol"},"Rearrange the tensor shape to be channels (RGB) by height by width. This is important because the image classifiation model that is used in this tutorial requires the tensor shape to be in this order."),(0,i.mdx)("li",{parentName:"ol"},"Divide all of the values in the tensor by 255. This is important because the image classification model requires the tensor values to be between ",(0,i.mdx)("inlineCode",{parentName:"li"},"[0, 1]"),"."),(0,i.mdx)("li",{parentName:"ol"},"Center crop the image data within the tensor. The center crop will result in a squared image tensor with the shortest side defining the size."),(0,i.mdx)("li",{parentName:"ol"},"Resize the tensor to ",(0,i.mdx)("inlineCode",{parentName:"li"},"3")," by ",(0,i.mdx)("inlineCode",{parentName:"li"},"224")," by ",(0,i.mdx)("inlineCode",{parentName:"li"},"224")," (or tensor shape ",(0,i.mdx)("inlineCode",{parentName:"li"},"[3, 224, 224]"),") to match the size the model expects as tensor input format."),(0,i.mdx)("li",{parentName:"ol"},"Normalize the tensor image with mean and standard deviation."),(0,i.mdx)("li",{parentName:"ol"},"Add one more leading dimension to the tensor to be in the shape ",(0,i.mdx)("inlineCode",{parentName:"li"},"1")," by ",(0,i.mdx)("inlineCode",{parentName:"li"},"3")," by ",(0,i.mdx)("inlineCode",{parentName:"li"},"224")," by ",(0,i.mdx)("inlineCode",{parentName:"li"},"224")," (or tensor shape ",(0,i.mdx)("inlineCode",{parentName:"li"},"[1, 3, 224, 224]"),"). The image classification model can classify multiple images in parallel. The leading ",(0,i.mdx)("inlineCode",{parentName:"li"},"1")," represents the batch size, which is ",(0,i.mdx)("inlineCode",{parentName:"li"},"1")," because in this tutorial it only needs to process one image at a time."),(0,i.mdx)("li",{parentName:"ol"},"Return the shape of the tensor, which is ",(0,i.mdx)("inlineCode",{parentName:"li"},"[1, 3, 224, 224]"),".")))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="ImageClassifier.js"',title:'"ImageClassifier.js"'},"// 1. Import torch, torchvision, and media from PlayTorch SDK\nimport {torch, torchvision, media} from 'react-native-pytorch-core';\n\n// 2. Alias for torchvision transforms\nconst T = torchvision.transforms;\n\n// 3. The classifyImage function that will process an image and return the top\n// class label\nexport default async function classifyImage(image) {\n  // 3.i. Get image width and height\n  const width = image.getWidth();\n  const height = image.getHeight();\n\n  // 3.ii. Convert image to blob, which is a byte representation of the image\n  // in the format height (H), width (W), and channels (C), or HWC for short\n  const blob = media.toBlob(image);\n\n  // 3.iii. Get a tensor from image the blob and also define in what format\n  // the image blob is.\n  let tensor = torch.fromBlob(blob, [height, width, 3]);\n\n  // 3.iv. Rearrange the tensor shape to be [CHW]\n  tensor = tensor.permute([2, 0, 1]);\n\n  // 3.v. Divide the tensor values by 255 to get values between [0, 1]\n  tensor = tensor.div(255);\n\n  // 3.vi. Crop the image in the center to be a squared image\n  const centerCrop = T.centerCrop(Math.min(width, height));\n  tensor = centerCrop(tensor);\n\n  // 3.vii. Resize the image tensor to 3 x 224 x 224\n  const resize = T.resize(224);\n  tensor = resize(tensor);\n\n  // 3.viii. Normalize the tensor image with mean and standard deviation\n  const normalize = T.normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]);\n  tensor = normalize(tensor);\n\n  // 3.ix. Unsqueeze adds 1 leading dimension to the tensor\n  tensor = tensor.unsqueeze(0);\n\n  // 3.x. Return the tensor shape [1, 3, 224, 224]\n  return tensor.shape;\n}\n")),(0,i.mdx)("p",null,"Let's double check the output of this function to make sure we are on the right track."),(0,i.mdx)("p",null,"Go back to ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js")," and instead of just logging the ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," object, let's run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"classifyImage")," function on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," object first and log the result instead."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Import the ",(0,i.mdx)("inlineCode",{parentName:"li"},"classifyImage")," function from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ImageClassifier.ts")," file."),(0,i.mdx)("li",{parentName:"ol"},"Call ",(0,i.mdx)("inlineCode",{parentName:"li"},"classifyImage")," function with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"image")," from the camera."),(0,i.mdx)("li",{parentName:"ol"},"Log the ",(0,i.mdx)("inlineCode",{parentName:"li"},"result")," to the console.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'{6-7,16-17,18-19} title="App.js"',"{6-7,16-17,18-19}":!0,title:'"App.js"'},"// Import dependencies\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Camera} from 'react-native-pytorch-core';\nimport {useSafeAreaInsets} from 'react-native-safe-area-context';\n// 1. Import classify image function\nimport classifyImage from './ImageClassifier';\n\n// App function to render a camera and a text\nexport default function App() {\n  // Safe area insets to compensate for notches and bottom bars\n  const insets = useSafeAreaInsets();\n\n  // Function to handle images whenever the user presses the capture button\n  async function handleImage(image) {\n    // 2. Call the classify image function with the camera image\n    const result = await classifyImage(image);\n    // 3. Log the result from classify image to the console\n    console.log(result);\n    // Release the image from memory\n    image.release();\n  }\n\n  return (\n    <View style={StyleSheet.absoluteFill}>\n      {/* Render camara and make it parent filling */}\n      <Camera\n        style={[StyleSheet.absoluteFill, {bottom: insets.bottom}]}\n        // Add handle image callback on the camera component\n        onCapture={handleImage}\n      />\n      {/* Label container with custom render style and a text */}\n      <View style={styles.labelContainer}>\n        <Text>Label will go here</Text>\n      </View>\n    </View>\n  );\n}\n\n// Custom render style for label container\nconst styles = StyleSheet.create({\n  labelContainer: {\n    padding: 20,\n    margin: 20,\n    marginTop: 40,\n    borderRadius: 10,\n    backgroundColor: 'white',\n  },\n});\n")),(0,i.mdx)("p",null,"When you check the log ouput after capturing an image now, you should see ",(0,i.mdx)("inlineCode",{parentName:"p"},"[1,3,224,224]"),", which is the tensor shape we need."),(0,i.mdx)("p",null,"Now that the image has been converted to a properly formatted tensor, we are ready to run the machine learning model!"),(0,i.mdx)("h2",{id:"run-the-model"},"Run the Model"),(0,i.mdx)("p",null,"Let's head back to our ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageClassifier.js")," file and make some updates to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"classifyImage")," function to actually classify the image."),(0,i.mdx)("p",null,"For the changes we make to ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageClassifer.js")," you'll need to upload a file containing the labels for the different things the model knows how to classify."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/releases/download/v0.1.0/ImageNetClasses.json"},"Click here to do download the JSON file")," and then drag and drop it into the Snack window to upload it."),(0,i.mdx)("p",null,"Here's a quick summary of the changes we are making to run the model:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Import the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MobileModel")," to help us load our machine learning model"),(0,i.mdx)("li",{parentName:"ol"},"Import the class labels from the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ImageNetClasses.json")," file. The JSON file is a mapping between image class indices to class labels."),(0,i.mdx)("li",{parentName:"ol"},"Store the url for the model we'll be using in a variable for later access"),(0,i.mdx)("li",{parentName:"ol"},"Create a variable for storing our ",(0,i.mdx)("inlineCode",{parentName:"li"},"model")," and set it to null initially"),(0,i.mdx)("li",{parentName:"ol"},"After we have the tensor all ready, check to see if our ",(0,i.mdx)("inlineCode",{parentName:"li"},"model")," is still null. If it is, initialize it by downloading it and loading it into memory."),(0,i.mdx)("li",{parentName:"ol"},"Run the model on our image converted into a tensor by calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"model.forward(tensor)"),". The return value will be a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Tensor")," of shape ",(0,i.mdx)("inlineCode",{parentName:"li"},"[1, 1000]")," where ",(0,i.mdx)("inlineCode",{parentName:"li"},"1")," the batch size (remember in this tutorial only 1 image is processed at a time) and ",(0,i.mdx)("inlineCode",{parentName:"li"},"1000")," are 1000 probability values (one probability value for each class in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ImageNetClasses.json"),")."),(0,i.mdx)("li",{parentName:"ol"},"Find the index with the highest probability, which represents the most likely class detected in the image."),(0,i.mdx)("li",{parentName:"ol"},"Resolve the most likely image class by mapping the index to the class label and return it.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'{1,3,8-10,15-17,19-20,58-72} title="ImageClassifer.js"',"{1,3,8-10,15-17,19-20,58-72}":!0,title:'"ImageClassifer.js"'},"// 1. Add import for MobileModel from PlayTorch SDK\nimport {\n  MobileModel,\n  torch,\n  torchvision,\n  media,\n} from 'react-native-pytorch-core';\n// 2. Import the ImageNetClasses JSON file, which is used below to map the\n// processed model result to a class label\nimport * as ImageNetClasses from './ImageNetClasses.json';\n\n// Alias for torchvision transforms\nconst T = torchvision.transforms;\n\n// 3. URL to the image classification model that is used int his example\nconst MODEL_URL =\n  'https://github.com/facebookresearch/playtorch/releases/download/v0.1.0/mobilenet_v3_small.ptl';\n\n// 4. Variable to hold a reference to the loaded ML model\nlet model = null;\n\n// The classifyImage function that will process an image and return the top\n// class label\nexport default async function classifyImage(image) {\n  // Get image width and height\n  const width = image.getWidth();\n  const height = image.getHeight();\n\n  // Convert image to blob, which is a byte representation of the image\n  // in the format height (H), width (W), and channels (C), or HWC for short\n  const blob = media.toBlob(image);\n\n  // Get a tensor from image the blob and also define in what format\n  // the image blob is.\n  let tensor = torch.fromBlob(blob, [height, width, 3]);\n\n  // Rearrange the tensor shape to be [CHW]\n  tensor = tensor.permute([2, 0, 1]);\n\n  // Divide the tensor values by 255 to get values between [0, 1]\n  tensor = tensor.div(255);\n\n  // Crop the image in the center to be a squared image\n  const centerCrop = T.centerCrop(Math.min(width, height));\n  tensor = centerCrop(tensor);\n\n  // Resize the image tensor to 3 x 224 x 224\n  const resize = T.resize(224);\n  tensor = resize(tensor);\n\n  // Normalize the tensor image with mean and standard deviation\n  const normalize = T.normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]);\n  tensor = normalize(tensor);\n\n  // Unsqueeze adds 1 leading dimension to the tensor\n  tensor = tensor.unsqueeze(0);\n\n  // 5. If the model has not been loaded already, it will be downloaded from\n  // the URL and then loaded into memory.\n  if (model == null) {\n    const filePath = await MobileModel.download(MODEL_URL);\n    model = await torch.jit._loadForMobile(filePath);\n  }\n\n  // 6. Run the ML inference with the pre-processed image tensor\n  const output = await model.forward(tensor);\n\n  // 7. Get the index of the value with the highest probability\n  const maxIdx = output.argmax().item();\n\n  // 8. Resolve the most likely class label and return it\n  return ImageNetClasses[maxIdx];\n}\n")),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Since we are initializing the model the first time we run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"classifyImage")," function, it will be slower. Subsequent runs will go much faster since they don't have to download the model or load it into memory."))),(0,i.mdx)("p",null,"Now that we are actually running the model, let's try it out in the PlayTorch app again and see what it logs. You should see a class label in the logs which is a word or list of words."),(0,i.mdx)("p",null,"Excellent! It's logging the classification of each picture!"),(0,i.mdx)("h2",{id:"display-the-result"},"Display the Result"),(0,i.mdx)("p",null,"Lastly, let's update our UI to display the result of our model!"),(0,i.mdx)("p",null,"Go back to ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js")," and make the following changes:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Create a state variable to store the ",(0,i.mdx)("inlineCode",{parentName:"li"},"topClass")," we get from the model"),(0,i.mdx)("li",{parentName:"ol"},"In the ",(0,i.mdx)("inlineCode",{parentName:"li"},"handleImage")," function, set the ",(0,i.mdx)("inlineCode",{parentName:"li"},"topClass")," state variable to the result of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"classifyImage")," function"),(0,i.mdx)("li",{parentName:"ol"},"Change the text in the UI to display the ",(0,i.mdx)("inlineCode",{parentName:"li"},"topClass")," state variable instead of the placeholder text")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js",metastring:'{13-17,23-24,39-40} title="App.js"',"{13-17,23-24,39-40}":!0,title:'"App.js"'},"// Import dependencies\nimport * as React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Camera} from 'react-native-pytorch-core';\nimport {useSafeAreaInsets} from 'react-native-safe-area-context';\n// Import classify image function\nimport classifyImage from './ImageClassifier';\n\n// App function to render a camera and a text\nexport default function App() {\n  // Safe area insets to compensate for notches and bottom bars\n  const insets = useSafeAreaInsets();\n  // 1. Create a React state to store the top class returned from the\n  // classifyImage function\n  const [topClass, setTopClass] = React.useState(\n    \"Press capture button to classify what's in the camera view!\",\n  );\n\n  // Function to handle images whenever the user presses the capture button\n  async function handleImage(image) {\n    // Call the classify image function with the camera image\n    const result = await classifyImage(image);\n    // 2. Set result as top class label state\n    setTopClass(result);\n    // Release the image from memory\n    image.release();\n  }\n\n  return (\n    <View style={StyleSheet.absoluteFill}>\n      {/* Render camara and make it parent filling */}\n      <Camera\n        style={[StyleSheet.absoluteFill, {bottom: insets.bottom}]}\n        // Add handle image callback on the camera component\n        onCapture={handleImage}\n      />\n      {/* Label container with custom render style and a text */}\n      <View style={styles.labelContainer}>\n        {/* 3. Change the text to render the top class label */}\n        <Text>{topClass}</Text>\n      </View>\n    </View>\n  );\n}\n\n// Custom render style for label container\nconst styles = StyleSheet.create({\n  labelContainer: {\n    padding: 20,\n    margin: 20,\n    marginTop: 40,\n    borderRadius: 10,\n    backgroundColor: 'white',\n  },\n});\n")),(0,i.mdx)("p",null,"And with that you have a working image classifer!")))}h.isMDXComponent=!0},4145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snack-open-logs-49861b6f8e66c61c31dc22fc983e5ab2.png"},81742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/starter-screen-163f771cfcb176173d176e2bb0692cc9.jpg"},7857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/starter-snack-8e6983b26ed3a7bc806b1875565d53ca.png"}}]);