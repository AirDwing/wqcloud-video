const request = require('request');
const debug = require('debug');
const qs = require('querystring');
const { getDefer, md5, getTimestamp } = require('@dwing/common');

module.exports = (host, params = {}, timeout = 5000) => {
  const secret = params.appkey;
  delete params.appkey;
  if (params['Param.n.t']) {
    params.t = getTimestamp() + parseInt(params['Param.n.t'], 10);
  } else {
    params.t = getTimestamp();
  }
  params.sign = md5(`${secret}${params.t}`);
  const deferred = getDefer();

  debug('wqcloud:common:params')(params);
  request({
    method: 'GET',
    url: `${host}?${qs.stringify(params)}`,
    headers: [
      {
        name: 'content-type',
        value: 'application/x-www-from-urlencoded'
      }
    ],
    timeout: parseInt(timeout, 10)
  }, (err, res) => {
    if (err) {
      deferred.reject(err);
    }
    try {
      deferred.resolve(JSON.parse(res.body));
    } catch (e) {
      deferred.reject(err);
    }
  });

  return deferred.promise;
};
