#!/bin/bash

# we will know if the pipe fails, but if both 'command' and 'tee' fail, we will
# receive the exit code from 'tee'
set -o pipefail