#!/usr/bin/env bash
# this bash script is a part of the build process
# enter home dir

# cat <<EOF

                                                                                                       
#   ,ad8888ba,                                          88888888ba,                           88         
#  d8"'    `"8b                                         88      `"8b                          88         
# d8'        `8b                                        88        `8b                         88         
# 88          88  8b,dPPYba,    ,adPPYba,  8b,dPPYba,   88         88   ,adPPYba,  ,adPPYba,  88   ,d8   
# 88          88  88P'    "8a  a8P_____88  88P'   `"8a  88         88  a8P_____88  I8[    ""  88 ,a8"    
# Y8,        ,8P  88       d8  8PP"""""""  88       88  88         8P  8PP"""""""   `"Y8ba,   8888[      
#  Y8a.    .a8P   88b,   ,a8"  "8b,   ,aa  88       88  88      .a8P   "8b,   ,aa  aa    ]8I  88`"Yba,   
#   `"Y8888Y"'    88`YbbdP"'    `"Ybbd8"'  88       88  88888888Y"'     `"Ybbd8"'  `"YbbdP"'  88   `Y8a  
#                 88                                                                                     
#                 88                                                                                     

# EOF

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
