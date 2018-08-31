'use strict';!function(require,directRequire){function a(a,b,c,d){c=0<c?c:1;const f=e(a,b,c);return`${d}\n${f}`}function b(a,b){const e=[];let g='subPackages';if(b.subpackages&&(g='subpackages',b.subPackages=b.subpackages,delete b.subpackages),b.subPackages){if('array'!=f.getType(b.subPackages))return e.push(h.config.JSON_CONTENT_SHOULD_BE.format([g,'Array'])),e;const i={},j={};b.subPackages.forEach((b,k)=>{if('undefined'!=typeof b.name&&('string'!=f.getType(b.name)&&e.push(h.config.JSON_CONTENT_SHOULD_BE.format([`${g}[${k}].name`,'String'])),i[b.name]&&e.push(h.config.JSON_CONTENT_EXISTED.format(`${g}[${k}].name`)),i[b.name]=!0),'string'!=f.getType(b.root))return void e.push(h.config.JSON_CONTENT_SHOULD_BE.format([`${g}[${k}].root`,'String']));if(0==b.root.indexOf('.'))return void e.push(h.config.JSON_SHOULD_NOT_START_WITH.format([`${g}[${k}].root`,'.']));b.root=f.normalizePath('/'+b.root),/\.js$/.test(b.root)||(b.root=f.normalizePath(b.root+'/')),j[b.root]&&e.push(h.config.JSON_CONTENT_EXISTED.format(`${g}[${k}].root`)),j[b.root]=!0;const l=c.join(a,b.root);if(!d.existsSync(l))e.push(h.config.JSON_CONTENT_NOT_FOUND.format(`${g}[${k}].root`));else{const a=d.statSync(l);a.isDirectory()&&(!/\/$/.test(b.root)&&(b.root+='/'),!d.existsSync(c.join(l,'./game.js'))&&e.push(h.config.JSON_CONTENT_NOT_FOUND.format(`${l}/game.js`)))}})}if(0<e.length){const a=new Error(e.join('\n'));throw a.code=j.GAME_JSON_CONTENT_ERR,a}}const c=require('path'),d=require('fs'),e=require('babel-code-frame'),f=require('./84b183688a46c9e2626d3e6f83365e13.js'),g=require('./libs/jsonlint.js').parser,h=require('./common/locales/index.js'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js'),j=require('./2bc7cd511c5a7e0e403126d943b041b1.js'),k=require('./9fdd4ac31a05c27355910f0d74accd4c.js');g.parseError=g.lexer.parseError=function(a,b){throw b},module.exports=async function(e){const l=await i(e),m=l.srcPath,n=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),o='game.json';let p='';try{p=l.getFile(o)}catch(a){p='';const b=new Error(a.message);throw b.code=j.GAME_JSON_READ_ERR,b}let q={};try{q=g.parse(p),q.configFrom=o}catch(b){const c=`locales.config.COMPILE_ERROR_POSTFIX.format('game.json'): Expecting ${b.expected}, got ${b.token}`,d=a(p,b.line,b.loc.first_column,c),e=new Error(d);throw e.code=j.GAME_JSON_PARSE_ERR,e}const r=q.deviceOrientation;if(r)if('string'!=f.getType(r)){const a=new Error(h.config.JSON_CONTENT_SHOULD_BE.format(['deviceOrientation',h.config.STRING_TYPE]));throw a.code=j.GAME_JSON_CONTENT_ERR,a}else if('portrait'!=r&&'landscape'!=r){const a=new Error(h.config.JSON_CONTENT_SHOULD_BE.format(['deviceOrientation',`"portrait" ${h.config.OR} "landscape"`]));throw a.code=j.GAME_JSON_CONTENT_ERR,a}if(q.networkTimeout&&'object'!=f.getType(q.networkTimeout)){const a=new Error(h.config.JSON_CONTENT_SHOULD_BE.format(['networkTimeout','Object']));throw a.code=j.GAME_JSON_CONTENT_ERR,a}const s=q.openDataContext;if(q.openDataContext||q.subContext){let a;if(a=(q.openDataContext||q.subContext).replace('./',''),/\/$/.test(a)||(a=`${a}/`),'/'===a||'./'===a||0===a.indexOf('.')){const a=new Error(h.config.DIRECTORY_SETTING_NOT_LEGAL.format('subContext'));throw a.code=j.GAME_SUBCONTEXT_ERR,a}const b=c.join(a,s?'index.js':'sub.js');try{l.getFile(b)}catch(a){const b=new Error(a.message);throw b.code=j.GAME_SUBJS_NOT_FOUND,b}s?(q.openDataContext=a,q.subContext=a):q.subContext=a}const t=e.compileType;if(t==k.conversation||t==k.search){const a=q.widgets;let b,g='';if(!a)b=new Error(h.config.JSON_WIDGETS_EMPTY.format('game.json'));else if('array'!=f.getType(a))b=new Error(h.config.JSON_WIDGETS_NOT_ARRAY.format('game.json'));else{const i=[];a.forEach((a,b)=>{if('object'!=f.getType(a))i.push(h.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(['game.json',b]));else if('conversation'!=a.type&&'search'!=a.type)i.push(h.config.JSON_WIDGETS_TYPE_INVALID.format(['game.json',b,'conversation\u3001search']));else if(!a.path||'string'!=f.getType(a.path))i.push(h.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['game.json',b]));else if(!d.existsSync(c.join(m,a.path)))i.push(h.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['game.json',b]));else{const e=d.statSync(c.join(m,a.path));e.isDirectory()?!d.existsSync(c.join(m,a.path,'widget.js'))&&i.push(h.config.JSON_WIDGETS_JS_NOT_FOUND.format(['game.json',b,'widget.js'])):i.push(h.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(['game.json',b]))}g||a.type!=e.compileType||(g=a.path)}),g||i.push(h.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(['game.json',e.compileType])),0<i.length&&(b=new Error(i.join('\n')))}if(b)throw b.code=j.GAME_JSON_CONTENT_ERR,b}return b(m,q),q}}(require('lazyload'),require);