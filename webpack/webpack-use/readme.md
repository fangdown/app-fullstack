## webpack 应用

### webpack打包后结构
> 匿名函数，传入入口文件，自定义__webpack_require__， 分析入口文件，返回模块
```js
(function(modules) {
  function __webpack_require__(moduleId) {
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({
  "./src/index.js":(function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
})

```