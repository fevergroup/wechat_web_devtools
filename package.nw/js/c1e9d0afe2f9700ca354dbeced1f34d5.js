'use strict';!function(require,directRequire){const a=require('js-beautify').html,b=require('js-beautify').js_beautify,c=require('perfectionist'),d=require('postcss');module.exports=(e,f)=>{const g=e.code,h=e.fileType;let i;if('css'===h)i=d([c({indentSize:f,cascade:!1,trimTrailingZeros:!1,trimLeadingZero:!1,zeroLengthNoUnit:!1})]).process(g).css;else if('xml'===h){const b=g.replace(/\<wxs/g,'<script').replace(/\<\/wxs/g,'</script');i=a(b,{indent_size:f,unformatted:[],content_unformatted:['text']}),i=i.replace(/\<script/g,'<wxs').replace(/\<\/script/g,'</wxs')}else'javascript'===h&&(i=b(g,{indent_size:f}));return i}}(require('lazyload'),require);