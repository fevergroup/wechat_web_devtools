'use strict';!function(require,directRequire){const a=require('redux'),b=require('./cef09d3782d104f6af75b4b32af353e6.js'),c=require('./0c4823143da6a69d89b64580be1021af.js'),d=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),e=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:g}=require('react-redux');module.exports=g((a)=>{const b=a.window.simulator||{},c=a.toolbar.deviceInfo||{},d=a.simulator.shareInfo,e=a.toolbar.deviceScale,f=a.toolbar.muted;return{position:b.position,ua:c.ua||'',dpr:c.dpr,shareInfoShow:d.show,width:c.screenWidth,deviceInfo:c,project:a.project.current,jssdkCallbackInfo:a.simulator.jssdkCallbackInfo,interfaceCallbackInfo:a.simulator.interfaceCallbackInfo,appConfig:a.simulator.appConfig||{},wxmlInspected:a.simulator.wxmlInspected,deviceScale:e,networkType:a.toolbar.network.list[a.toolbar.network.current],captureScreen:a.simulator.captureScreen,muted:f}},(a)=>({jssdkActions:f.bindActionCreators(b,a),simulatorActions:f.bindActionCreators(d,a),projectActions:f.bindActionCreators(e,a)}))(c)}(require('lazyload'),require);