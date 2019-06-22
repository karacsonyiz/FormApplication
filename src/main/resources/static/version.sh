#!/bin/bash
log=$(git log --pretty=format:"<a href=\"http://kshdevgit.ksh.hu/idgs/elef/commit/%h\">%h</a> - %an" -1 HEAD^..HEAD)
ts=$(date +"%Y.%m.%d %H:%M:%S")
echo "document.write('$log $ts');" > ./js/version.js
 
 