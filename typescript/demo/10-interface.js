"use strict";
// 接口
var myHusband = {
    sex: '男',
    insterest: '小姐姐'
};
var myHusband2 = {
    sex: '男',
    insterest: '小姐姐',
    age: 19
};
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return flag != -1;
};
console.log(mySearch('高、富、帅', '方'));
