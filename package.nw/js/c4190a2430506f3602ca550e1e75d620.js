'use strict';!function(require,directRequire){function a(a,b={}){try{const{webviewID:c,url:d,isFromSdkUpdate:e,redirectFromUrl:f}=b,g=a.simulator.webviewInfos[c];if(!g||!g.htmlwebviewInfo)return!0;const h=g.htmlwebviewInfo;if(e&&h.originUrl!=d)return!1;if(f&&h.originUrl!=f)return!1}catch(a){}return!0}const b=require('url'),c=require('querystring'),d=require('./822bc5aa1823c9aa222d9ffad72e7f17.js'),e=require('./f0b1e76146041102932a0ff6c1247619.js'),f=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),g=require('./common/locales/index.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./0b01a3ff1572567a994a0ceae64dfef3.js'),j=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),k=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),l=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),m=require('./2dfc6a3df6d6fc51266b293c8420e88b.js');module.exports={showDevtools:function(a){return{type:d.WEBDEBUGGER_SHOW_DEVTOOLS,webview:a}},setUrl:function(a){return{type:d.WEBDEBUGGER_SET_URL,url:a}},getA8Key:function(a){return(b)=>{e(a).then((c)=>{const e=c.baseresponse||{},h=e.errcode;if(h==f.NOT_LIMITS||h==f.NOT_LIMITS_QY){const a=l.parseCgiErrorCode(h,e.errmsg);return void(global.autoTest||b({type:d.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,confirmText:g.config.READ_DOCUMENTATION,content:a,callback:(a)=>{a&&nw.Shell.openExternal('https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140')}}}))}if(0!==h){const a=l.parseCgiErrorCode(h,e.errmsg);return void b({type:d.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,confirmText:g.config.AN_ERROR_OCCURRED,content:a}})}b({type:d.WEBDEBUGGER_SET_PURVIEW,data:{lastGetA8KeyUrl:a.url,purviewFormGetA8key:c.purviewFormGetA8key}});let i=c.resp_url;if(a.isSync||c.force_redirect||h==f.ILLEGAL_URL)return b({type:d.WEBDEBUGGER_SET_URL,url:i,from:a.from}),void b({type:d.WEBDEBUGGER_SET_ACT,data:'load'});const j=/\#wechat_redirect$/.test(a.url);j&&a.url.replace(/\#wechat_redirect$/,'')===i&&(i=i.replace(/\#wechat_redirect/,''),b({type:d.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,showCancel:!1,content:g.config.CGI_ERR_OAUTH_NOT_SUPPORT}}))}).catch((a)=>{b({type:d.WEBDEBUGGER_SET_CONFIRM,data:{show:!0,showCancel:!1,content:a}})})}},setAutoComplete:function(a){return{type:d.WEBDEBUGGER_SET_AUTOCOMPLETE,url:a}},setActions:function(a){return{type:d.WEBDEBUGGER_SET_ACT,data:a}},setFooter:function(a){return{type:d.WEBDEBUGGER_SET_FOOTER,data:a}},setShare:function(a){return{type:d.WEBDEBUGGER_SET_SHARE,data:a}},setJssdkCallback:function(a){return{type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:a}},hideCardView:function({callbackID:a,res:b,runtimeID:c}){return(e)=>{e({type:d.WEBDEBUGGER_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}}),a&&e({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:a,runtimeID:c,res:b}})}},batchAddCard:function({callbackID:a,list:b,runtimeID:c}){return(e)=>{const f=k.getState(),g=f.webdebugger||{},j=g.cardInfo||{},l=j.appid,m={url:`${i.batchAddCardURL}?isapp=1`,body:JSON.stringify({appid:l,acceptitem_list:b}),method:'post',needToken:1};h(m).then((f)=>{const g=f.body;let h=g.resp_list;h=h.map((a,c)=>{const d=b[c],e=JSON.parse(a.json_ret);return{cardId:d.card_id,cardExt:d.card_ext,code:e.encrypt_code,isSuccess:!0}}),e({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:a,runtimeID:c,res:{errMsg:'addCard:ok',cardList:h}}})}).catch((b)=>{e({type:d.WEBDEBUGGER_SET_JSSDKCALLBACK,data:{callbackID:a,runtimeID:c,res:{errMsg:`addCard:fail ${b}`}}})}),e({type:d.WEBDEBUGGER_SET_CARD_VIEW,data:{show:'none',cardInfo:[]}})}},clearAutoComplete:function(){return{type:d.WEBDEBUGGER_CLEAR_AUTOCOMPLETE}},setClickkey:function(a){return(b)=>{b({type:d.TOOLBAR_TOGGLE_CLICKKEY,clickKey:a}),b({type:d.WEBDEBUGGER_SET_CLICKKEY,data:a})}},setLeftBtn:function(a){return{type:d.WEBDEBUGGER_SET_LEFTBTN,data:a}},setTitle:function(a){return{type:d.WEBDEBUGGER_SET_TITLE,data:a}},setUrlComplete:function(a){return{type:d.WEBDEBUGGER_SET_URLCOMPLETE,data:a}},setConfirm:function(a){return{type:d.WEBDEBUGGER_SET_CONFIRM,data:a}},getWeappA8Key:function(h){return(i,k)=>{const n=k(),o=(n.project.current||{setting:{urlCheck:!0}}).setting.urlCheck,p=/^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2/.test(h.url);if(!o&&!p){m.display({command:j.DISPLAY_INFO,type:j.DISPLAY_TYPES.HINT_NO_URL_CHECK}),i({type:d.WEBDEBUGGER_SET_PURVIEW,data:{lastGetA8KeyUrl:h.url,purviewFormGetA8key:{}}});let a=h.url;if(h.isSync)return i({type:d.WEBDEBUGGER_SET_URL,url:a}),void i({type:d.SIMULATOR_UPDATE_HTMLWEBVIEW,data:{htmlId:h.htmlId,webviewID:h.webviewID,forceRedirect:0,src:a}});const b=/\#wechat_redirect$/.test(h.url);return b&&h.url.replace(/\#wechat_redirect$/,'')===a?(a=a.replace(/\#wechat_redirect/,''),void i({type:d.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:g.config.CGI_ERR_OAUTH_NOT_SUPPORT}})):void 0}h.isWeapp=!0,e(h).then((e)=>{const j=e.baseresponse||{},m=j.errcode,n=k();if(!a(n,h))return;if(m==f.NOT_LIMITS||m==f.NOT_LIMITS_QY){let a=l.parseCgiErrorCode(m,j.errmsg),e=h.url;if(p){const d=b.parse(e),f=c.parse(d.query);e=f.redirect_uri,e&&(a=`${a}, url:${e}`)}return void(global.autoTest||i({type:d.INFO_SET_CONFIRM,data:{show:!0,confirmText:g.config.READ_DOCUMENTATION,content:`${a}`,callback:(a)=>{a&&nw.Shell.openExternal('https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140')}}}))}i({type:d.WEBDEBUGGER_SET_PURVIEW,data:{lastGetA8KeyUrl:h.url,purviewFormGetA8key:e.purviewFormGetA8key}});let o=e.resp_url;if(h.isSync||e.force_redirect||m==f.ILLEGAL_URL)return i({type:d.WEBDEBUGGER_SET_URL,url:o}),void i({type:d.SIMULATOR_UPDATE_HTMLWEBVIEW,data:{htmlId:h.htmlId,webviewID:h.webviewID,forceRedirect:e.force_redirect||m==f.ILLEGAL_URL,src:o}});const q=/\#wechat_redirect$/.test(h.url);q&&h.url.replace(/\#wechat_redirect$/,'')===o&&(o=o.replace(/\#wechat_redirect/,''),i({type:d.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:g.config.CGI_ERR_OAUTH_NOT_SUPPORT}}))}).catch((a)=>{i({type:d.INFO_SET_CONFIRM,data:{show:!0,showCancel:!1,content:a}})})}}}}(require('lazyload'),require);