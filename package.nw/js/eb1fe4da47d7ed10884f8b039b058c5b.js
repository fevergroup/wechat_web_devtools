'use strict';!function(require,directRequire){const a=require('querystring'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=require('./b543ae2da406cea63b3ad8951f17b6c0.js');module.exports=class d{static openWindow(a,c={}){const d=function(a,c){const d={};for(const b of a)c.hasOwnProperty(b)&&(d[b]=c[b]);return c.width||(d.width=b.SIZE.DEFAULT.WIDTH),c.height||(d.height=b.SIZE.DEFAULT.HEIGHT),c.title||(d.title=nw.App.manifest.window.title),c.hasOwnProperty('focus')||(d.focus=!0),d.new_instance=!0,d}(['id','title','icon','position','always_on_top','width','height','min_width','min_height','max_width','max_height','resizable','kiosk','fullscreen','show_in_taskbar','frame','transparent','new_instance'],c);nw.Window.open(a,d)}static openMiniProgram({appid:b,projectname:e,projectpath:f,options:g={}}={}){if(!b||!e||!f)return!1;let h=`./html/index.html?devtype=miniprogram&devid=${+new Date}&appid=${b}&projectname=${e}&projectpath=${f}`;g.isTemp&&(h+='&isTemp=1'),g.isOnline&&(h+='&isOnline=1');let i=`mini_program_dev_window_${b}_${e}`;return g.simple&&(i+=`_${g.userInfo.openid}`,h+=`&simple=1&${a.stringify(g.userInfo)}`),d.openWindow(h,{id:i,title:`${decodeURIComponent(e)} - ${nw.App.manifest.window.title}`}),c.pendingOpenWindows.add(`${b}_${e}`),!0}static openTempOnlineMiniProgram({appid:a,projectname:b,projectpath:c}={}){return d.openMiniProgram({appid:a,projectname:b,projectpath:c,options:{isTemp:!0,isOnline:!0}})}static openWebDebugger(){const a='webdebugger_dev_window';return d.openWindow(`./html/index.html?devtype=webdebugger&devid=${+new Date}`,{id:a}),c.pendingOpenWindows.add(a),!0}}}(require('lazyload'),require);