
const handelBlogRouter = require('../blog1/src/router/blog')
const handelUserRouter = require('../blog1/src/router/user')

const serverHandel =  (req, res) => {
  // 设置返回格式
  res.setHeader('ContentType', 'application/json')

  // 处理数据
  const blogData = handelBlogRouter(req, res)
  if (blogData) {
    res.end(
      JSON.stringify(resData)
    )
    return
  }
  const userData = handelUserRouter(req, res)
  if (userData) {
    res.end(
      JSON.stringify(resData)
    )
    return
  }
  res.writeHead(404, {'content-type':'text/plin'})
  res.write('404 Not Found\n')
  res.end()
}

module.exports  = serverHandel

// process.env.NODE_ENV