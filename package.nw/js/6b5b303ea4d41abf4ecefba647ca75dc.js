'use strict';!function(require,directRequire){const a=require('path'),b=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),c=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');module.exports=async function(a){await c.init(a);const d=c.CACHE_KEYS.JS_PLUGINCODE_PAGEFRAME;let e=c.get(d);if(e)return e;const f=await b(a),g=[];if(f.mainPlugins){for(const a in f.mainPlugins){const{provider:b,version:c}=f.mainPlugins[a];g.push(`<script src="__plugin__/${b}/${c}/pageframe.js"></script>`)}e=g.join('\n'),c.set(d,e)}return e}}(require('lazyload'),require);