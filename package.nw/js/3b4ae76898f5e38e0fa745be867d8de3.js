'use strict';!function(require,directRequire){async function a(){const{body:a}=await b({url:c.syncBBSLogConfig,needToken:1});if(a){const b=a.config_list||[],c=[];for(const a of b)try{a.logid&&a.config&&c.push({logid:a.logid,config:JSON.parse(a.config)})}catch(b){d.error(`sync bbs log config parse error for logid ${a.logid}`)}e.dispatch(f.updateBBSLogConfig(c))}}const b=require('./15ba1827c7f6564a45df6bd44da3a977.js'),c=require('./f171257bbcaef547a3cf27266ccb0db2.js'),d=require('./72653d4b93cdd7443296229431a7aa9a.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./3b66d845db4d098b7a16cb0357f5c072.js');let g=null;module.exports={sync:a,startSync:function(){global.online||global.isDevWindow||(a().catch((a)=>{d.error(`start sync error: ${a}`)}),g=setInterval(()=>{a().catch((a)=>{d.error(`start sync error: ${a}`)})},600000))},stopSync:function(){clearInterval(g)}}}(require('lazyload'),require);