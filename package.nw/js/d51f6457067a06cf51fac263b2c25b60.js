'use strict';!function(require,directRequire){const a=require('path'),b=require('react'),c=require('classnames'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),e=require('./ea653f45dc25181ca4f1b108175009b7.js'),f=require('./a8c87029da0fa06e986298d447ab0fe2.js'),g=require('./dca9191eced65b3831d60c02d8d487c2.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i=require('./3bfffbe88b3d923921f851c0697974fe.js'),j=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),k=require('./9a24eb4fb7a49d4dd24531943fc3c899.js'),l=require('./51a8f674caffc4c2fa2358314af90837.js'),m=require('./a78e6d6a87de1708226375ca4c320d76.js'),n=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),o=require('./ff946754202ecf377034d29daac7c8d9.js'),{connect:p}=require('react-redux');class q extends b.Component{constructor(a){super(a),this.syncDialogMap={},this.state={heigth:a.heigth}}componentDidMount(){this._onDevtoolsMessage=this.onDevtoolsMessage.bind(this),k.register(this._onDevtoolsMessage),this._onStorageMessage=this.onStorageMessage.bind(this),l.register(this._onStorageMessage),this.initWebview()}componentWillUnmount(){this.devtoolsview&&this.devtoolsview.detach(),k.unRegister(this._onDevtoolsMessage),l.unRegister(this._onStorageMessage)}componentWillReceiveProps(a){if((a.webview!=this.props.webview&&a.webview||a.webviewTs!=this.props.webviewTs)&&(clearTimeout(this.restartTimer),this.restartTimer=setTimeout(()=>{this.initWebview()})),a.screenWidth!=this.props.screenWidth||a.screenHeight!=this.props.screenHeight){const b=a.device;k.send({command:'SET_DEVICE',data:{width:a.screenWidth,height:a.screenHeight,deviceScaleFactor:parseFloat(b.dpr),mobile:!0,fitWindow:!1}})}a.storage!=this.props.storage&&l.send({command:'UPDATE_STORAGE',data:a.storage})}initWebview(){const a=this.props;let b=this.devtoolsview;if(!b){b=m.get('devtools',{width:a.screenWidth,height:a.screenHeight,dpr:a.device.dpr}),this.devtoolsview=b;const c=`${b.originUserAgent} gameservicedevtools port/${global.messageCenterPort}  ${this.props.popup?'popup':''} ${global.isSimple?'simple':''}`;b.setUserAgentOverride(c),b.setAttribute('style','height:100%;width:100%;position:relative;display:block'),b.attach(this.container)}a.webview&&this.showDevTools(a.webview)}onStorageMessage(a){const{command:b,data:c}=a;'EXEC_STORAGE_SDK'==b?this.props.assdkActions.exec(c):'STORAGE_PANNEL_SHOW'==b?(l.ready=!0,this.props.assdkActions.exec({api:'getStorage',args:{},callbackID:-1})):'STORAGE_PANNEL_HIDE'==b&&(l.ready=!1)}onDevtoolsMessage(a){if(!('CLICK'===a.command))'Button.popup'===a.command&&this.props.windowActions.setDebuggerWindow({popup:!this.props.popup});else if(this.devtoolsview){const a=new UIEvent('click',{bubbles:!0});this.devtoolsview._webview.dispatchEvent(a)}}showDevTools(a){const b=this.devtoolsview;if(!b||!a)return;b.offAll(),this.initEvent(b);const c=()=>{b.off('contentload',c),k.ready=!0;const a=this.props.device;k.send({command:'SET_DEVICE',data:{width:this.props.screenWidth,height:this.props.screenHeight,deviceScaleFactor:parseFloat(a.dpr),mobile:!0,fitWindow:!1}})};b.on('contentload',c);const d=()=>{(()=>{b.off('loadcommit',d),a.attached&&a.showDevTools(!0,this.devtoolsview._webview)})()};b.on('loadcommit',d),b.src='about:blank'}initEvent(a){a.on('exit',(a)=>{('abnormal'===a.reason||'crash'===a.reason||'killed'===a.reason)&&(this.devtoolsview.detach(),this.devtoolsview=void 0,setTimeout(()=>{this.initWebview()}))}),a.on('dialog',(a)=>{a.preventDefault();const b=a.messageType,c=a.messageText,d=a.dialog;'prompt'===b&&(c===n.GET_MESSAGE_TOKEN?a.dialog.ok(o.getToken()):a.dialog.ok(''))}),a.on('newwindow',function(a){a.preventDefault();let b=a.targetUrl;0===b.indexOf(`http://127.0.0.1:${global.proxyPort}/game/gamePage.html`)||`http://127.0.0.1:${global.proxyPort}/favicon.ico`===b||0===b.indexOf('ws://')||0===b.indexOf('wss://')||b&&('https://developers.google.com/web/tools/chrome-devtools/'===b&&(b='https://mp.weixin.qq.com/debug/wxadoc/dev/index.html'),0==b.indexOf('wxfile://')&&(b=b.replace('wxfile://','http://wxfile.open.weixin.qq.com/')),nw.Window.open(b,{width:799,height:799}))})}onResizeStop(a,b,c){this.props.windowActions.setDebuggerWindow({height:c})}render(){const a=this.props,d={height:a.height};return a.show&&!a.editorShow&&(d.flex='1'),b.createElement(e,{innerRef:(a)=>this.container=a,width:'100%',height:a.height,className:c('devtools',{"ui-invisible":!a.show}),style:d,topResizable:!0,onResizeStop:this.onResizeStop.bind(this)},b.createElement('div',{className:'ui-divider ui-divider-horizontal',style:{pointerEvents:'none'}}),b.createElement('div',{ref:(a)=>this.serviceContainer=a,style:{width:0,height:0}}))}}module.exports=p((a)=>{const b=a.toolbar.deviceInfo,c=a.project.current,d=a.simulator.game||{},e=a.simulator.orientation&&'landscape'==a.simulator.orientation.value;return{project:c,storage:c.storage&&c.storage.cache||{},editorShow:a.window.editor&&a.window.editor.show,show:a.window.debug.show,popup:a.window.debug.popup,webview:d.webview,webviewTs:d.webview&&d.webview.ts,screenWidth:e?b.screenHeight:b.screenWidth,screenHeight:e?b.screenWidth:b.screenHeight,device:b}},(a)=>({windowActions:d.bindActionCreators(f,a),assdkActions:d.bindActionCreators(g,a)}))(q)}(require('lazyload'),require);