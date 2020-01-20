const loaderUtils = require('loader-utils')
// 不能使用箭头函数

module.exports = function(source){
  console.log('source', source)
  // 原生方式
  // const name = this.query.name
  const options = loaderUtils.getOptions(this)
  const newSource = source.replace('fangdown', `diy-loader, name:${options.name}`)
  // return newSource
  // this.callback(null, newSource)
  
  //this.callback(
    // err: Error | null,
    // content: string | Buffer,
    // sourceMap?: SourceMap,
    // meta?: any
    // );
    
    const callback = this.async();
    setTimeout(() => {
      const result = source.replace('fangdown', `diy-loader, name:${options.name}`)
      callback(null, result)
    }, 2000);
}