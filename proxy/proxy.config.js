const PROXY_KEYS = require('./proxy-keys');

module.exports = {
  [PROXY_KEYS.PROXY_PATH]: {
    target: '',
    secure: false,
    changeOrigin: true,
    pathRewrite: PROXY_KEYS.PROXY_PATH_REWRITE,
    logLevel: "debug"
  }
};
