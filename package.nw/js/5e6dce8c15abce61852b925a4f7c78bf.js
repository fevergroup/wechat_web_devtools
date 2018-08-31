'use strict';!function(require,directRequire){const a=require('react'),b=require('classnames'),c=require('path'),d=require('./common/locales/index.js'),e=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),f=require('./ff946754202ecf377034d29daac7c8d9.js');class g extends a.Component{constructor(a){super(a),this.state={currentPanel:0},this.blinkObjects={}}componentDidMount(){this._cancalLocaleListener=d.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}handleCopyClick(a){const b=a.currentTarget.dataset.type,c=nw.Clipboard.get();c.set(this.props[b].toString());const e=this.blinkObjects[b];e&&(e.style.opacity='0.5',!this._blinkTimeout&&(this._blinkTimeout=setTimeout(()=>{e.style.opacity='1',this._blinkTimeout=null},200))),this.props.showSuccessTip(d.config.CONSOLE_COPY_SUCCESS)}handlePathOpenClick(){f.sendMessage('EDITOR',JSON.stringify({type:'COMMAND',command:'openFile',data:{path:('/'+c.posix.join(this.props.clientPath,(this.props.pathName||'')+'.js')).replace(/\/+/g,'/')}}))}handlePanelLabelClick(a){this.setState({currentPanel:a})}render(){if(global.onlySimulator)return null;const c=this.props,e=this.state.currentPanel;return a.createElement('div',{className:'simulator-status-bar'},a.createElement('div',{className:b('ui-flex',{"ui-flex-item":0===e})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,0)},d.config.PAGE_PATH),0===e?a.createElement('p',{ref:(a)=>this.blinkObjects.pathName=a,className:'ui-selectable',title:c.pathName},c.pathName?c.pathName:`(${d.config.EMPTY})`):null,0===e&&c.pathName?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'pathName'},d.config.COPY):null,0===e&&c.pathName?a.createElement('a',{onClick:this.handlePathOpenClick.bind(this)},d.config.OPEN):null),a.createElement('div',{className:b('ui-flex',{"ui-flex-item":1===e})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,1)},d.config.SCENE_VALUE),1===e?a.createElement('p',{ref:(a)=>this.blinkObjects.scene=a,className:'ui-selectable'},c.scene?c.scene:`(${d.config.EMPTY})`,c.scene?a.createElement('span',null,' '+c.sceneMap[c.scene]||''):null):null),a.createElement('div',{className:b('ui-flex',{"ui-flex-item":2===e})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,2)},d.config.PAGE_PARAMETERS),2===e?a.createElement('p',{ref:(a)=>this.blinkObjects.query=a,className:'ui-selectable'},c.query?c.query:`(${d.config.EMPTY})`):null,2===e&&c.query?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'query'},d.config.COPY):null))}}module.exports=g}(require('lazyload'),require);