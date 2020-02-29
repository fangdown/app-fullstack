const fs = require('fs')

fs.readFile('./txt/1.txt', function (err, data) {
  if (err) throw err
  console.log('data', data.toString())
})


const rs = fs.createReadStream('./txt/1.txt')
const ws = fs.WriteStream('./txt/2.txt')
rs.pipe(ws).on('data', data => {
  console.log(data);
  // ws.write(data)
}).on('finish', () => {
  console.log('finish');
})

// 防盗链，用pipe请求
// req.pipe(rq(proxyReq)).pipe(res);
// import * as rq from 'request';
// import * as express from 'express';
// import * as rp from 'request-promise';

// export const proxy = (
//   req: express.Request,
//   res: express.Response,
//   uri: string,
//   options: Record<string, any>
// ) => {
//   const data = req.query;
//   if (!options.method) options.method = req.method;
//   // 强制不要缓存数据
//   options.headers = { ...options.headers, 'cache-control': 'no-cache' };
//   const proxyReq = getRequest(uri, data, options);

//   req.pipe(rq(proxyReq)).pipe(res);
// };