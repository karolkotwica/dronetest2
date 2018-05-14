#!/bin/bash

# use --verbose option for debugging purposes
nightwatch --verbose tests/tests | tee -a output.html
exit ${PIPESTATUS[0]}