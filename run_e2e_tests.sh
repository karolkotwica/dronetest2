#!/bin/bash

# use --verbose option for debugging purposes
nightwatch tests/tests | tee -a output.html
exit ${PIPESTATUS[0]}