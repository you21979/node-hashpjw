#!/bin/sh
gcc -o cmd cmd.c

TBL=10000
VALUE="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

CLANG=`./cmd $TBL $VALUE`
NODE=`node cmd.js $TBL $VALUE`

echo $CLANG
echo $NODE
