'use strict'
let a = +prompt("введите число a");
let b = +prompt("введите число b");
let result = (a < b) ? 'a<b' :
    (a > b) ? 'a>b' :
        'a=b';
        console.log(result);
        console.log('a+b=',a+b);
        console.log('a-b=',a-b);
        console.log('a/b=',a/b);
        console.log('a*b=',a*b);