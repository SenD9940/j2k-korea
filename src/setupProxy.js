const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/common',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000/chatbot-common',
      changeOrigin: true,
    })
  );
  app.use(
    '/service',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000/chatbot-service',
      changeOrigin: true,
    })
  );
};