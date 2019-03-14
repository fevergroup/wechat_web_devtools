const shell = require("child_process");
const drone = require('./lib/drone')
const env = require('./lib/env')
const path = require('path')

let version = 'dev'
try{
  version = require(path.join(process.cwd(),'package.json')).version
}catch(err){
}

/**
 * @param {string} file 
 * @param {string[]} args 
 */
const exec = (file='',args=[])=>new Promise((rl,rj)=>{
  const proc = shell.spawn(file,  args, {  stdio: 'inherit' })
  proc.on('exit',()=>{ rl() })
  proc.on('error', err=>rj(err) )
})

const shExec = (cmd='')=>exec('sh',['-c',cmd])

const uploadCmd = ()=>shExec(`/wxdt/bin/cli --upload ${version}@$(pwd) --upload-desc '${version}'`)

const formatTime = (time='')=>new Date(Number(time)*1000).toLocaleString('chinese',{ timeZone:'Asia/Shanghai' })

async function SendRequestLoginMessage() {

  let report = {
    msgtype: 'link',
    link: {
      'title': `${drone.repo_name} ${drone.build_number} 微信小程序上传需要登录`,
      'text': `微信开发工具登录已过期, 需要重新扫码登录. 打开链接地址进行扫码. \n发送时间: ${formatTime(Date.now().toString())}`,
      'messageUrl': drone.build_link,
    }
  }
  
  await exec("curl", [
    '-X', 'POST',
    '-H', `Content-Type:application/json; charset=UTF-8`,
    '-d', `'`+JSON.stringify(report)+`'`,
    env.get('report_hook'),
  ]);
  
  shExec('/wxdt/bin/cli --login')

}

async function main() {

  try{
    await uploadCmd()
  }catch(err){
    await SendRequestLoginMessage()
    await uploadCmd()
  }
  
}

main()
