'use strict';!function(require,directRequire){async function a(a,b){let c,d=2;return c=a.attr&&a.attr.gameApp?await p(a):await o(a),d=c.subPackages?b.setting.MaxSubpackageFullCodeSize||b.setting.MaxCodeSize:b.setting.MaxCodeSize,d}async function b(b){let d,i,o;b.tempProject?(d=b.tempProject.attr,i=b.tempProject):(d=r.getCurrentConfig(),i=r.getCurrent());try{o=await a(i,d)}catch(a){try{o=d.setting.MaxCodeSize}catch(a){o=2}}const p=1024*o,s=b.onProgressUpdate||y,x=b.onFilesMissing||y;s('buildstart',q.config.COMPILING_CODE);const A=await l(i,{noCompile:!0,onProgressUpdate:s,onFilesIgnored:b.onFilesIgnored});s('globfiles',q.config.COMPARING_FILE_LIST);const B=['**/.git/**','.git/**/*','**/.svn/**','.svn/**/*','.DS_Store','**/.DS_Store'];'plugin'===i.compileType&&B.push('doc/**/*');let C=await z('**',{nodir:!0,ignore:B,nosort:!0,strict:!1,silent:!0,cwd:A,absolute:!1,mark:!0,dot:!0});const D=(i.packOptions||{}).ignore||[],E=[];for(const a of C)w.isFileIgnored(a,D)?c.unlinkSync(e.join(A,a)):E.push(a);C=E;let F=i.projectpath;'plugin'===i.compileType?F=i.projectpath:i.miniprogramRoot&&(F=e.posix.join(i.projectpath,i.miniprogramRoot));const G=await z('**',{nodir:!0,ignore:B,nosort:!0,strict:!1,silent:!0,cwd:F,absolute:!1,mark:!0,dot:!0}),H=G.filter((a)=>0>C.findIndex((b)=>b===a))||[],I=(await z('**/node_modules/',{nosort:!0,strict:!1,silent:!0,cwd:F,absolute:!1,mark:!0,dot:!0}))||[];H.push(...I),x(H),s('buildend',q.config.CODE_COMPILATION_COMPLETED),s('packstart',q.config.PACKING);const J=e.join(t,`${+new Date}.wx`),K=await m(A,J);c.unlink(J,()=>{}),s('packend',q.config.PACK_COMPLETED),s('uploadstart',q.config.UPLOADING);const L=K.data,M=K.pDestPath;g(A,()=>{});const N=parseInt(K.totalSize/1024);if(N>p){const a=new Error(q.config.CODE_SIZE_EXCEED.format([N,p]));throw a.code=k.CODE_SIZE_EXCEED,a}let O;const P=global.appConfig.isBeta;if(b.test){if(n[`last-up-test-${i.projectid}`]=N,O=P?`${j.testSourceNewFeatureURL}?gzip=1`:`${j.testSourceURL}?gzip=1`,b.remoteDebug){let a=1;'ios'===b.remoteDebugLocal?a=2:'android'===b.remoteDebugLocal&&(a=3);const c=b.remoteProxyPort||0,d=b.disableUrlCheck?1:0;O=`${j.testSourceURL}?gzip=1&open_remote=yes&remote_network_type=${a}&remote_proxy_port=${c}&disable_url_check=${d}&remote_support_compress_algo=1`}b.autoPreview&&!b.remoteDebug&&(O+='&hot_update=yes');const{page:a,query:c,searchQuery:d,boxQI:e}=b;if(a){const b=encodeURIComponent(`${a}?${c}`);O=`${O}&path=${b}`}if(i.attr.gameApp&&c){const a=encodeURIComponent(`?${c}`);O=`${O}&path=${a}`}if(d&&(O=`${O}&search_query=${encodeURIComponent(d)}`),e){O=`${O}&search_extInfo=${encodeURIComponent(JSON.stringify({box_qi:e}))}`}}else{n[`last-up-load-${i.projectid}`]=N;const a=encodeURIComponent(b.desc),c=encodeURIComponent(b.version),d=encodeURIComponent(b.uuid);O=P?`${j.commitSourceNewFeatureURL}?user-version=${c}&user-desc=${a}&uuid=${d}&gzip=1`:`${j.commitSourceURL}?user-version=${c}&user-desc=${a}&uuid=${d}&gzip=1`}const Q=f.gzipSync(L),R=1*new Date,S=b.tempProject?{url:`${O}&appid=${b.tempProject.appid}&devplugin=${i.compileType==v.plugin?1:0}`,method:'post',body:Q,needToken:1}:{url:`${O}&devplugin=${i.compileType==v.plugin?1:0}`,method:'post',body:Q,needToken:1,needAppID:1};b.tempProject&&b.tempProject.attr&&(b.tempProject.attr.platform&&(S.url+='&platform=1'),b.tempProject.attr.platform&&b.tempProject.attr.extInfo&&(S.url+=`&ext_appid=${b.tempProject.attr.extInfo.appid||''}`));const{body:T}=await h(S),U=1*new Date;return u(b.test?'client_test_source_time':'client_commit_source_time',i.appid,`${U-R}`),s('uploadend',q.config.UPLOAD_COMPLETED),T}const c=require('fs'),d=require('glob'),e=require('path'),f=require('zlib'),g=require('rmdir'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./92320c1386e6db6a6f2556736a9bc280.js'),j=require('./f171257bbcaef547a3cf27266ccb0db2.js'),k=require('./949d8235c744ced2a80121e4dba34c28.js'),l=require('./911222a6723da8db7ca8a8e3689591e1.js'),m=require('./e5fa35c3c8e81bc6466b4b8eb436113b.js'),n=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),o=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),p=require('./1bd2563d13db26950ae47494b2c34454.js'),q=require('./common/locales/index.js'),r=require('./3bfffbe88b3d923921f851c0697974fe.js'),s=require('./72653d4b93cdd7443296229431a7aa9a.js'),t=i.Weappdest,u=require('./da7c31daaf542cf1796023d8e344b98a.js'),v=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),w=require('./1c8a8c710417d102ab574145dc51b4b0.js'),x=require('./a932aac82ac84fc9c6c92194bd88204e.js'),y=()=>{},z=function(a,b){return new Promise((c)=>{d(a,b,(a,b)=>{a?c([]):c(b)})})};module.exports=async function(a){return x.enqueueBuildTask(b.bind(null,a),x.buildType.upload)}}(require('lazyload'),require);