#!/bin/bash

mkdir -p migration_tool
cd migration_tool
ls
if [ -e ant-salesforce.jar ];
then
	echo 'file exists!!!!'
else
    wget https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_41.0.zip
    unzip salesforce_ant_41.0.zip
    cd ..
fi