#!/bin/bash

mkdir -p migration_tool
cd migration_tool
pwd
ls

if [ -f ant-salesforce.jar ]; then
	echo 'file exists!!!!';
else
	echo 'file not exists!!!!';
fi