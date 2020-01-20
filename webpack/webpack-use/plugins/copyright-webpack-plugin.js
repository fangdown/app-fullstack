class CopyrightWebpackPlugin {
  constructor(options){
    console.log(options)
  }
  apply(compiler){
    // 同步
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', compilation => {
      console.log('开始了')
    })
    // 异步
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',(compilation, cb) => {
        compilation.assets['copyright.txt'] = {
          source: function(){
            return 'hello,copy'
          },
          size: function(){
            return 20
          }
        }
        cb()
      }
    )
  }
}
module.exports = CopyrightWebpackPlugin