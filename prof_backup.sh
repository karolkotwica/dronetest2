#!/bin/bash

if git status --porcelain | grep "profiles" then
	echo 'Profiles has changed';
	# git add profiles/*
	# git commit -m "test commit from drone [CI SKIP]"
	# git push origin master
else
	echo 'There are no changes to commit';
fi

#git status --porcelain
#ls
#git add profiles/*
#git status --porcelain
#git status
#git commit -m "test commit from drone [CI SKIP]"
#git log
#- git push origin master