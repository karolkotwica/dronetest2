#!/bin/bash

exec 3>&1
ant -lib migration_tool/ant-salesforce.jar -Dusername=$SFUSR -Dpassword=$SFPSS 2>&1 >&3 | tee -a output.html
exit ${PIPESTATUS[0]}