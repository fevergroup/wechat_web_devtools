'use strict';!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('./72653d4b93cdd7443296229431a7aa9a.js');module.exports={saveScreenShot:(b,d)=>new Promise((e,f)=>{a.writeFile(b,d,{encoding:null},(a)=>{a&&(c.error(`save screenshot failed, fileName: ${b}`),f(a)),e()})}),saveHTML:(b,d)=>new Promise((e,f)=>{a.writeFile(b,d,{encoding:null},(a)=>{a&&(c.error(`save HTML failed, fileName: ${b}`),f(a)),e()})}),saveText:(b,d)=>new Promise((e,f)=>{a.writeFile(b,d,{encoding:'utf8'},(a)=>{a&&(c.error(`save text failed, fileName: ${b}`),f(a)),e()})})}}(require('lazyload'),require);