'use strict';!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('redux'),d=require('./37b4e44f6cb5308df338387678f31341.js'),e=require('./a44d6a009a6865f76e1da47c6c84025a.js'),f=require('./0b33efa8324f13c48329436edfa8d2c3.js'),g=require('./f53c8427c995d0915bad1fb1a545b516.js'),h=require('./a8c87029da0fa06e986298d447ab0fe2.js'),i=require('./fc137838572a83604db39acff8e909e0.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k=require('./1f98c7ca32b0549d99bce70cd41a3fcd.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),{connect:m}=require('react-redux');class n extends a.Component{constructor(a){super(a),this.state={alwaysOnTop:!1}}toggleSimulatorPosition(){this.props.toggleSimulatorPosition()}toggleAlwaysOnTop(){let a;try{a=this.context.window||nw.Window.get(),a.setAlwaysOnTop(!this.state.alwaysOnTop),this.setState({alwaysOnTop:!this.state.alwaysOnTop})}catch(a){}}onMutedChange(){this.props.setMuted(!this.props.muted)}handleRotate(){this.props.setDeviceRotated(!this.props.rotated)}render(){return global.onlySimulator?null:this.context.isPopup?a.createElement('div',{className:'simulator-toolbar'},a.createElement(d,{id:'simulator-toolbar-compact'}),this.props.mainWindow===l.MAIN_WINDOW_TYPE.WEB_DEBUGGER?null:a.createElement(e,{id:'simulator-toolbar-status'}),a.createElement('div',{className:'simulator-toolbar-action'},a.createElement('a',{href:'javascript:;'},a.createElement('i',{className:this.state.alwaysOnTop?'ui-icon-thumbtack-pinned':'ui-icon-thumbtack',onClick:this.toggleAlwaysOnTop.bind(this)})),this.props.project?a.createElement('a',{href:'javascript:;',onClick:this.onMutedChange.bind(this)},this.props.muted?a.createElement('i',{className:'ui-icon-mute'}):a.createElement('i',{className:'ui-icon-unmute'})):null,global.isSimple?null:a.createElement('a',{href:'javascript:;'},a.createElement('i',{className:'ui-icon-attach',onClick:this.props.toggleSimulatorPopup})),this.props.canRotate?a.createElement('a',{href:'javascript:;'},a.createElement('i',{className:'ui-icon-rotation',onClick:this.handleRotate.bind(this)})):null)):a.createElement('div',{className:'simulator-toolbar'},a.createElement(g,{id:'simulator-toolbar-device'}),a.createElement(k,{id:'simulator-toolbar-scale'}),a.createElement(f,{id:'simulator-toolbar-network'}),a.createElement('div',{className:'simulator-toolbar-action'},this.props.project?a.createElement('a',{href:'javascript:;',onClick:this.onMutedChange.bind(this)},this.props.muted?a.createElement('i',{className:'ui-icon-mute'}):a.createElement('i',{className:'ui-icon-unmute'})):null,global.isSimple?null:a.createElement('a',{href:'javascript:;'},a.createElement('i',{className:'ui-icon-detach',onClick:this.props.toggleSimulatorPopup})),this.props.canRotate?a.createElement('a',{href:'javascript:;'},a.createElement('i',{className:'ui-icon-rotation',onClick:this.handleRotate.bind(this)})):null))}}n.contextTypes={isPopup:b.bool,window:b.object},module.exports=m((a)=>{const b=a.window.simulator||{},c=a.window.mainWindow,d=a.project.current,e=a.toolbar,f=a.simulator;return{mainWindow:c,project:d,muted:a.toolbar.muted,simulatorShow:b.show,deviceInfo:e.deviceInfo,rotated:e.rotated,canRotate:e.deviceInfo.canRotate&&(f.appConfig||{}).resizable}},(a)=>({toggleSimulatorPosition:()=>a(h.toggleSimulatorPosition()),toggleSimulatorPopup:()=>a(h.toggleSimulatorPopup()),setMuted:(b)=>a(i.setMuted(b)),setDeviceRotated:(b)=>a(i.setDeviceRotated(b))}))(n)}(require('lazyload'),require);