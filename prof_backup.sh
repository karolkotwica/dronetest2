#!/bin/bash

if [ git status --porcelain | grep "profiles" ];
then
	echo 'inside 1'
	git add profiles/*
	git commit -m "backup of changed profiles [CI SKIP]"
	git push origin master	
else
	echo 'There are no changes to commit'	
	echo 'inside 2'
fi

echo 'inside 3'