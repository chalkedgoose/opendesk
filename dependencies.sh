#!/usr/bin/env bash
# this bash script is a part of the build process
# enter homen dir
cd
# enter desktop dir
cd Desktop

# setup installation file
mkdir opendesksetup
# enter installation file 
cd opendesksetup

# function setup
download_dependencies(){

}


# pull pkg from facebooks repo
curl -o dependency.pkg  https://pkg.osquery.io/darwin/osquery-3.3.2.pkg
echo "dependency installed! wait for the .zip with opendesk in it"
curl -o opendesk.zip https://github.com/calba5141114/opendesk/blob/master/dist/opendesk.zip
echo "Go to your desktop open openDeskDownloads"
echo "run dependency.pkg and then \n"
echo "unzip .zip and drop open desk into applications folder \n"
