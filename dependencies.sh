#!/usr/bin/env bash 

# pull pkg from facebooks repo
curl -o osquery.pkg  https://pkg.osquery.io/darwin/osquery-3.3.2.pkg
# run package 
 ./osquery.pkg

