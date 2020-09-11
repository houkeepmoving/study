// 引入模块
var http = require('http');
var querystring = require('querystring');

// 创建服务
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  console.log(res.header);
  let query = querystring.parse(req.url.split('?')[1]);
  var array = [];
  if (req.url.includes('/api/check') && query.keyword === 'sb') {
    for (let i = 0; i < 20; i++) {
      var json = {
        id: '',
        name: 'jiaomei',
        birthday: '1993-11-11',
        gender: 'male'
      }
      json.id = `1${i}`;
      array.push(json);
    }
    var reqJson = {
      sbList: array,
      message: '查询傻x成功',
      returncode: 0
    }
  }
  res.end(JSON.stringify(reqJson));
}).listen(8888, () => {
  console.log('server success!!!');
})