# 缓存

- `F5` 刷新会跳过强缓存，但是会检查协商缓存
- `Ctrl+F5` 刷新会跳过强缓存和协商缓存，从服务器加载
- 缓存开关：Cache-Control, Pragma
- 缓存校验：Last-Modified, ETag, Expires
- Pragma 和 Expires 都是为了兼容 HTTP1.1 以下版本存在的，目前已经很少会用到了

## Last-Modified / If-Modified-Since

- 第一次请求时，返回状态码 200，Last-Modified 标记着文件在服务器端最后被修改的时间
- 第二次请求时，请求头添加 If-Modified-Since 的标记，用来询问服务器该时间之后文件是否被修改过
  - 如果资源没有变，则返回 304，使用浏览器缓存

## ETag / If-None-Math

- 第一次请求时，返回状态码 200，ETag 标记着当前资源在服务器的唯一标识符
- 第二次请求时，请求头添加 If-None-Match 的标记，用来询问服务器该文件有没有被修改

## ETag 主要为了解决 Last-Modified 无法解决的一些问题

1. 一些文件只是修改了文件的`修改时间`，但内容没有变，这个时候我们不希望客户端认为这个文件被修改了
2. 某些文件修改非常频繁，比如在秒以下的时间内进行修改，If-Modified-Since 能检查到的粒度是秒级
3. 某些服务器不能精确得到文件的最后修改时间

## 禁用缓存的常见方法

- 防止因为缓存导致客户看到的一直是老页面
- 微信 h5 因为会强缓存 html 页面，在访问 html 页面的时候 url 要加上随机 hash，其它方案都不生效

### 方法 1：直接在 Html 中

```html
<meta
  http-equiv="Cache-control"
  content="no-cache, no-store, must-revalidate"
/>
<meta http-equiv="Expires" content="0" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache" content="no-cache" />
```

### 方法 2：给请求的参数加 hash

```js
const url = 'index.html' + '?a=' + Math.random();
window.open(url);
```

### 方法 3：资源文件名加 hash

```html
<img src="http://xxx//img.123456.jpg" />
```

### 方式 4：服务器返回响应头

```js
response.setHeader('Cache-Control', 'no-cache, must-revalidate');

// 兼容老的
response.setHeader('Pragma', 'no-cache');
response.setDateHeader('Expires', 0);
```
