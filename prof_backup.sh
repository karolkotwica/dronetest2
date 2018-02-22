#!/bin/bash

git status --porcelain
# git add profiles/*
# git commit -m "Autocommit profiles from DEV environment [CI SKIP]"
git fetch origin master
git merge origin/master
# git push origin master