# node-hashpjw

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



