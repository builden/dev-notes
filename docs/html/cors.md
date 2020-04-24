# 跨域

## 相关的头

```ts
res.header['Access-Control-Allow-Origin'] = '*'; // 域名，只能配置一个域名，后台可以根据前端传过来的Host动态指定

// 预检
res.header['Access-Control-Allow-Method'] = 'GET,POST,PUT,DELETE';
res.header['Access-Control-Allow-Headers'] = 'SecretKey,AppKey,UniqueKey'; // 需要传入的参数名
res.header['Access-Control-Max-Age'] = 'GET,POST,PUT,DELETE';
```

## 简单请求、非简单请求

非简单请求：在发送请求之前会先发一个 OPTIONS 请求

## 方案

1. jsonp
2. cors
3. websocket
4. nginx 反向代理 / node.js 中间件反向代理
5. window.name + iframe
6. window.domain + iframe
7. location.hash + iframe
8. postMessage
