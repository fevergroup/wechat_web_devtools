'use strict';!function(require,directRequire){const a=require('glob'),b=require('fs'),c=require('path'),d=require('crypto'),e=require('./72653d4b93cdd7443296229431a7aa9a.js');module.exports=async(f,g,h={})=>{let i=[new Buffer(1),new Buffer(4),new Buffer(4),new Buffer(4),new Buffer(1)];i[0].writeIntLE(190),i[1].writeInt32BE(1),i[4].writeIntLE(237);let j=0,k=[],l=[];const m=[],n=[];let o=[];return new Promise((p,q)=>{const r=Object.assign({nodir:!0},h),s={};let t=0;a(`${f}/**`,r,(a,r)=>{if(!a){r.forEach((a)=>{const e=b.readFileSync(a),g=c.relative(f,a);if(h.needMd5){const a=d.createHash('md5');a.update(e);const b=a.digest('hex');if(s[g]=b,h.ignoreFileMd5&&h.ignoreFileMd5[g]==b)return}const i=new Buffer(`/${g.replace(/\\/g,'/')}`);j++,m.push(i),n.push(e),/\.js\.map$/.test(a)||(t+=e.length,t+=i.length,t+=12)});let a=18+12*j+Buffer.concat(m).length;l=m.map((b,c)=>{const d=new Buffer(4);d.writeInt32BE(b.length);const e=new Buffer(4),f=n[c].length,g=a;e.writeInt32BE(g),a+=f;const h=new Buffer(4);return h.writeInt32BE(f),Buffer.concat([d,b,e,h])});const q=new Buffer(4);q.writeInt32BE(j),l.unshift(q),k=Buffer.concat(l),o=Buffer.concat(n),i[2].writeInt32BE(k.length),i[3].writeInt32BE(o.length),i=Buffer.concat(i);const u=Buffer.concat([i,k,o]);b.writeFileSync(g,u),e.info(`pack.js create ${g} success!`),t+=18,p({destPath:g,data:u,totalSize:t,fileMd5Info:s})}else q(a)})})}}(require('lazyload'),require);