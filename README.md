# WQcloud Video

腾讯云视频Node.js SDK

[![npm](https://img.shields.io/npm/v/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video) [![npm](https://img.shields.io/npm/dm/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video) [![npm](https://img.shields.io/npm/dt/wqcloud-video.svg?style=plastic)](https://npmjs.org/package/wqcloud-video)

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

## 操作类/查询类接口

查询直播状态示例:

```js
// API调用地址为： http://fcgi.video.qcloud.com/common_access
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

TODO: 由于暂时没有权限,所以无法进行开发测试.

## 事件消息通知

TODO: 下一个版本进行完善

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)