'use strict';!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('url'),d=require('./41c99b908d0cb118c2a6fcf3c306663c.js'),e=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),f=require('./a15851ca252a104aad8b3fd3fc114574.js'),g=require('./0db6515f85d6f6210c2d50722041eb1f.js'),h=require('./d00040b9bed6196b3701ea7c8a4b4db3.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./709f7f8328edb932b1169de8b7e694dd.js'),k=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),l=require('./a1dd553cc059d528bb0ef56afed53968.js'),m=require('./919ad605b043ca39c480b04f2062eb9a.js'),n=require('./3bfffbe88b3d923921f851c0697974fe.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),p=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),q=require('./common/locales/index.js'),r=require('./a78e6d6a87de1708226375ca4c320d76.js'),s=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),t=require('./d2baddafb02abd034d543c2a31ef97a0.js'),u=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),v=require('./949d8235c744ced2a80121e4dba34c28.js'),w=require('./41168dca39589e852da6631126d0f94d.js'),x=require('./a7261ee5e1a26dddf8d07b048ad1c94d.js'),y=require('./87822abadd12d18b00ea00716f2410f6.js'),z=require('./ff946754202ecf377034d29daac7c8d9.js'),{weappStoreFileReqular:A,weappTmpFileReqular:B,weappUsrFileReqular:C,weappStoreFilePathPrefix:D,weappTmpFilePathPrefix:E,weappUsrFilePathPrefix:F}=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),{validType:G,tokenManager:H}=require('./dc244a5ba483ad6e0acd267d3b91b282.js'),I='darwin'===process.platform;let J={};class K extends a.Component{constructor(a){super(a),this._consolemessage=this.consolemessage.bind(this),this._onWebviewMessage=this.onWebviewMessage.bind(this),this.state={zIndex:'standby'==a.type?-1:0},this.consoleMsgQueue={}}componentDidMount(){const a=this.props,b=this.container,c=this.webviewID=a.info.id;this.context.isPopup&&this.adjustWindowSize();const d=this.webview=r.get('simulator',{id:c,width:a.width,height:a.height,dpr:a.dpr});d.needDebugger=1,this.props.muted&&d.setAudioMuted(!0),this.setWebviewHeight(),this.setUserAgentOverride(),'tip'==a.type?d.src=`html/weappabout.html?${c}`:(this.initEvent(),this.initDebuggeeEvent(),d.src=`http://127.0.0.1:${global.proxyPort}/aboutblank?${c}`),d.attach(b),f.register(c,this._onWebviewMessage),global.online&&y.manager.addWebview(c,d._webview)}componentWillReceiveProps(a){if(a.jssdkCallbackInfo!=this.props.jssdkCallbackInfo){const{callbackID:b,res:c,webviewID:d}=a.jssdkCallbackInfo;d==a.info.id&&f.invokeCallback(d,b,c)}if(a.interfaceCallbackInfo!=this.props.interfaceCallbackInfo){const{data:b}=a.interfaceCallbackInfo;b&&b.webviewID==a.info.id&&this.handleInterfaceInvocation(a.interfaceCallbackInfo)}if(a.captureScreen!=this.props.captureScreen&&a.captureScreen.webviewID==this.webviewID&&setTimeout(()=>{this.captureScreen()}),(a.info.pathName!=this.props.info.pathName||a.info.forceLoad!=this.props.info.forceLoad&&a.info.pathName)&&setTimeout(()=>{this.loadPage()}),a.type!=this.props.type&&'standby'!=a.type&&this.setState({zIndex:0}),a.wxmlInspected!=this.props.wxmlInspected&&this.webview&&this.webview.setEmulationTouch(!a.wxmlInspected),(a.muted&&!this.props.muted||!a.muted&&this.props.muted)&&this.webview&&this.webview.setAudioMuted(a.muted),this.props.info.ready&&a.show!=this.props.show)if(clearTimeout(this.hideTimer),!a.show){try{this.props.appConfig.entryPagePath.match(/^(.+)\.html$/)[1]===this.props.info.pathName&&this.webview.captureVisibleRegion({format:'png'},(a)=>{this.props.projectActions.updateProjectCover({image:a})})}catch(a){i.error('fail: capture screen while leaving first page'+a.toString())}this.hideTimer=setTimeout(()=>{this.setState({zIndex:1})},200)}else this.setState({zIndex:2});a.height!=this.props.height&&(clearTimeout(this._setWebviewHeightTimer),this._setWebviewHeightTimer=setTimeout(()=>{this.context.isPopup&&this.adjustWindowSize(),this.setWebviewHeight()})),a.shareInfoShow!=this.props.shareInfoShow&&a.shareInfoShow&&a.show&&!a.info.htmlwebviewInfo&&this.webview.executeScript({code:'alert(\'GET_WEBVIEW_SCROLL_Y\' + window.scrollY);window.scrollTo(0,0);'},()=>{this.webview.captureVisibleRegion({format:'png'},(a)=>{this.props.simulatorActions.setShareDataURI(this.webviewID,a),this.webview.executeScript({code:`window.scrollTo(0,${this.webviewScrollY})`},()=>{this.webviewScrollY=void 0})})})}componentWillUnmount(){this.webview&&this.webview.detach(),global.online&&y.manager.removeWebview(this.props.info.id),this.props.simulatorActions.setDebuggee(void 0,this.webviewID,!1),f.unRegister(this.webviewID,this._onWebviewMessage)}adjustWindowSize(){}handleInterfaceInvocation(a){function b(a){x.invokeCallback({callbackID:c,data:a})}const{callbackID:c,method:d,data:e}=a;switch(d){case'getWebviewHTML':{this.documentReady?this.webview.executeScript({code:'document.body.innerHTML'},(a)=>{a&&a[0]?b(a[0]):b('')}):b('');break}case'getScreenShot':{this.webview.captureVisibleRegion({format:'png'},(a)=>{b(a)});break}}}captureScreen(){this.webview.captureVisibleRegion({format:'png'},(a)=>{const b=Buffer.from(a.replace('data:image/png;base64,',''),'base64'),c=u.copyFileDataToTemp(this.props.project,b,'.png'),{webviewID:d,callbackID:e}=this.props.captureScreen;this.props.simulatorActions.assdkCallback({callbackID:e,res:{errMsg:'captureScreen:ok',tempFilePath:c}})})}setWebviewHeight(){let a=this.props.width/this.props.deviceScale,b=this.props.height/this.props.deviceScale;'popup'==this.props.position&&(b=this.props.height,a=this.props.width),this.webview.setAttribute('style',`position:absolute;height:${b}px;width:${a}px;`);try{this.webview.setOffset({height:this.props.height,width:this.props.width,dpr:this.props.dpr})}catch(a){}}reload(){this.documentReady=!1;const a=this.webview;this.setUserAgentOverride(),a.src=`http://127.0.0.1:${global.proxyPort}/__pageframe__/pageframe.html`}setUserAgentOverride(){const a=H.getSessionToken(G.UA_TOKEN);let b=this.props.ua.replace('{{webviewID}}',this.webviewID);b+=` port/${global.messageCenterPort} token/${a}`,this.webview.setUserAgentOverride(b)}async animateWebviewTransition(a){return new Promise((b)=>{if(!this.container)return;let{top:c,left:d,height:e,width:f}=this.container.getBoundingClientRect();if(e/=this.props.deviceScale,f/=this.props.deviceScale,c=this.props.top,d=0,'enter'===a){const a=this.container.style.cssText,g=`position:fixed; width:${f}px; height:${e}px; top:${c}px; left:${d}px;`;this.container.style.cssText='z-index: 2;'+g,this.container.style.transform=`translate(${f}px, 0)`;const h=()=>{this.container.removeEventListener('transitionend',h),this.container.style.cssText=a,this.setState({zIndex:this.props.show?1:0},b)};this.container.addEventListener('transitionend',h);let i=this.context.window||global.Win;i.window.requestAnimationFrame(()=>{this.container&&(this.container.style.transition='all linear 0.2s',this.container.style.transform='translate(0,0)')}),this.container.offsetHeight}else if('exit'===a){const a=this.container.style.cssText,g=`position:fixed; width:${f}px; height:${e}px; top:${c}px; left:${d}px;`;this.container.style.cssText='z-index: 2;'+g,this.container.style.transform='translate(0, 0)';const h=()=>{this.container.removeEventListener('transitionend',h),this.container.style.cssText=a,this.setState({zIndex:this.props.show?1:0},b)};this.container.addEventListener('transitionend',h);let i=this.context.window||global.Win;i.window.requestAnimationFrame(()=>{this.container&&(this.container.style.transition='all linear 0.2s',this.container.style.transform=`translate(${f}px,0)`)}),this.container.offsetHeight}})}async loadPage(){const a=this.webview;if(!this.webview||!this.props.info||!this.props.info.pathName||!this.documentReady)return;const b=this.props.info;if(b.pageNotFound&&!b.forceLoad)return void l.triggerOnEvent({eventName:'onPageNotFound',data:{path:b.pathName,query:b.query,isEntryPage:b.isEntryPage},webviewID:this.webviewID});this.setWebviewHeight();const d=b.pathName;a.setAttribute('route',d);const e=c.parse(a.src);e.pathname=`__pageframe__/${d}`;const f=c.format(e);let g='';try{g=await t(this.props.project,d)}catch(a){return void p.display({command:o.DISPLAY_ERROR,data:{error:a}})}g=`var script = document.createElement('script')
      script.text = \`
        history.pushState('','', '${f}')
        ${g};
      \`
      document.head.appendChild(script)`,a.executeScript({code:g},()=>{Date.now();this.props.simulatorActions.setWebviewReady(this.webviewID,!0),this.onWebviewReady()})}consolemessage(a){const b=a.message;this.consoleMsgQueue[b]||(this.consoleMsgQueue[b]=!0,m(a))}onWebviewReady(){this.props.muted&&setTimeout(()=>{this.webview.setAudioMuted(this.props.muted)},100)}onWebviewMessage(a){let b={};try{b=JSON.parse(a)}catch(b){return void i.error(`onWebviewMessage parse ${a} error ${b}`)}if('WEBVIEW_PUBLISH'==b.command)f.publish(a);else if('WEBVIEW_INVOKE'==b.command){const a=b.data.api;'initReady'==a&&this.initReady();const c=b.data.callbackID;this.props.jssdkActions.exec(b.data,this.webviewID).then((a)=>{a&&f.invokeCallback(this.webviewID,c,a)})}else'PULLDOWN_REFRESH'==b.command&&l.triggerOnEvent({eventName:'onPullDownRefresh',data:{},webviewID:this.webviewID})}initReady(){setTimeout(()=>{b()},20);const a=-1==this.props.info.tabbarIndex;var b=()=>{a?(this.animateWebviewTransition('enter'),this.props.simulatorActions.setAppRoute({status:'done'})):(this.setState({zIndex:this.props.show?2:1}),this.props.simulatorActions.setAppRoute({status:'done'})),setTimeout(()=>{this.tryCaptureScreenForBackground()},2e3)}}tryCaptureScreenForBackground(){if(!global.online){this._captureTryCount||(this._captureTryCount=0),this._captureTryCount++;try{this.props.appConfig.entryPagePath.match(/^(.+)\.html$/)[1]===this.props.info.pathName&&this.webview.captureVisibleRegion({format:'png'},async(a)=>{try{const b=await w({taskName:'isSameColorImage',config:{type:'dataURI',format:'png'},dataStr:a,maxTimeout:60000,useBackup:!1,downgrade:!0});if(b.error)throw new Error(b.error);if(b.same){if(5<this._captureTryCount)return;setTimeout(this.tryCaptureScreenForBackground.bind(this),2e3)}else this.props.projectActions.updateProjectCover({image:a})}catch(a){i.info('process capture screen failure with err: '+a.toString())}})}catch(a){i.info('chrome capture screen failure with err: '+a.toString())}}}initDebuggeeEvent(){global.useChromeRemoteDebugProtocal&&(this.webview.onDebuggeeEvent=(a,b,c={})=>{if('DOM.inlineStyleInvalidated'!==b&&'DOM.characterDataModified'!==b&&('Overlay.nodeHighlightRequested'!==b||'Overlay.nodeHighlightRequested'!==J.method||c.nodeId!==J.nodeId)){J='Overlay.nodeHighlightRequested'===b?{method:b,nodeId:c.nodeId}:{};({"DOM.documentUpdated":!0,"DOM.childNodeCountUpdated":!0,"DOM.setChildNodes":!0,"DOM.childNodeRemoved":!0,"DOM.childNodeInserted":!0,"DOM.attributeRemoved":!0,"DOM.attributeModified":!0,"Overlay.inspectNodeRequested":!0,"DOM.nodeHighlightRequested":!0,"Overlay.nodeHighlightRequested":!0})[b]&&h.send({command:'ON_EVENT',data:{debuggee:a,method:b,params:c}})}}),this.webview.onDebuggeeDetach=(a)=>{this.props.simulatorActions.setDebuggee(a,this.webviewID,!1)},this.webview.onDebuggeeAttach=(a)=>{this.props.simulatorActions.setDebuggee(a,this.webviewID,!0),this.reload()}}initEvent(){const a=this.webview;a.on('consolemessage',this._consolemessage),a.on('dialog',(a)=>{const b=a.messageType||'',c=a.messageText,d=a.dialog;'alert'===b?'DOCUMENT_READY'==c?(this.documentReady=!0,this.loadPage()):0==c.indexOf('GET_WEBVIEW_SCROLL_Y')?this.webviewScrollY=c.replace('GET_WEBVIEW_SCROLL_Y',''):0==c.indexOf('\u8FDB\u5165\u5BA2\u670D\u4F1A\u8BDD')&&this.props.simulatorActions.setConfirm({show:!0,content:c,showCancel:!1,confirmText:q.config.RETURN}):'confirm'===b?a.preventDefault():'prompt'===b&&(c===o.GET_MESSAGE_TOKEN?a.dialog.ok(z.getToken()):a.dialog.ok(''))}),a.on('mouseleave',()=>{a.setEmulationTouch(!1)}),a.on('mouseenter',()=>{this.props.wxmlInspected||a.setEmulationTouch(!0)}),this.initRequestListener(a)}initRequestListener(a){a.request;this.webview.onRequestErrorOccurred=(a)=>{const{type:b}=a;'script'===b||'main_frame'===b||'net::ERR_ABORTED'===a.error||'image'==a.type&&`http://127.0.0.1:${global.proxyPort}/__pageframe__/${this.props.info.pathName}`==a.url||p.display({command:o.DISPLAY_ERROR,data:{error:{code:v.WEBVIEW_NETWORK_ERROR,details:a}}})},this.webview.onBeforeRequest=(a)=>{const b=a.url;if(0==b.indexOf(`http://127.0.0.1:${global.proxyPort}/`)){const a=c.parse(b),d=a.pathname.replace(/^\//,'');if('aboutblank'!=d&&'favicon.ico'!=d&&!/^__pageframe__\//.test(d)&&0!==d.indexOf(D)&&0!==d.indexOf(E)&&0!==d.indexOf(F)&&0!==d.indexOf('experience'))return{redirectUrl:`http://127.0.0.1:${global.proxyPort}/__pageframe__/${d}`}}else{if(A.test(b)||B.test(b)||C.test(b))return{redirectUrl:b.replace(/^https?:\/\//,`$&127.0.0.1:${global.proxyPort}/`)};if(/^file:\/\//i.test(b))return{cancel:!0}}},this.webview.onRequestBeforeSendHeaders=(a)=>{const b=a.url;if(0!=b.indexOf(`http://127.0.0.1:${global.proxyPort}/`)&&!/favicon\.ico$/.test(b)&&'none'==this.props.networkType)return p.display({command:o.DISPLAY_ERROR,data:{title:q.config.NO_NETWORK_TIPS_TITLE,error:{message:q.config.NO_NETWORK_TIPS_CONTENT.format(b)}}}),{cancel:!0};if(0==b.indexOf(`http://127.0.0.1:${global.proxyPort}/__pageframe__`)){const a=c.parse(b),d=a.pathname.replace(/^\/__pageframe__\//,''),e=s.checkIsInSubPackage(this.props.appConfig,d),f=s.checkIsInSubPackage(this.props.appConfig,this.props.info.pathName);if(e&&e!=f)return p.display({command:o.DISPLAY_ERROR,data:{title:q.config.RESOURCE_RELATIVE_TIPS_TITLE,error:{message:q.config.RESOURCE_RELATIVE_TIPS_CONTENT.format(d)}}}),{cancel:!0}}const d=a.requestHeaders||[],e=d.findIndex((a)=>'cookie'===a.name.toLowerCase());d.splice(e,1);for(let b=0;b<d.length;++b)if('Referer'===d[b].name){const a=n.getProjectAppID();d[b].value=`https://servicewechat.com/${a}/devtools/page-frame.html`}return{requestHeaders:a.requestHeaders}},this.webview.onRequestCompleted=(a)=>{const{type:b,statusCode:c}=a;if('script'!==b&&'main_frame'!==b&&400<=c){if('image'==a.type&&`http://127.0.0.1:${global.proxyPort}/__pageframe__/${this.props.info.pathName}`==a.url)return;p.display({command:o.DISPLAY_ERROR,data:{error:{code:v.WEBVIEW_NETWORK_ERROR,details:a}}})}}}render(){const b=this.props,c={position:'absolute',width:b.width,height:b.height,top:b.top,zIndex:this.state.zIndex},e=b.info.htmlwebviewInfo;return a.createElement('div',{className:'webview',ref:(a)=>this.container=a,style:c},e?a.createElement(d,{webviewID:b.info.id,htmlId:e.htmlId,url:e.src||'',originUrl:e.originUrl||'',cangoback:e.cangoback,width:e.position&&e.position.width||b.width,height:e.position&&e.position.height||b.height,left:e.position&&e.position.left||0,top:e.position&&e.position.top||0}):null)}}K.contextTypes={isPopup:b.bool,window:b.object},module.exports=K}(require('lazyload'),require);