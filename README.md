# node-hashpjw

[![NPM](https://nodei.co/npm/binaryarray.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hashpjw)  
[![Build Status](https://secure.travis-ci.org/you21979/node-hashpjw.png?branch=master)](https://travis-ci.org/you21979/node-hashpjw)
[![Coverage Status](https://coveralls.io/repos/you21979/node-hashpjw/badge.png)](https://coveralls.io/r/you21979/node-hashpjw)

## install

npm i hashpjw

## simple

```
var hashpjw = require('hashpjw');
console.log(hashpjw("test") % 1000);
```

## usage

```
var hashpjw = require('hashpjw');
var TBLMAX = 5;
var list = new Array(TBLMAX);
for(var i = 0; i<TBLMAX; ++i) list[i] = [];
var user1 = {
    "id" : "hogehoge123",
    "name" : "test1"
};
var user2 = {
    "id" : "ppppp123",
    "name" : "test2"
};
var idx1 = hashpjw(user1.id) % TBLMAX;
list[idx1].push(user1);
var idx2 = hashpjw(user2.id) % TBLMAX;
list[idx2].push(user2);
console.log(list);
```



