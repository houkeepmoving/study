const handelUserRouter = (req, res) => {
  const method = res.method;
  const url = res.url;
  const path = url.split('?')[0];

  // 登录接口
  if (method === 'POST' && path === '/api/user/login') {
    return {
      message: '博客列表'
    }
  }
}
module.exports = handelUserRouter