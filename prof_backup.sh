#!/bin/bash

git status --porcelain
git add profiles/*
git commit -m "backup of changed profiles [CI SKIP]"
git push origin master