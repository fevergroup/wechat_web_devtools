'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./fbb55aa732a5fdce7b8e14171c2b3361.js'),b=require('./f7806acc0e6f141f3b11c7faf34d32ad.js'),c=require('./b628a823c8840339a0dbe1ac6a0aa749.js'),d=require('./300d640a40a6d4f2f1ac8ddba4bfe57a.js'),e=require('./0d73e624944e97f7801537e2ca044ee2.js'),f=require('./7d1472568e6410618b620b5dff451f53.js'),g=require('./a0587038690857aaa0620105a1ea4815.js'),h=require('./283bf26e17ecd93daa7ac51c1661e1d0.js'),i=require('./e62903399498025880a0e63dea052fa3.js'),j=require('./15d6db70c90318bb7188dc763e8cae1f.js'),k=require('./3de14a9c704ee94561d59533059161f7.js'),l=require('./f95c72a853f9f39f52b19b1f02806d98.js'),m=require('./a81bc67025235ccc252f27ad624704e9.js'),n=require('./4c01a7ab7d668ed1833b8673168232e6.js'),o=require('./fc4fc5cb1aff35fd1aebc4dcfc731bab.js'),p=require('./aa77abfb58a34ba25a8013f75fdbf5c0.js'),q=require('./968db1e74e83c83407a447088632cc45.js'),r=require('./7d5911a127c3b84829a5714e3cdbe70e.js'),s=require('./cb01260a4e3a2d7bc34146cc05680c29.js'),t=require('./dae2c8392c7ac137ccc03b0c047e91f4.js'),u=require('./9ab52b8e70d64c639b45bbd1a421115b.js'),v=require('./24ec3c0ce21b76e82c71080ad64d9f72.js'),w=require('./899a15613443dfa10f3a65f6b133f9ab.js'),x=require('./d6a6c38ae911f4b3512add74577840c6.js'),y=require('./1c53ab679666fbba4a475509a47b49dc.js'),z=require('./998ba1831d70a77ef74c0eaaa625ad69.js'),A=require('./79f68e3c828f6e81c061539d727d46ad.js'),B=require('./fa1c2cfd79f9d3c3aa5971ee96963f69.js'),C=require('./f729c34c25280013695137d07e174c38.js'),D=require('./0ec1488248cf7d0c947e709101029e09.js'),E={login:a,refreshSession:a,operateWXData:a,authorize:a,openWeRunSetting:a,chooseInvoiceTitle:a,openAddress:a,addPhoneContact:a,createAudioInstance:b,setAudioState:b,getAudioState:b,operateAudio:b,openBluetoothAdapter:c,closeBluetoothAdapter:c,getBluetoothAdapterState:c,startBluetoothDevicesDiscovery:c,stopBluetoothDevicesDiscovery:c,getBluetoothDevices:c,getConnectedBluetoothDevices:c,createBLEConnection:c,closeBLEConnection:c,getBLEDeviceServices:c,getBLEDeviceCharacteristics:c,readBLECharacteristicValue:c,writeBLECharacteristicValue:c,notifyBLECharacteristicValueChanged:c,addCard:d,openCard:d,getClipboardData:e,setClipboardData:e,getSystemInfo:f,getSystemInfoSync:f,getNetworkType:f,getNetworkTypeSync:f,makePhoneCall:f,enableAccelerometer:f,enableCompass:f,getScreenBrightness:f,setScreenBrightness:f,setKeepScreenOn:f,captureScreen:f,vibrateLong:f,vibrateShort:f,verifyPlugin:f,batchGetContact:f,getBatteryInfo:f,getBatteryInfoSync:f,pageNotFoundCallback:f,saveFile:g,saveFileSync:g,openDocument:g,getSavedFileList:g,getSavedFileInfo:g,removeSavedFile:g,base64ToTempFilePath:g,readFile:g,readFileSync:g,writeFile:g,writeFileSync:g,getFileInfo:g,mkdir:g,mkdirSync:g,rmdir:g,rmdirSync:g,readdir:g,readdirSync:g,access:g,accessSync:g,unlink:g,unlinkSync:g,stat:g,statSync:g,unzip:g,fs_rename:g,fs_renameSync:g,fs_copyFile:g,fs_copyFileSync:g,fs_appendFile:g,fs_appendFileSync:g,getLocation:h,openLocation:h,chooseLocation:h,chooseFile:i,chooseVideo:i,chooseImage:i,previewImage:i,getImageInfo:i,chooseMedia:i,saveVideoToPhotosAlbum:i,saveImageToPhotosAlbum:i,getMusicPlayerState:j,operateMusicPlayer:j,setBackgroundAudioState:j,operateBackgroundAudio:j,getBackgroundAudioState:j,navigateToMiniProgram:w,navigateBackMiniProgram:w,exitMiniProgram:w,showActionSheet:k,showToast:k,hideToast:k,showModal:k,navigateTo:l,navigateBack:l,redirectTo:l,switchTab:l,reLaunch:l,updateApp:l,openUrl:l,downloadFile:m,uploadFile:m,createUploadTask:m,operateUploadTask:m,createDownloadTask:m,operateDownloadTask:m,requestPayment:n,startRecord:o,stopRecord:o,operateRecorder:o,scanCode:q,openSetting:r,getSetting:r,shareAppMessage:s,showShareMenuWithShareTicket:s,showShareMenu:s,hideShareMenu:s,updateShareMenuShareTicket:s,updateShareMenuDynamic:s,shareAppMessageDirectly:s,getStorage:t,clearStorage:t,setStorage:t,removeStorage:t,getStorageInfo:t,getStorageSync:t,setStorageSync:t,clearStorageSync:t,removeStorageSync:t,getStorageInfoSync:t,setNavigationBarTitle:u,setNavigationBarColor:u,setNavigationBarRightButton:u,showNavigationBarLoading:u,hideNavigationBarLoading:u,stopPullDownRefresh:u,startPullDownRefresh:u,setTabBarBadge:u,showTabBar:u,hideTabBar:u,setTabBarStyle:u,setTabBarItem:u,setBackgroundColor:u,setBackgroundTextStyle:u,playVoice:v,pauseVoice:v,stopVoice:v,getAppConfig:p,reportRealtimeAction:p,reportKeyValue:p,reportIDKey:p,canvasToTempFilePath:x,canvasToTempFilePathSync:x,insertVideoPlayer:y,updateVideoPlayer:y,removeVideoPlayer:y,operateVideoPlayer:y,loadVideoResource:y,encodeArrayBufferSync:z,decodeArrayBufferSync:z,showKeyboard:A,hideKeyboard:A,updateKeyboard:A,insertTextView:B,updateTextView:B,removeTextView:B,insertImageView:B,updateImageView:B,removeImageView:B,removeImageView:B,animateCoverView:B,createLoadSubPackageTask:C,private_openUrl:D};let F={};const G={get(a,b){return b in F?F[b]:E[b]?(F=_extends({},F,E[b]),F[b]):void 0}};module.exports=new Proxy(F,G)}(require('lazyload'),require);