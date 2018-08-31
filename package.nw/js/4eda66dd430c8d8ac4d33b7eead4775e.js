'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('url'),b=require('querystring'),c=require('react'),d=require('./116381854e0f6d40c39e7d1251aba7a8.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),g=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),h=require('./84705760a8692a44a583377e7f3f3b00.js'),i=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),j=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),k=require('./1bd2563d13db26950ae47494b2c34454.js'),l=require('./common/locales/index.js'),m=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),n=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),p=require('./ff946754202ecf377034d29daac7c8d9.js'),{validType:q,tokenManager:r}=require('./dc244a5ba483ad6e0acd267d3b91b282.js'),{connect:s}=require('react-redux'),t=300;class u extends c.Component{constructor(a){super(a),this._onMessage=this.onMessage.bind(this),this.resetImageSizeControl(),this.tapEventMap={}}componentDidMount(){d.register(this._onMessage),this.initWebview()}componentWillReceiveProps(a){(a.height!=this.props.height||a.width!=this.props.width)&&setTimeout(()=>{this.setWidgetOffset()}),(a.compileCommand!=this.props.compileCommand||a.device!=this.props.device)&&setTimeout(()=>{this.reload()}),a.tapCallback!=this.props.tapCallback&&(this.tapEventMap[a.tapCallback.eventId]&&!a.tapCallback.res&&setTimeout(()=>{this.widgetJumpToWeapp()}),delete this.tapEventMap[a.tapCallback.eventId])}componentWillUnmount(){this.webview&&this.webview.remove(),d.unRegister(this._onMessage)}onMessage(a){const{command:b,data:c}=a;if('ON_CANVAS_TAP'==b){const a=`${Date.now}_${Math.random()}`;this.tapEventMap[a]=!0,d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onTap',data:_extends({},c,{eventId:a})}})}}widgetJumpToWeapp(){this.props.jumpUrl&&this.props.setConfirmInfo({show:!0,content:l.config.WIDGET_IF_WANT_TO_JUMP,callback:(a)=>{a&&this.props.widgetJumpToWeapp({origin:o.COMPILE_ORIGIN.SEARCH_WIDGET,condiction:{pathName:this.props.jumpUrl,query:this.props.jumpQuery,scene:1005}})}})}resetImageSizeControl(){this.imageSizeControl={totalSize:0,timestamp:Date.now()}}setWidgetOffset(){const a=this.props;let b={};const c=a.height/a.deviceScale,e=a.width/a.deviceScale;a.compileType==f.search?b={width:e,height:c,style:'width:100%;height:100%'}:a.compileType==f.conversation&&(b={height:c,width:e,style:'width:100%;height:100%'}),this.webview&&this.webview.setAttribute('style',`position:absolute;height:${c}px;width:${e}px`),d.send({command:'SET_CANVAS',data:b})}setUserAgentOverride(){const a=r.getSessionToken(q.UA_TOKEN);let b=this.props.ua.replace('{{webviewID}}',this.props.id);b+=` widget port/${global.messageCenterPort} token/${a}`,this.webview.setUserAgentOverride(b)}initWebview(){if(this.webview)return void this.webview.remove();const a=this.props.id,b=this.webview=document.createElement('webview');b.className=`simulator-bd-webview_body webviewbody${a}`,b.setAttribute('partition','persist:simulator');const c=this.props.height/this.props.deviceScale,d=this.props.width/this.props.deviceScale;b.setAttribute('style',`position:absolute;height:${c}px;width:${d}px`),this.container.appendChild(b),this.setUserAgentOverride(),this.initEvent(),this.reload()}initEvent(){const a=this.webview;global.appConfig.isDev||global.appConfig.isGamma||a.contextMenus.onShow.addListener((a)=>{a.preventDefault()});const b=a.request;b.onBeforeRequest.addListener((a)=>{if(/^file:\/\//i.test(a.url))return{cancel:!0}},{urls:['<all_urls>']},['blocking']),b.onBeforeRequest.addListener((a)=>{if(/^file:\/\//i.test(a.url))return{cancel:!0}},{urls:['<all_urls>']},['blocking']),b.onErrorOccurred.addListener((a)=>{const{type:b}=a;'script'===b||'main_frame'===b||'net::ERR_ABORTED'===a.error||this.props.setWidget({errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:a.error}})},{urls:['<all_urls>']}),b.onBeforeSendHeaders.addListener((a)=>{const b=this.props.project;if(b){const c=a.requestHeaders||[],d=c.findIndex((a)=>'cookie'===a.name.toLowerCase());c.splice(d,1);for(let a=0;a<c.length;++a)if('Referer'===c[a].name){let d=b.appid;b.platform&&b.ext_appid&&(d=b.ext_appid),c[a].value=`https://servicewechat.com/${d}/devtools/page-frame.html`}return{requestHeaders:a.requestHeaders}}},{urls:['<all_urls>']},['blocking','requestHeaders']),b.onCompleted.addListener((a)=>{const{type:b,statusCode:c}=a;if('script'!==b&&'main_frame'!==b&&400<=c){const b=a.url;this.props.setWidget({errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:`404: ${b.replace(this.baseURL,'')}`}})}},{urls:['<all_urls>']},['responseHeaders']),a.addEventListener('dialog',(a)=>{const b=a.messageType||'',c=a.messageText,d=a.dialog;'alert'===b?'DOCUMENT_READY'==c&&this.onDocumentReady():'confirm'===b?a.preventDefault():'prompt'===b&&c===o.GET_MESSAGE_TOKEN&&a.dialog.ok(p.getToken())}),a.request.onHeadersReceived.addListener((a)=>{const{type:b}=a;if('image'===b){const b=a.url;if(i.weappLocalIdRegular.test(b)||i.weappWidgetPageRegular.test(b))return{};if('wifi'!=this.props.networkType&&!this.imageSizeControl[b]){let c=0;a.responseHeaders.forEach((a)=>{'content-length'==a.name.toLowerCase()&&(c=parseInt(a.value))});const d=this.imageSizeControl.totalSize+c;if(d>1024*t)return this.props.setWidget({errmsg:{group:l.config.WIDGET_IMAGE_SIZE_ERROR,type:'error',msg:l.config.WIDGET_IMAGE_SIZE_ERROR_TIP.format(t)}}),{cancel:!0};this.imageSizeControl.totalSize+=c,this.imageSizeControl[b]=!0}}return{}},{urls:['<all_urls>']},['blocking','responseHeaders'])}reload(){this.props.project.attr.gameApp?k(this.props.project).then((a)=>{const b=e.getWidgetDirectory(this.props.compileType,a);this.baseURL=`http://127.0.0.1:${global.proxyPort}/widgetwebview/${b}`,this.webview.src=`${this.baseURL}/widgetPage.html`,this.resetImageSizeControl()}):j(this.props.project).then((a)=>{const b=e.getWidgetDirectory(this.props.compileType,a);this.baseURL=`http://127.0.0.1:${global.proxyPort}/widgetwebview/${b}`,this.webview.src=`${this.baseURL}/widgetPage.html`,this.resetImageSizeControl()})}onDocumentReady(){const c=this.props,e=c.condiction;if(c.compileType==f.conversation){const a=e.pathName||'';let f=a.split('?');f=b.parse(f[1]||'',null,null,{decodeURIComponent:(a)=>a}),d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onCanvasInsert',data:{title:e.title||'',cacheKey:e.cachekey||'',path:a.split('?')[0],query:f,width:c.width,height:c.height}}}),this.setWidgetOffset(),this.props.setWidget({ready:!0})}else if(c.compileType==f.search){const f=e.service&&e.service.box_type,g=e.query||'',j=e.boxQI||'';h.getInitData({type:f,query:g,boxQI:j,debugUrl:e.debugUrl}).then((e)=>{let f='',g='',h='',k='',m={};i.default_search_widget_radio;let n=c.height,o=c.width;try{const d=e.resultlist[0].providerlist[0].providerinfo;if(f=d.wxaData,g=d.widgetData,n=d.height/d.width*c.width,d.jumpUrl){const c=a.parse(d.jumpUrl);k=c.pathname.replace(/^\//,'').replace(/\.html$/,''),m=b.parse(c.query,null,null,{decodeURIComponent:(a)=>a}),m.widgetData=encodeURIComponent(g)}h=m.wxOpenId||''}catch(a){f='',g='',h='',o=c.width,n=c.height}try{e.debug_info&&this.props.setWidget({errmsg:{group:l.config.WIDGET_SERVER_DEBUG,type:'info',msg:`${l.config.NETWORK_STATUS_CODES}: ${e.debug_info.status_code||''}
${l.config.RETURN}: ${e.debug_info.resp_data||''}
${l.config.TAKE_TIME}: ${e.debug_info.cost_time_ms||''}`}})}catch(a){}this.props.setWidget({ready:!0,height:n,wxaData:f,jumpUrl:k,jumpQuery:m}),this.setWidgetOffset(),d.toService({command:'APPSERVICE_ON_EVENT',data:{eventName:'onCanvasInsert',data:{query:{wxOpenId:h,widgetData:encodeURIComponent(g),wxParamData:encodeURIComponent(j)},width:o,height:Math.ceil(n)}}})}).catch((a)=>{this.props.setWidget({ready:!0,errmsg:{group:l.config.WIDGET_NETWORK_ERROR,type:'error',msg:l.config.WIDGET_GET_SEARCH_RESULT_ERROR.format(a)}})})}}render(){const a=this.props,b={height:a.height,width:a.width,position:'absolute'};return c.createElement('div',{className:'webview',ref:(a)=>this.container=a,style:b})}}module.exports=s((a)=>{var b=Math.floor;const c=a.toolbar.deviceInfo,d=a.project.current,g=d.compileType,h=e.getWidgetOffset(g,c);let{width:i,height:j}=h;const k=a.simulator.widget||{};g==f.search&&k.height&&(j=k.height);const l=d.condiction[g]||{},m=l.list[l.current]||{},n=a.toolbar.network.list[a.toolbar.network.current]||'wifi';return{compileCommand:a.simulator.compileCommand,device:c,deviceScale:a.toolbar.deviceScale,ua:c.ua||'',id:2e4,project:a.project.current,compileType:g,width:b(i),height:b(j),ready:k.ready,jumpUrl:k.jumpUrl||'',jumpQuery:k.jumpQuery||{},tapCallback:k.tapCallback,networkType:n,condiction:m}},(a)=>({setConfirmInfo:e.bindActionCreators(m.setConfirmInfo,a),setWidget:e.bindActionCreators(g.setWidget,a),widgetJumpToWeapp:e.bindActionCreators(g.widgetJumpToWeapp,a)}))(u)}(require('lazyload'),require);