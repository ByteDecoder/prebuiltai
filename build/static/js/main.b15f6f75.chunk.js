(this.webpackJsonpprebuiltai=this.webpackJsonpprebuiltai||[]).push([[0],{13:function(e,t,a){e.exports={cognitiveServices:"cognitiveServices_cognitiveServices__38bOS",settings:"cognitiveServices_settings__3Gqrr",border:"cognitiveServices_border__3zKMs",borer:"cognitiveServices_borer__1pupi",animatedgradient:"cognitiveServices_animatedgradient__30Ag3",glowing:"cognitiveServices_glowing__1sVZ4",container:"cognitiveServices_container__2l_US",blogPost:"cognitiveServices_blogPost__fw7-c",sampleCheckbox:"cognitiveServices_sampleCheckbox__lN-tg",buttons:"cognitiveServices_buttons__3C8tr",last:"cognitiveServices_last__33IS3",pink:"cognitiveServices_pink__sRjPc",green:"cognitiveServices_green__two8I",blue:"cognitiveServices_blue__1hz6D",yellow:"cognitiveServices_yellow__J1LeB",error:"cognitiveServices_error__29kcy",selects:"cognitiveServices_selects__1gdYj"}},17:function(e,t,a){e.exports={describe:"describe_describe__1Ew_J",clipMe:"describe_clipMe__35mVf",title:"describe_title__R-YAh",url:"describe_url__3PFV3",json:"describe_json__2XOEG",text:"describe_text__1vE7d"}},189:function(e,t,a){e.exports={buttons:"styles_buttons__3OlSJ",pink:"styles_pink__lHh4X",green:"styles_green__1tmtk",blue:"styles_blue__3dF4G",yellow:"styles_yellow__aO633"}},190:function(e,t,a){e.exports=a(428)},195:function(e,t,a){},196:function(e,t,a){},214:function(e,t){},216:function(e,t){},225:function(e,t){},227:function(e,t){},252:function(e,t){},254:function(e,t){},255:function(e,t){},260:function(e,t){},262:function(e,t){},269:function(e,t){},271:function(e,t){},289:function(e,t){},292:function(e,t){},308:function(e,t){},311:function(e,t){},337:function(e,t){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(185),i=a.n(s),r=(a(195),a(196),a(20)),c=a(21),l=a(23),u=a(22),d=a(13),p=a.n(d),m=a(102),g=a.n(m),h=a(186),f=a(187),v=a.n(f),b=a(188),E=a.n(b),S=a(17),x=a.n(S),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:x.a.describe},n.createElement("div",{className:x.a.title},n.createElement("h2",null,"Describe")),n.createElement("br",null),n.createElement("div",{className:x.a.url},"Request: ",this.props.requestUrl),n.createElement("br",null),n.createElement("div",{className:x.a.json},n.createElement("br",null),this.props.describeRequest.description.captions.map((function(e,t){return n.createElement("div",{key:t},n.createElement("div",{className:x.a.text},"Description: "),e.text," ",n.createElement("br",null),n.createElement("div",{className:x.a.text},"Confidence: "),Math.floor(100*parseFloat(e.confidence)),"%",n.createElement("br",null))}))),n.createElement("br",null),n.createElement("div",{className:x.a.json},n.createElement("div",{className:x.a.text},"Tags:"),n.createElement("ul",null,this.props.describeRequest.description.tags.map((function(e,t){return n.createElement("li",{key:t,className:x.a.list},e," ")})))),n.createElement("div",{className:x.a.json},n.createElement("div",{className:x.a.text},"Plain JSON"),n.createElement(E.a,{src:this.props.describeJson}))))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChangeMaxCandidate=function(e){var t=e.target.value;n.setState({maxCandidate:t})},n.handleChangeLanguage=function(e){var t=e.target.value;n.setState({language:t})},n.handleSendRequest=function(e){n.setState({showDescribeResult:!0}),n.createDescribeRequest()},n.state={maxCandidate:"1",language:"en",describeRequestUrl:"",describeJson:JSON.parse("{}"),describeRequest:{description:{tags:[],captions:[{text:"",confidence:""}]}},showDescribeResult:!1,requestButtonText:"Send Request"},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("div",null,this.showImage()),n.createElement("div",{className:p.a.selects},n.createElement("label",null,"Max candidate: "),n.createElement("select",{onChange:this.handleChangeMaxCandidate},n.createElement("option",{value:"1"},"1"),n.createElement("option",{value:"2"},"2"),n.createElement("option",{value:"3"},"3"),n.createElement("option",{value:"4"},"4"),n.createElement("option",{value:"5"},"5"),n.createElement("option",{value:"6"},"6"),n.createElement("option",{value:"7"},"7"),n.createElement("option",{value:"8"},"8"),n.createElement("option",{value:"9"},"9"),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"11"},"11"),n.createElement("option",{value:"12"},"12"),n.createElement("option",{value:"13"},"13"),n.createElement("option",{value:"14"},"14"),n.createElement("option",{value:"15"},"15"))),n.createElement("div",{className:p.a.selects},n.createElement("label",null,"Language:"),n.createElement("select",{onChange:this.handleChangeLanguage},n.createElement("option",{value:"en"},"English"),n.createElement("option",{value:"es"},"Spanish"),n.createElement("option",{value:"ja"},"Japanese"),n.createElement("option",{value:"pt"},"Portugese"),n.createElement("option",{value:"zh"},"Simplified Chinese"))),n.createElement("div",{className:p.a.buttons},n.createElement("button",{className:p.a.pink,onClick:this.handleSendRequest},this.state.requestButtonText)),this.showDescribe())}},{key:"showImage",value:function(){return this.props.showSample?n.createElement("img",{src:"https://gosiaborzecka.net/static/9bacdce9827c8f4799dc367b32a32190/0047d/workshop02.jpg",alt:""}):n.createElement("img",{src:this.props.imageUrl,alt:""})}},{key:"createDescribeRequest",value:function(){var e=Object(h.a)(g.a.mark((function e(){var t,a,n,o,s,i=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.showSample){e.next=8;break}if(""===this.props.apiKey&&null===this.props.apiKey&&""===this.props.endpoint&&null===this.props.endpoint){e.next=6;break}return t="".concat(this.props.endpoint,"/vision/v3.0/describe?maxCandidates=").concat(this.state.maxCandidate,"&language=").concat(this.state.language),a={uri:t,body:"{'url': '".concat(this.props.imageUrl,"'}"),headers:{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":this.props.apiKey}},e.next=6,v.a.post(a,(function(e,a,n){if(!e){var o=JSON.parse(n);return i.setState({describeRequestUrl:t,describeRequest:o,describeJson:o}),console.log(JSON.stringify(o)),o}console.error("Error: ",e)}));case 6:e.next=13;break;case 8:return n="https://{{baseUrl}}//vision/v3.0/describe?maxCandidates=15&language=".concat(this.state.language),o=this.createSampleRequest(),s=JSON.parse(o),this.setState({describeRequestUrl:n,describeRequest:s,describeJson:s}),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSampleRequest",value:function(){var e="";switch(this.state.language){case"en":e='{"description":{"tags":["person","people","indoor","group","woman","looking","sitting","standing","photo","man","front","table","young","holding","girl","food","kitchen","room","phone","playing","computer","shirt"],"captions":[{"text":"a group of people looking at the camera","confidence":0.9637943977496417},{"text":"a group of people looking at a phone","confidence":0.8163608388985742},{"text":"a group of people sitting and looking at the camera","confidence":0.8153608388985742},{"text":"a group of people around each other","confidence":0.8143608388985742},{"text":"a group of people sitting at a table","confidence":0.8133608388985742},{"text":"a group of people looking at camera","confidence":0.8123608388985742},{"text":"a group of people looking at each other","confidence":0.8113608388985742},{"text":"a group of people are looking at the camera","confidence":0.8103608388985742},{"text":"a group of people looking at a cell phone","confidence":0.7539390755351973},{"text":"a group of people in a room","confidence":0.7529390755351973},{"text":"a group of people posing for the camera","confidence":0.7519390755351973},{"text":"a group of people sitting around a table","confidence":0.7509390755351973},{"text":"a group of people that are looking at the camera","confidence":0.7499390755351973},{"text":"a group of people who are looking at the camera","confidence":0.7489390755351973},{"text":"a group of people standing in a room","confidence":0.7479390755351973}]},"requestId":"216fbedb-b3ad-42c4-a359-30442f4eb4dc","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}';break;case"es":e='{"description":{"tags":["persona","gente","interior","grupo","mujer","viendo","parado","foto","hombre","frente","tabla","joven","sostener","ni\xf1a","alimentos","cocina","cuarto","tel\xe9fono","jugando","computadora","camiseta"],"captions":[{"text":"un grupo de mujeres sentadas en una mesa","confidence":0.6499770459618482},{"text":"grupo de personas alrededor de una mesa","confidence":0.6489770459618482},{"text":"un grupo de personas alrededor de una mesa","confidence":0.6479770459618482},{"text":"un grupo de mujeres","confidence":0.6469770459618482},{"text":"un grupo de personas sentadas alrededor de una mesa","confidence":0.6459770459618482},{"text":"grupo de personas sentadas alrededor de una mesa","confidence":0.6449770459618482},{"text":"un grupo de personas en un sal\xf3n de clases","confidence":0.6278959426980867},{"text":"un grupo de personas sentadas en una mesa","confidence":0.6268959426980867},{"text":"grupo de personas sentadas en una mesa","confidence":0.6258959426980867},{"text":"un grupo de personas reunidas en una mesa","confidence":0.6248959426980867},{"text":"un grupo de personas frente a una mesa","confidence":0.6238959426980867},{"text":"grupo de personas sentados en una mesa","confidence":0.6228959426980867},{"text":"un grupo de personas sentados en una mesa","confidence":0.6218959426980867},{"text":"un grupo de personas sentadas frente a una mesa","confidence":0.6184358785339179},{"text":"un grupo de personas sentadas a la mesa","confidence":0.6174358785339179}]},"requestId":"134cdbaf-c937-4258-bc9e-bc423e4caceb","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}';break;case"ja":e='{"description":{"tags":["\u4eba","\u6c11\u8846","\u5c4b\u5185","\u30b0\u30eb\u30fc\u30d7","\u5973\u6027","\u63a2\u3059","\u5ea7\u308b","\u7acb\u3064","\u5199\u771f","\u7537","\u30d5\u30ed\u30f3\u30c8","\u30c6\u30fc\u30d6\u30eb","\u82e5\u3044","\u6301\u3064","\u5973\u306e\u5b50","\u98df\u54c1","\u30ad\u30c3\u30c1\u30f3","\u90e8\u5c4b","\u96fb\u8a71","\u518d\u751f","\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf","\u30b7\u30e3\u30c4"],"captions":[]},"requestId":"3f99521a-c5fd-43dc-9d73-c311dffad351","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}';break;case"pt":e='{"description":{"tags":["pessoa","pessoas","no interior","grupo","mulher","olhando","em p\xe9","foto","homem","frente","mesa","jovem","segurando","menina","comida","cozinha","quarto","telefone","jogando","computador","camisa"],"captions":[{"text":"grupo de pessoas olhando para a c\xe2mera","confidence":0.7468989098503169},{"text":"grupo de pessoas lado a lado olhando para a c\xe2mera","confidence":0.7150583060273981},{"text":"grupo de pessoas sentadas ao redor de uma mesa","confidence":0.6780983122880834},{"text":"grupo de pessoas sentadas","confidence":0.6770983122880834},{"text":"pessoas olhando para a c\xe2mera","confidence":0.6760983122880834},{"text":"grupo de pessoas tirando selfie","confidence":0.6689195924419923},{"text":"grupo de pessoas posando para foto","confidence":0.6679195924419923},{"text":"grupo de pessoas ao lado de uma pessoa","confidence":0.6462713575457326},{"text":"pessoas sentadas ao redor de uma mesa","confidence":0.6452713575457326},{"text":"grupo de pessoas olhando para o lado","confidence":0.6442713575457326},{"text":"grupo de pessoas sentadas ao redor de mesa","confidence":0.630767584459535},{"text":"grupo de pessoas lado a lado","confidence":0.629767584459535},{"text":"grupo de pessoas sentadas em volta de uma mesa","confidence":0.628767584459535},{"text":"grupo de pessoas posando para uma foto","confidence":0.627767584459535},{"text":"pessoas reunidas numa sala","confidence":0.626767584459535}]},"requestId":"b18ce3f5-5c83-4c82-9981-6a587fccaf87","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}';break;case"zh":e='{"description":{"tags":["\u4eba","\u4eba\u4eec","\u5ba4\u5185","\u4e00\u7fa4","\u5973\u4eba","\u770b\u7740","\u7ad9","\u7167\u7247","\u7537\u4eba","\u524d","\u684c\u5b50","\u5e74\u8f7b","\u5973\u5b69","\u98df\u7269","\u53a8\u623f","\u623f\u95f4","\u7535\u8bdd","\u64ad\u653e","\u7535\u8111","\u886c\u886b"],"captions":[{"text":"\u4e00\u7fa4\u4eba\u6b63\u5728\u6253\u7535\u8bdd","confidence":0.6295932305096852},{"text":"\u4e00\u7fa4\u4eba\u770b\u7740\u4eba","confidence":0.6285932305096852},{"text":"\u4e00\u7fa4\u4eba\u6b63\u5728\u804a\u5929","confidence":0.6275932305096852}]},"requestId":"5c1e044b-e7cb-46a7-abd3-6019a3826b00","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}';break;default:e='{"description":{"tags":[],"captions":[{"text":"","confidence":1.0}]},"requestId":"216fbedb-b3ad-42c4-a359-30442f4eb4dc","metadata":{"width":1620,"height":1080,"format":"Jpeg"}}'}return e}},{key:"showDescribe",value:function(){if(this.state.showDescribeResult)return n.createElement(_,{imageUrl:this.props.imageUrl,describeRequest:this.state.describeRequest,requestUrl:this.state.describeRequestUrl,describeJson:this.state.describeJson})}}]),a}(n.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleShowSettings=function(e){n.state.showSettings?n.setState({showSettingsText:"Show Settings"}):n.setState({showSettingsText:"Hide Settings"}),n.setState({showSettings:!n.state.showSettings})},n.handleApiSettings=function(e){var t=e.target.value;n.setState({apiKey:t})},n.handleEndpoint=function(e){var t=e.target.value;n.setState({endpoint:t})},n.handleImage=function(e){var t=e.target.value;n.setState({imageUrl:t})},n.handleSampleData=function(e){n.setState({showSampleData:!n.state.showSampleData})},n.handleAllRequest=function(e){n.setState({showDescribe:!n.state.showDescribe}),n.showComputerVisionReqests()},n.handleDescribe=function(e){n.setState({showDescribe:!n.state.showDescribe})},n.state={showSettings:!1,showSettingsText:"Show Settings",apiKey:"",endpoint:"",imageUrl:"",showSampleData:!1,showDescribe:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:p.a.cognitiveServices},n.createElement("div",{className:p.a.settings},n.createElement("button",{onClick:this.handleShowSettings},this.state.showSettingsText),this.Settings()),n.createElement("div",{className:p.a.container},n.createElement("div",{className:p.a.blogPost},n.createElement("a",{href:"https://gosiaborzecka.net"},"Read more on the blog")),n.createElement("h1",null,"Computer Vision"),n.createElement("div",null,n.createElement("div",{className:p.a.sampleCheckbox},n.createElement("label",null,"Show sample data?"),n.createElement("input",{type:"checkbox",onChange:this.handleSampleData})),n.createElement("div",null,n.createElement("label",null,"Image url: "),n.createElement("input",{type:"text",onChange:this.handleImage}))),this.InitButtons(),this.showComputerVisionReqests()))}},{key:"Settings",value:function(){return this.state.showSettings?n.createElement("div",{className:p.a.border},n.createElement("h3",null,"Cognitive Services Settings"),n.createElement("div",null,n.createElement("p",null,"API Key"),n.createElement("input",{type:"text",onChange:this.handleApiSettings})),n.createElement("div",null,n.createElement("p",null,"Endpoint"),n.createElement("input",{type:"text",onChange:this.handleEndpoint}))):n.createElement(n.Fragment,null)}},{key:"InitButtons",value:function(){return n.createElement("div",{className:p.a.buttons},n.createElement("button",{className:p.a.green,onClick:this.handleDescribe},"Describe"),n.createElement("div",{className:p.a.last}))}},{key:"showComputerVisionReqests",value:function(){return this.state.showDescribe?n.createElement(w,{apiKey:this.state.apiKey,endpoint:this.state.endpoint,imageUrl:this.state.imageUrl,showSample:this.state.showSampleData}):n.createElement(n.Fragment,null)}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showCognitiveServices:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:p.a.cognitiveServices},n.createElement(k,null))}}]),a}(n.Component),j=a(189),C=a.n(j),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showCognitiveServices:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("div",{className:C.a.main},n.createElement(y,null))}}]),a}(n.Component);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.b15f6f75.chunk.js.map