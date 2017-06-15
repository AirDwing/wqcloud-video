const request = require('./request');
const { isNumberString } = require('@dwing/common');

const DEFAULTS = {
  appid: ''
  // interface: '',
  // appkey: '',
  // sign: '',
  // t: getTimestamp(),
  // sign: ''
};

module.exports = options => new Proxy({}, {
  get: (target, property) =>
    (opts) => {
      const params = Object.assign({ interface: property }, DEFAULTS, options, Object.keys(opts).reduce((p, x) => {
        if (isNumberString(opts[x])) {
          p[`Param.n.${x}`] = opts[x];
        } else {
          p[`Param.s.${x}`] = opts[x];
        }
        return p;
      }, {}));
      return request('http://fcgi.video.qcloud.com/common_access', params);
    }
});
