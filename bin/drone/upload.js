const shell = require("child_process");
const drone = require('./lib/drone')
const env = require('./lib/env')
const path = require('path')

let version = 'dev'
try{
  version = require(path.join(process.cwd(),'package.json')).version
}catch(err){
}

const exec = (cmd='')=>shell.execFileSync("sh", ["-c", cmd ], { stdio: "inherit" });

const uploadCmd = ()=>exec(`/wxdt/bin/cli --upload ${version}@$(pwd) --upload-desc '${version}'`)

const formatTime = (time='')=>new Date(Number(time)*1000).toLocaleString('chinese',{ timeZone:'Asia/Shanghai' })

function SendRequestLoginMessage() {

  let report = {
    msgtype: 'link',
    link: {
      'title': `${drone.repo_name} ${drone.build_number} 微信小程序上传需要登录`,
      'text': `微信开发工具登录已过期, 需要重新扫码登录. 打开链接地址进行扫码. \n发送时间: ${formatTime(Date.now().toString())}`,
      'messageUrl': drone.build_link,
    }
  }
  
  shell.execFileSync("curl", [
    '-X', 'POST',
    '-H', `Content-Type:application/json; charset=UTF-8`,
    '-d', `'`+JSON.stringify(report)+`'`,
    env.get('report_hook'),
  ], { stdio: "inherit" });
  
  exec('/wxdt/bin/cli --login')

}

async function main() {

  try{
    uploadCmd()
  }catch(err){
    SendRequestLoginMessage()
    uploadCmd()
  }
  
}

main()
