# opendesk
Open Desk is a system monitoring software for users of Mac OS also commonly known as OSX. Open Desk utilizes Open Source Software like OSQuery, Electron, and Node.js to display System information. The information visualized by Open Desk is commonly used to diagnose technical issues and system bottlenecks.

# Update
Bundle size has been a huge issue with the OpenDesk project we have had users raising issues
about the size of our application and the memory usage of Open Desk for this reason OpenDesk 
will be ported from Electron to a Cocoa App for MacOS and will only be supported for MacOS users until further notice. 

## Note 
If you or anyone you know want to build a newer distribution for Debian based Linux Distros or Windows OS 
reach out to me on Facebook and I would be happy to help. I'm also looking into potentially using a native web view
for those other platforms as well.

## Project challenges
Some of our project's challenges include the distribution of our software through an easy to implement  .app binary in Mac OSX, A .pkg binary capable of installing our projects dependencies like OSQuery and moving our distributions .app binary to the user's Applications folder.

Another challenge of our application communication through an event-driven system between I/O and our Applications User Interface.

## Screenshots 
<img src="./assets/temp.png" alt="Temperature Screenshot" height="300" width="500">
