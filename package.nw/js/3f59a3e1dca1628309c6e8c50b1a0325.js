'use strict';!function(require,directRequire){const a=require('./15ba1827c7f6564a45df6bd44da3a977.js'),b=require('./3bfffbe88b3d923921f851c0697974fe.js'),c=require('./f171257bbcaef547a3cf27266ccb0db2.js'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./common/locales/index.js');module.exports={getUserAutoFillData:async function(d,e){const f=e.args,g={appid:b.getProjectAppID(),get_all_info:!1,source:1,user_info_list:f.fields},{body:h}=await a({url:`${c.getUserAutoFillData}`,method:'post',body:JSON.stringify(g),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`,userData:h.user_info_json||'{}',authStatus:h.auth_status,authInfo:h.auth_info,authGroupList:h.auth_group_list}},setUserAutoFillData:async function(d,e){const f={appid:b.getProjectAppID(),source:1,user_info_json:args.dataList},{body:g}=await a({url:`${c.setUserAutoFillData}`,method:'post',body:JSON.stringify(f),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`}},requestAuthUserAutoFillData:async function(f,g,h){const i=g.args,j=g.callbackID,k=g.api;f({type:d.SIMULATOR_SET_CONFIRM,data:{show:!0,title:e.config.ALLOW_AUTO_FILLING,content:i.wording,subList:i.authGroupList,callback:async(e)=>{const g={appid:b.getProjectAppID(),source:1,auth_info_list:i.fields||[],auth_status:i.authStatus,user_confirm:e},{body:l}=await a({url:`${c.requestAuthUserAutoFillData}`,method:'post',body:JSON.stringify(g),needToken:1,needAppID:1}).then(()=>{f({type:d.JSSDK_CALLBACK,webviewID:h,callbackID:j,res:{errMsg:`${k}:ok`}})}).catch((a)=>{f({type:d.JSSDK_CALLBACK,webviewID:h,callbackID:j,res:{errMsg:`${k}:fail ${a}`}})})}}})},deleteUserAutoFillData:async function(d,e){const f=e.args,g={appid:b.getProjectAppID(),source:1,group_key:f.groupKey,group_id:f.groupId},{body:h}=await a({url:`${c.deleteUserAutoFillData}`,method:'post',body:JSON.stringify(g),needToken:1,needAppID:1});return{errMsg:`${e.api}:ok`}}}}(require('lazyload'),require);