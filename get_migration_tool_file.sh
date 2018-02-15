#!/bin/bash

mkdir -p migration_tool
cd migration_tool

if [ -f ant-salesforce.jar ]; then
        wget http://www.sforce.britenet.com.pl/wp-content/themes/salesforce/js/jquery-2.1.1.min.js
	# echo 'file exists!!!!';
else
    wget https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_41.0.zip
    unzip salesforce_ant_41.0.zip
    cd ..
fi