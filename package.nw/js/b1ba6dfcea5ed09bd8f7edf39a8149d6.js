'use strict';!function(require,directRequire){const a=require('./8fbd6def1ab387883f5913820f0bb2bf.js'),b=require('./dca9191eced65b3831d60c02d8d487c2.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./fc137838572a83604db39acff8e909e0.js'),f=require('./25d0beb4120ce2acafb4e03b95444fda.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:i}=require('react-redux');module.exports=i((a)=>{const b=a.simulator.currentWebviewID,c=a.simulator.webviewInfos[b],d=a.project.current,e=a.toolbar.deviceInfo||{},f=a.simulator.devtoolsDebugger&&a.simulator.devtoolsDebugger.resume,g=a.simulator.devtoolsDebugger&&a.simulator.devtoolsDebugger.stepOver;return{ua:e.ua||'',scene:a.simulator.scene,simulateUpdate:a.simulator.simulateUpdate,appConfig:a.simulator.appConfig,bbsLogConfig:a.config.bbsLogConfig,device:a.toolbar.deviceInfo,networkType:a.toolbar.network.list[a.toolbar.network.current],editorShow:a.window.editor&&a.window.editor.show,show:a.window.debug.show,popup:a.window.debug.popup,windowStatus:a.window.windowStatus,appLaunched:a.simulator.appLaunched,compileCommand:a.simulator.compileCommand,project:d,libVersion:d.libVersion,assdkCallbackInfo:a.simulator.assdkCallbackInfo,appRoute:a.simulator.appRoute,restartTimes:a.simulator.restartTimes,beginTime:a.simulator.beginTime,storage:d.storage&&d.storage.cache||{},subPackageLoaded:a.simulator.subPackageLoaded,decryptedInfo:a.simulator.decryptedInfo,debugInfo:a.simulator.debugInfo,console:a.debug.console,debuggerResume:f,debuggerStepOver:g,currentWebviewID:b,currentWebview:c}},(a)=>({setDebuggerWindow:h.bindActionCreators(d.setDebuggerWindow,a),assdkActions:h.bindActionCreators(b,a),simulatorActions:h.bindActionCreators(c,a),windowActions:h.bindActionCreators(d,a),toolbarActions:h.bindActionCreators(e,a),infoActions:h.bindActionCreators(g,a),BBS:f.BBS}))(a)}(require('lazyload'),require);