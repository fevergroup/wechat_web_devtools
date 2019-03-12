#!/bin/sh
set -e

if [ -z "$1" ]; then
  exec /startup.sh
  exit 0
fi

# 将 /startup.sh 转到后台运行
sed s%'exec /bin/tini -- /usr/bin/supervisord -n -c'%'/usr/bin/supervisord -c'% -i /startup.sh
/startup.sh
while [ true ]
do
  if [ -d "/wxdt/dist" ]; then break; fi
  echo "sleep 1s 等待 /startup.sh 准备完毕. "
  sleep 1s
done

exec $@
