#!/bin/bash
# for example
# sh scriptname 1 2 3

echo "git status"
git status

echo "git add"
git add *.*

echo "git status"
git status

echo "git commit -m $1"
git commit -m "$1"

echo "git push"
git push origin master


function pause(){
   read -p "$*"
}
pause 'Press [Enter] key to continue...'
