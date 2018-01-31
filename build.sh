#!/bin/bash
mkdir -p migration_tool
cd migration_tool
pwd
ls

if [ -f ant-salesforce.jar ]; then
	echo 'file exists!!!!'
else
	echo 'file not exists!!!!'	
if

#if [ ! -f /migration_tool/ant-salesforce.jar ]; then
#    cd migration_tool
#    pwd 
#    echo 'file should exists!!!!'
#    ls
#    wget https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_41.0.zip
#    unzip salesforce_ant_41.0.zip
#    pwd
#    cd ..
#	pwd
#else
#   echo "Migration tool file found"
#fi