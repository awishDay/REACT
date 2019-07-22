const proxy = require('http-proxy-middleware'); //需要安装中间件

module.exports = function(app) {
  app.use(
    proxy("/mock", {
      target: 'http://localhost:5555',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/v2", {
      target: "https://api.douban.com",
      changeOrigin: true
    })
  );

};