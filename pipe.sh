#!/bin/bash

# we will know if the pipe fails, but if both 'command' and 'tee' fail, we will
# receive the exit code from 'tee'
echo 'starting'
# set -o pipefail
exec 3>&1
echo $SFUSR
ant -lib migration_tool/ant-salesforce.jar -Dusername=$SFUSR -Dpassword=$SFUSR | foo | ls
echo ${PIPESTATUS[*]}