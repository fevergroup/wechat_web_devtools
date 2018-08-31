'use strict';!function(require,directRequire){function a(a){const b=window.atob(a),c=b.length,d=new Uint8Array(c);for(let e=0;e<c;e++)d[e]=b.charCodeAt(e);return d.buffer}function b(a){const b=new Buffer(a.byteLength),c=new Uint8Array(a);for(let d=0;d<b.length;++d)b[d]=c[d];return b}async function c(a,b){const c=b.args,d=c.tempFilePath,e=c.filePath,f=x.getFileStat(d);if(!f)return{errMsg:`${b.api}:fail file not found`};const g=s.getCurrentConfig(),h=g.setting.MaxFileStorageSize,i=s.getCurrent(),j=x.getSavedFileList(i),k=x.getUsrFileList(i);if(1024*(1024*h)<j.totalSize+k.totalSize+f.size)return{errMsg:`${b.api}:fail exceeded the maximum size of the file storage limit ${h}M`};let l;return!e||e.toLowerCase().startsWith(x.STORE_DATA_PATH)?l=x.saveStoreFile(i,d):e&&(l=x.saveUsrFile(i,d,e)),l.error?{errMsg:`${b.api}:fail ${l.reason}`}:{errMsg:`${b.api}:ok`,savedFilePath:l.savedFilePath}}async function d(a,b){const c=b.args,d=c.filePath,e=c.encoding,f=s.getCurrent(),g=x.readFile(f,d,e);if(g.error)return{errMsg:`${b.api}:fail ${g.reason}`};const h=g.fileData,i={errMsg:`${b.api}:ok`};return e?i.data=h.toString():(i.base64=h.toString('base64'),i.__cover={base64:'data'}),i}async function e(c,d){const e=d.args,f=e.filePath;let g=e.data||'';const h=e.encoding||'utf8',i=e.__dataisab;i?(g=a(g),g=b(g)):g=g;const j=s.getCurrent(),k=s.getCurrentConfig(),l=k.setting.MaxFileStorageSize,m=x.getSavedFileList(j),n=x.getUsrFileList(j);if(1024*(1024*l)<m.totalSize+n.totalSize+g.length)return{errMsg:`${d.api}:fail exceeded the maximum size of the file storage limit ${l}M`};const o=x.writeFile(j,f,g,h);return o.error?{errMsg:`${d.api}:fail ${o.reason}`}:{errMsg:`${d.api}:ok`}}async function f(a,b){const c=b.args,d=c.dirPath,e=s.getCurrent(),f=x.mkdir(e,d);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`}}async function g(a,b){const c=b.args,d=c.dirPath,e=s.getCurrent(),f=x.rmdir(e,d);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`}}async function h(a,b){const c=b.args,d=c.dirPath,e=s.getCurrent(),f=x.readdir(e,d);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`,files:f.files}}async function i(a,b){const c=b.args,d=c.srcPath,e=c.destPath||'http://usr',f=s.getCurrent(),g=x.copyFile(f,d,e);return g.error?{errMsg:`${b.api}:fail ${g.reason}`}:{errMsg:`${b.api}:ok`}}async function j(a,b){const c=b.args,d=c.filePath,e=c.encoding||'utf-8',f=s.getCurrent(),g=x.appendFile(f,d,c.data,e);return g.error?{errMsg:`${b.api}:fail ${g.reason}`}:{errMsg:`${b.api}:ok`}}async function k(a,b){const c=b.args,d=c.oldPath,e=c.newPath||'http://usr',f=s.getCurrent(),g=x.rename(f,d,e);return g.error?{errMsg:`${b.api}:fail ${g.reason}`}:{errMsg:`${b.api}:ok`}}async function l(a,b){const c=b.args,d=c.path,e=s.getCurrent(),f=x.getFileRealPath(d,e);return o.existsSync(f.fileRealPath)?{errMsg:`${b.api}:ok`}:{errMsg:`${b.api}:fail no such file or directory, access "${d}"`}}async function m(a,b){const c=b.args,d=c.filePath,e=s.getCurrent(),f=x.unlink(e,d);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`}}async function n(a,b){const c=b.args,d=c.path,e=s.getCurrent(),f=x.stat(e,d);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`,mode:f.mode,size:f.size,lastAccessedTime:f.lastAccessedTime,lastModifiedTime:f.lastModifiedTime}}const o=require('fs'),p=require('path'),q=require('crypto'),r=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),s=require('./3bfffbe88b3d923921f851c0697974fe.js'),{enterBackground:t,enterForeground:u}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),v=require('mkdir-p'),w=require('rmdir'),x=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),y={".doc":!0,".xls":!0,".ppt":!0,".pdf":!0,".docx":!0,".xlsx":!0,".pptx":!0};module.exports={saveFile:c,saveFileSync:c,openDocument:async function(a,b){if(global.autoTest)return{errMsg:`${b.api}:ok`};const c=b.args;let{filePath:d,fileType:e}=c;1004000>s.getLibVersionNumber()&&(e='');let f=!1;if(!e){const a=p.extname(d).toLowerCase();f=!y[a]}else f=!y[`.${e}`];if(f)return{errMsg:`${b.api}:fail filetype not supported`};const g=x.getFileRealPath(d);let h=g.fileRealPath;if(!o.existsSync(h))return{errMsg:`${b.api}:fail file not exist'`};if(t('openDocument'),e){const a=o.readFileSync(h);h=`${h}.${e}`,o.writeFileSync(h,a),nw.Shell.openItem(h)}else nw.Shell.openItem(h);return setTimeout(()=>u('openDocument'),200),{errMsg:`${b.api}:ok`}},getSavedFileList:async function(a,b){const c=s.getCurrent(),d=x.getSavedFileList(c);return{errMsg:`${b.api}:ok`,fileList:d.fileList}},getSavedFileInfo:async function(a,b){const c=b.args,d=x.getFileInfo(c.filePath,'','store');return d.error?{errMsg:`${b.api}:fail ${d.reason}`}:{errMsg:`${b.api}:ok`,size:d.size,createTime:d.createTime}},getFileInfo:async function(a,b){const c=b.args,d=c.filePath,e=c.digestAlgorithm||'md5',f=x.getFileInfo(d,e);return f.error?{errMsg:`${b.api}:fail ${f.reason}`}:{errMsg:`${b.api}:ok`,size:f.size,digest:f.digest}},removeSavedFile:async function(a,b){const c=b.args,d=x.removeSavedFile(c.filePath);return d.error?{errMsg:`${b.api}:fail ${d.reason}`}:{errMsg:`${b.api}:ok`}},base64ToTempFilePath:async function(a,b){const c=b.args;if(c.base64Data){const a=s.getCurrent();let d='';switch(c.fileType&&c.fileType.toLowerCase()){case'jpg':{d='.jpg';break}case'mov':{d='.mov';break}case'mp4':{d='.mp4';break}case'png':{d='.png';break}case'aac':{d='.aac';break}case'mp3':{d='.mp3';break}case'webm':{d='.webm';break}case'ogg':{d='.ogg';break}default:d='.png';}const e=x.saveBase64DataToFile(a,c.base64Data,d);if(!e.error)return{errMsg:`${b.api}:ok`,tempFilePath:e.tempFilePath}}return{errMsg:`${b.api}:fail`}},readFile:d,readFileSync:d,writeFile:e,writeFileSync:e,mkdir:f,mkdirSync:f,rmdir:g,rmdirSync:g,readdir:h,readdirSync:h,access:l,accessSync:l,unlink:m,unlinkSync:m,stat:n,statSync:n,unzip:async function(a,b){const c=b.args,d=c.zipFilePath,e=c.targetDirectory||'http://usr',f=s.getCurrent(),g=x.unzip(f,d,e);return g.error?{errMsg:`${b.api}:fail ${g.reason}`}:{errMsg:`${b.api}:ok`}},fs_rename:k,fs_renameSync:k,fs_copyFile:i,fs_copyFileSync:i,fs_appendFile:j,fs_appendFileSync:j}}(require('lazyload'),require);