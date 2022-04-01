const proxy = [
  {
    context: '/api',
    target: 'http://localhost:3000',
    logLevel: 'debug',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
