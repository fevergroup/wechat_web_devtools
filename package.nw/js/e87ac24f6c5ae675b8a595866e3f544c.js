'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js');class c extends a.Component{constructor(a){super(a)}componentWillReceiveProps(){}callback(a){'function'==typeof this.props.callback&&this.props.callback(a)}handleCancelClick(){this.hide(),this.callback(!1)}handleConfirmClick(){this.hide(),this.callback(!0)}hide(){this.props.hideConfirm()}render(){const c=this.props,d=c.show?{}:b.displayNone,e=0<c.subList.length?{}:b.displayNone,f=c.subList.map((b)=>a.createElement('li',{key:b},b));return a.createElement('div',{style:d},a.createElement('div',{className:'weui-mask'}),a.createElement('div',{className:'weui-dialog'},a.createElement('div',{className:'weui-dialog__hd'},a.createElement('strong',{className:'weui-dialog__title'},c.title)),a.createElement('div',{className:'weui-dialog__bd'},c.content),a.createElement('ul',{style:e},f),a.createElement('div',{className:'weui-dialog__ft'},a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_default auto_test_btn_default',"data-type":'confirm',style:{color:c.cancelColor,display:c.showCancel?'':'none'},onClick:this.handleCancelClick.bind(this)},c.cancelText),a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_primary auto_test_btn_primary',"data-type":'confirm',style:{color:c.confirmColor},onClick:this.handleConfirmClick.bind(this)},c.confirmText))))}}module.exports=c}(require('lazyload'),require);