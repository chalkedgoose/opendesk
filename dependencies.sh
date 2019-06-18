#!/usr/bin/env bash
# this bash script is a part of the build process
# enter home dir
cd
# enter desktop dir
cd Desktop

# setup installation file
mkdir opendesksetup
# enter installation file 
cd opendesksetup

# function setup
function download_dependencies(){
    # pull osquery from facebooks pkg repo
    curl -o dependency.pkg  https://pkg.osquery.io/darwin/osquery-3.3.2.pkg
    if [ -f dependency.pkg ]
    then
        echo "osquery downloaded"
    else
        echo "osquery download failed"
    fi
    # pull opendesk app from github repo
    curl -o opendeskapp.zip https://github.com/calba5141114/opendesk/blob/master/dist/opendesk.zip
    if [ -f opendeskapp.zip ]
    then 
        echo "opendeskapp downloaded"
    else
        echo "opendeskapp download failed"
    fi
}

download_dependencies


echo "Go to your desktop open openDeskDownloads"
printf "run dependency.pkg and then \n"
printf "unzip .zip and drop open desk into applications folder \n"
