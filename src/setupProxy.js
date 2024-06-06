// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/chatbot-common',
//     createProxyMiddleware({
//       target: 'http://3.107.45.248:5000/chatbot-common',
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/chatbot-service',
//     createProxyMiddleware({
//       target: 'http://3.107.45.248:5000/chatbot-service',
//       changeOrigin: true,
//     })
//   );
// };