'use strict';!function(require,directRequire){const a=require('./3a0e2a5a82dc34230808dd17fc084d06.js'),b=require('./a51f639a8b386bbcafdc6b8bb1c78580.js'),c=require('./dbf59194122bf3d143456959d86d6213.js'),d=require('./7d3d93a42c6f489b7c2275312107a2b9.js'),{wxConfigPlaceholder:e}=require('./d9ce5316cc172b6017fdd2399a91117a.js');module.exports={generate:async function(a,d){const f=await c(a);let g=await b(a,d);return g=g.replace(e,()=>{const a=encodeURIComponent(JSON.stringify(f)).replace(/\"/g,'\\"');return`<script>var __wxConfig= JSON.parse(decodeURIComponent("${a}"))</script>`}),g},getFile:a,getSubContext:d}}(require('lazyload'),require);