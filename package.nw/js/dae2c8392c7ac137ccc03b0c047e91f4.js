'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a){const b=l.getUserInfo(),c=b&&b.openid?b.openid:'unknow',d=n.getState(),e=d.project.current.storage||{};let f={};if(e.openid==c)f=_extends({},e.cache);else{const b=`${d.project.current.hash}_${c}`,e=h.join(o.WeappStorage,`${b}.json`);try{f=JSON.parse(i.readFileSync(e,'utf8'))}catch(a){f={}}a({type:j.PROJECT_SET_STORAGE,data:{openid:c,cache:f}})}return p.send({command:'UPDATE_STORAGE',data:f}),f}function b(a,b){const c=l.getUserInfo(),d=c&&c.openid?c.openid:'unknow';a({type:j.PROJECT_SET_STORAGE,data:{openid:d,cache:b}}),p.send({command:'UPDATE_STORAGE',data:b})}async function c(b,c){const d=a(b),e=c.args,f=e.key,g=d[f];return void 0===g?{errMsg:`${c.api}:fail data not found`}:{errMsg:`${c.api}:ok`,data:g.data,dataType:g.dataType}}async function d(c,d){const e=a(c),f=k.getCurrentConfig(),g=d.args,h=g.key,i=g.data,j=g.dataType;e[h]={data:i,dataType:j};const l=f&&f.setting&&f.setting.MaxLocalstorageSize?f.setting.MaxLocalstorageSize:m.setting.MaxLocalstorageSize;return JSON.stringify(e).length>1024*(1024*l)?{errMsg:`${d.api}:fail exceed storage max size ${l}Mb`}:(b(c,e),{errMsg:`${d.api}:ok`})}async function e(a,c){return b(a,{}),{errMsg:`${c.api}:ok`}}async function f(c,d){const e=a(c),f=d.args,g=f.key;return delete e[g],b(c,e),{errMsg:`${d.api}:ok`}}async function g(b,c){const d=k.getCurrentConfig(),e=a(b),f={keys:Object.keys(e),currentSize:Math.ceil(JSON.stringify(e).length/1024)},g=d&&d.setting&&d.setting.MaxLocalstorageSize?d.setting.MaxLocalstorageSize:m.setting.MaxLocalstorageSize;return f.limitSize=1024*g,f.errMsg=`${c.api}:ok`,f}const h=require('path'),i=require('fs'),j=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),k=require('./3bfffbe88b3d923921f851c0697974fe.js'),l=require('./89ba85d67a88f7636d657c22b5d3e038.js'),m=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),n=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),o=require('./92320c1386e6db6a6f2556736a9bc280.js'),p=require('./51a8f674caffc4c2fa2358314af90837.js');module.exports={getStorage:c,clearStorage:e,setStorage:d,removeStorage:f,getStorageInfo:g,getStorageSync:c,setStorageSync:d,clearStorageSync:e,removeStorageSync:f,getStorageInfoSync:g}}(require('lazyload'),require);