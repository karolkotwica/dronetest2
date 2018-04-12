#!/bin/bash

# we will know if the pipe fails, but if both 'command' and 'tee' fail, we will
# receive the exit code from 'tee'
echo 'starting'
# set -o pipefail
exec 3>&1
ant -lib migration_tool/ant-salesforce.jar -Dusername=$SFUSR -Dpassword=$SFPSS 2>&1 >&3 | tee -a output.html
echo ${PIPESTATUS[*]}
exit ${PIPESTATUS[0]}