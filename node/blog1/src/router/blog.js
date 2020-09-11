const handelBlogRouter = (req, res) => {
  const method = res.method;
  const url = res.url;
  const path = url.split('?')[0];

  // 获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    return {
      message: '博客列表'
    }
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    return {
      message: '博客详情'
    }
  }

  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    return {
      message: '新建一篇博客'
    }
  }

   // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      message: '更新一篇博客'
    }
  }

   // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/delete') {
    return {
      message: '删除一篇博客'
    }
  }
}
module.exports = handelBlogRouter