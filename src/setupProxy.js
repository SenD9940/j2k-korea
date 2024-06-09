const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/chatbot-common/',
    createProxyMiddleware({
      target: 'https://fbf12.store',
      changeOrigin: true,
    })
  );
  app.use(
    '/chatbot-service/',
    createProxyMiddleware({
      target: 'https://fbf12.store',
      changeOrigin: true,
    })
  );
};