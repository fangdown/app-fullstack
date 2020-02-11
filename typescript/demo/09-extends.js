"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fangdwon = /** @class */ (function () {
    function Fangdwon(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Fangdwon.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Fangdwon;
}());
var fangdown = new Fangdwon('zq', 30, 'web');
fangdown.interest();
var ChildFang = /** @class */ (function (_super) {
    __extends(ChildFang, _super);
    function ChildFang() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    ChildFang.prototype.zhuanQian = function () {
        console.log('一天一个亿');
    };
    // 重写父级方法
    ChildFang.prototype.interest = function () {
        _super.prototype.interest.call(this); // 可加可不加
        console.log('建立电商平台');
    };
    return ChildFang;
}(Fangdwon));
var xiaofang = new ChildFang('帅气方', 1, 'money');
xiaofang.interest();
xiaofang.zhuanQian();
