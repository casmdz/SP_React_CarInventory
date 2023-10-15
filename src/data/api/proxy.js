const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://flask-api-car-collection.onrender.com',
      changeOrigin: true,
    })
  );
};
