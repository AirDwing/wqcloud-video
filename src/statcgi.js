const request = require('./request');
const { isNumberString } = require('@dwing/common');

const DEFAULTS = {
  cmd: ''
  // interface: '',
  // appkey: '',
  // sign: '',
  // t: getTimestamp(),
  // sign: ''
};

module.exports = options => new Proxy({}, {
  get: (target, property) =>
    (opts) => {
      if (options.appid) {
        options.cmd = options.appid;
        delete options.appid;
      }
      const params = Object.assign({ interface: property }, DEFAULTS, options, Object.keys(opts).reduce((p, x) => {
        if (isNumberString(opts[x])) {
          p[`Param.n.${x}`] = opts[x];
        } else {
          p[`Param.s.${x}`] = opts[x];
        }
        return p;
      }, {}));
      return request('http://statcgi.video.qcloud.com/common_access', params);
    }
});
