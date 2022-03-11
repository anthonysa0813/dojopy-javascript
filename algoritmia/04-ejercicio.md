Mario
This exercise is borrowed from CS50, the Harvard introductory course to computer science grin

The exercise is called Mario because toward the end of World 1-1 in Nintendo’s Super Mario Brothers, Mario must ascend a right-aligned pyramid of blocks like this one:

https://cs50.harvard.edu/x/2020/psets/1/mario/less/pyramid.png

This program should ask the user for height and print a right-aligned pyramid made of hashes (#) of that height.

Here are some examples:

$ node 04-ejercicio.js

Pyramid height: 8

#

##

###

####

#####

######

#######
########
$
$ node 04-ejercicio.js

Pyramid height: 4

#

##

###

####

$
$ node 04-ejercicio.js

Pyramid height: 2

#

##

$
$ node 04-ejercicio.js

Pyramid height: 1

#

$
The heigh should be between 1 and 8. If the user input is something different, the program should ask again and again until getting a valid number:

$ node 04-ejercicio.js

Pyramid height: 0
Pyramid height: -5
Pyramid height: anything!
Pyramid height: 5 #

##

###

####

#####

$
