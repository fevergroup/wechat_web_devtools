'use strict';!function(require,directRequire){const a=require('path'),b=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),c=require('./d260ebf687a29f24aed49f66b233ab7d.js'),d=require('./709f7f8328edb932b1169de8b7e694dd.js'),e=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./e2bb00408a93b45ef5e6ad32f05e850c.js'),h=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');module.exports=async function(a,c={}){await h.init(a);const i=h.CACHE_KEYS.JSON_WXAPPCODE_PAGEFRAME;let j='main';const{app:k,page:l}=c,m=await b(a);let n,o='$gwx';if(!k){if(n=f.checkIsInSubPackage(m,l),!n)return[];j=`sub_${n.root}`,o=`$${new Buffer(n.root).toString('hex')}`}let p=h.get(i,j);if(!p){const b=await e.getFileList(a,m,n),c=[];for(let e=0,f=b.length;e<f;e++){const f=b[e],h=f.replace(/\"/g,'\\"'),i=await g(a,f);c.push(`__wxAppCode__["${h}.json"]=${JSON.stringify(i)}`),c.push(`__wxAppCode__["${h}.wxml"]=${o}("./${h}.wxml")`);const j=await d(a,{page:f});j.page&&c.push(`__wxAppCode__["${h}.wxss"]=${j.page}`)}p=c,h.set(i,j,p)}return p}}(require('lazyload'),require);