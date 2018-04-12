#!/bin/bash

exec 3>&1
nightwatch --verbose tests 2>&1 >&3 | tee -a output.html
exit ${PIPESTATUS[0]}