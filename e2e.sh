#!/bin/bash

#nightwatch --verbose tests 2>&1 >&3 | tee -a output.html
nightwatch --verbose tests | tee -a output.html
exit ${PIPESTATUS[0]}