'use strict';!function(require,directRequire){const a=require('./c016c015550b8c8e4a79e8e85062bd17.js'),b=require('./76d9df7b0b3e47fbe17881420a4bef86.js'),c=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=d.dispatch.bind(d),f={CSS_SELECTOR:'css selector',LINK_TEXT:'link text',PARTIAL_LINK_TEXT:'partial link text',XPATH:'xpath',CLASS_NAME:'class name',TAG_NAME:'tag name',ID:'id',NAME:'name'};let g={};const h=(a,b,c)=>{let d=null;switch(b){case f.CSS_SELECTOR:{d=a.querySelector(c);break}case f.LINK_TEXT:case f.PARTIAL_LINK_TEXT:{const e=a.querySelectorAll('a');for(let a=0,g=e.length;a<g;a++){const g=e[a];if(b==f.LINK_TEXT&&g.innerText==c||b==f.PARTIAL_LINK_TEXT&&-1<g.innerText.indexOf(c)){d=g;break}}break}case f.XPATH:{const b=a.evaluate(c,a,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);b&&(d=b.singleNodeValue);break}}return d},i=(a,b,c)=>{let d=[];switch(b){case f.CSS_SELECTOR:{d=a.querySelectorAll(c);break}case f.LINK_TEXT:case f.PARTIAL_LINK_TEXT:{const e=a.querySelectorAll('a');for(let a=0,g=e.length;a<g;a++){const g=e[a];(b==f.LINK_TEXT&&g.innerText==c||b==f.PARTIAL_LINK_TEXT&&-1<g.innerText.indexOf(c))&&d.push(g)}break}case f.XPATH:{const b=a.evaluate(c,a,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);if(b){let a=b.iterateNext();for(d.push(a);a;)a=b.iterateNext(),d.push(a)}break}}return d};module.exports={[a.Name.FIND_ELEMENT]:async(a,e)=>{const f=d.getState();let i=document;switch(f.window.mainWindow){case c.MAIN_WINDOW_TYPE.DEV:{i=global.windowMap.get('MAIN').window.document;break}case c.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{i=global.windowMap.get('WEB_DEBUGGER').window.document;break}case c.MAIN_WINDOW_TYPE.ENTRANCE:case c.MAIN_WINDOW_TYPE.SELECT_PROJECT:case c.MAIN_WINDOW_TYPE.CREATE_PROJECT:case c.MAIN_WINDOW_TYPE.LOGIN:{i=global.windowMap.get('LOGIN').window.document;break}}const j=h(i,e.using,e.value);if(!j)return{status:b.NoSuchElement,value:{message:`no such element, ${JSON.stringify(e)}`}};const k=`${Math.random()}${Date.now()}`;return g={[k]:j},{status:b.Success,value:{ELEMENT:k}}},[a.Name.FIND_ELEMENTS]:async(a,e)=>{const f=d.getState();let h=document;switch(f.window.mainWindow){case c.MAIN_WINDOW_TYPE.DEV:{h=global.windowMap.get('MAIN').window.document;break}case c.MAIN_WINDOW_TYPE.WEB_DEBUGGER:{h=global.windowMap.get('WEB_DEBUGGER').window.document;break}case c.MAIN_WINDOW_TYPE.ENTRANCE:case c.MAIN_WINDOW_TYPE.SELECT_PROJECT:case c.MAIN_WINDOW_TYPE.CREATE_PROJECT:case c.MAIN_WINDOW_TYPE.LOGIN:{h=global.windowMap.get('LOGIN').window.document;break}}const j=i(h,e.using,e.value);g={};const k=[];return j.forEach((a)=>{const b=`${Math.random()}${Date.now()}`;k.push(b),g[b]=a}),{status:b.Success,value:k}},[a.Name.CLICK_ELEMENT]:async(a)=>{const c=a.getParameter('id'),d=g[c];return d?(d.click(),{status:b.Success}):{status:b.NoSuchElement,value:{message:'no such element'}}},[a.Name.GET_ELEMENT_TAG_NAME]:async(a)=>{const c=a.getParameter('id'),d=g[c];return d?{status:b.Success,value:d.tagName.toLowerCase()}:{status:b.NoSuchElement,value:{message:'no such element'}}},[a.Name.GET_ELEMENT_ATTRIBUTE]:async(a)=>{const c=a.getParameter('id'),d=a.getParameter('name'),e=g[c];return e?{status:b.Success,value:e.getAttribute(d)}:{status:b.NoSuchElement,value:{message:'no such element'}}},[a.Name.GET_ELEMENT_LOCATION]:async(a)=>{const c=a.getParameter('id'),d=g[c];if(!d)return{status:b.NoSuchElement,value:{message:'no such element'}};const e=d.getBoundingClientRect();return{status:b.Success,value:{x:e.left,y:e.top}}},[a.Name.GET_ELEMENT_SIZE]:async(a)=>{const c=a.getParameter('id'),d=g[c];if(!d)return{status:b.NoSuchElement,value:{message:'no such element'}};const e=d.getBoundingClientRect();return{status:b.Success,value:{width:e.width,height:e.height}}},[a.Name.GET_ELEMENT_RECT]:async(a)=>{const c=a.getParameter('id'),d=g[c];if(!d)return{status:b.NoSuchElement,value:{message:'no such element'}};const e=d.getBoundingClientRect(),f=d;return{status:b.Success,value:{x:e.left,y:e.top,width:e.width,height:e.height,scrollTop:f.scrollTop,scrollLeft:f.scrollLeft,scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth}}},[a.Name.GET_ELEMENT_VALUE_OF_CSS_PROPERTY]:async(a)=>{const c=a.getParameter('id'),d=a.getParameter('propertyName'),e=g[c];if(!e)return{status:b.NoSuchElement,value:{message:'no such element'}};const f=window.getComputedStyle(e);return{status:b.Success,value:f[d]}},[a.Name.SEND_KEYS_TO_ELEMENT]:async(a,c)=>{const d=a.getParameter('id'),e=g[d];if(!e)return{status:b.NoSuchElement,value:{message:'no such element'}};const f=c.value;e.focus();for(let b=0,d=f.length;b<d;b++)('INPUT'==e.tagName||'TEXTAREA'==e.tagName)&&(e.value+=key);return{status:b.Success,value:{}}},[a.Name.FIND_CHILD_ELEMENT]:async(a,c)=>{const d=a.getParameter('id'),e=g[d];if(!e)return{status:b.NoSuchElement,value:{message:'no such element'}};const f=h(e,c.using,c.value);if(!f)return{status:b.NoSuchElement,value:{message:`no such element, ${JSON.stringify(c)}`}};const i=`${Math.random()}${Date.now()}`;return g={[i]:f},{status:b.Success,value:{ELEMENT:i}}},[a.Name.FIND_CHILD_ELEMENTS]:async(a,c)=>{const d=a.getParameter('id'),e=g[d];if(!e)return{status:b.NoSuchElement,value:{message:'no such element'}};const f=i(e,c.using,c.value),h=[];return f.forEach((a)=>{const b=`${Math.random()}${Date.now()}`;h.push(b),g[b]=a}),{status:b.Success,value:h}}}}(require('lazyload'),require);