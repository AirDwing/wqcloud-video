# WQcloud Video

腾讯云视频Node.js SDK

[![npm](https://img.shields.io/npm/v/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video) [![npm](https://img.shields.io/npm/dm/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video) [![npm](https://img.shields.io/npm/dt/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [安装和使用](#%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8)
- [参数说明](#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
- [推流生成器](#%E6%8E%A8%E6%B5%81%E7%94%9F%E6%88%90%E5%99%A8)
- [直播观看地址生成器](#%E7%9B%B4%E6%92%AD%E8%A7%82%E7%9C%8B%E5%9C%B0%E5%9D%80%E7%94%9F%E6%88%90%E5%99%A8)
- [操作类/查询类接口](#%E6%93%8D%E4%BD%9C%E7%B1%BB%E6%9F%A5%E8%AF%A2%E7%B1%BB%E6%8E%A5%E5%8F%A3)
- [统计类接口](#%E7%BB%9F%E8%AE%A1%E7%B1%BB%E6%8E%A5%E5%8F%A3)
- [事件消息通知](#%E4%BA%8B%E4%BB%B6%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5)
- [相关文档](#%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 安装和使用

国际惯例：

```bash
npm install wqcloud-video --save
# 或
yarn add wqcloud-video
```

公共参数：

```js
var options = {
  appid: '',
  appkey: '',
};
```

## 参数说明

这是一个示例传入的参数:

```js
{
  t: 10, // 会自动根据当前时间向后推10s, 如果不传,默认值为当前时间
  channel_id: 'test', // 会根据值的类型进行判断,变成 Param.s.channel_id
  status: 0 // 会根据值的类型进行判断,变成 Param.n.status
}
```

## 推流生成器

```js
const { getPushUrl } = require('wqcloud-video');

console.log(
  getPushUrl({
    bizid: 8888,
    streamid: 'test',
    key: 'aabbccdd001122333444', // 注意,这里是 推流防盗链Key
    expires: 3600
  })
);
// rtmp://8888.livepush.myqcloud.com/live/8888_test?bizid=8888&txTime=5943874C&txSecret=ffc8cc832447ea92335df69970e6ce25
```

## 直播观看地址生成器

```js
const { getPlayUrl } = require('wqcloud-video');

console.log(
  getPlayUrl({
    bizid: 8888,
    streamid: 'test'
  })
);
//{ rtmp: 'rtmp://8888.liveplay.myqcloud.com/live/8888_test',
//  flv: 'http://8888.liveplay.myqcloud.com/live/8888_test.flv',
//  m3u8: 'http://8888.liveplay.myqcloud.com/live/8888_test.m3u8' }
```

## 操作类/查询类接口

设置直播状态示例:

```js
// API调用地址为： http://fcgi.video.qcloud.com/common_access
const { fcgi } = require('wqcloud-video');

const qcloud = fcgi({
  appid: '1234567890',
  appkey: 'aabbccddeeffgghhiijjkkmmnnooppqq' // 注意,这里是 API鉴权Key
});

qcloud.Live_Channel_SetStatus({
  channel_id: '8888_test',
  status: 1
}).then(console.log).catch(console.err);
```

查询直播状态示例:

```js
const { fcgi } = require('wqcloud-video');

const qcloud = fcgi({
  appid: '1234567890',
  appkey: 'aabbccddeeffgghhiijjkkmmnnooppqq'
});

qcloud.Live_Channel_GetStatus({
  channel_id: '8888_test' 
}).then(console.log).catch(console.err);
```

## 统计类接口

查询指定直播流的推流和播放信息示例: 

```js
// API调用地址为： http://statcgi.video.qcloud.com/common_access
const { statcgi } = require('wqcloud-video');

const qcloud = statcgi({
  appid: '1234567890',
  appkey: 'aabbccddeeffgghhiijjkkmmnnooppqq'
});

qcloud.Get_LiveStat({
  stream_id: '8888_test'
}).then((data) => {
  console.log(JSON.stringify(data, null, 2));
}).catch(console.err);
```

## 事件消息通知

TODO: 下一个版本进行完善

## 相关文档

- vod(点播): <https://www.qcloud.com/document/product/266/8757>
- lvb(直播): <https://www.qcloud.com/document/product/267/5956>
- 您可能还会用到 `WQcloud`完整SDK: <https://github.com/willin/wqcloud>

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
