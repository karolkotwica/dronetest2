#!/bin/bash
mkdir migration_tool;
if [ ! -f /migration_tool/ant-salesforce.jar ]; then
	echo "File not found"
   # cd migration_tool;
   # wget https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_41.0.zip;
   # unzip salesforce_ant_41.0.zip
   # pwd
   # cd ..
   # pwd
else
    echo "File found"
fi